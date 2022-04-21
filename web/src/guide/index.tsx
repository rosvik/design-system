import {useRouter} from 'next/router';
import styles from './guide.module.css';
import Layout from '../layout';

import getContrastRatio from 'get-contrast-ratio';

import {
  ContrastColor,
  createThemesFor,
  Mode,
  ThemeVariant,
  createTextTypeStyles,
  TextStyle,
  Themes,
} from '@atb-as/theme/lib/index';
import {CSSProperties, useEffect} from 'react';
import {queryToSettings} from '../utils/query';

const fontData = createTextTypeStyles('web');

type StatusTheme = Themes['light']['status'];
type Status = Themes['light']['status']['valid'];
type Colors = Themes['light']['colors'];

type GuideProps = {
  theme: ThemeVariant;
};
export default function Guide({theme}: GuideProps) {
  const router = useRouter();

  const settings = queryToSettings(router.query);
  useBodyClass([settings.mode, `override-${settings.mode}`]);

  const themeObj = createThemesFor(theme);
  const [colorPairs, transportPairs] = splitColorsOnTransport(
    themeObj[settings.mode].colors,
  );
  const stausPairs = Object.entries(
    convertStatusesToFlatList(themeObj[settings.mode].status),
  );
  const fontPairs = Object.entries(fontData);

  return (
    <Layout theme={theme}>
      <form action="/" method="get" className={styles.themeSelector}>
        <label htmlFor="mode">
          Theme mode:
          <select
            name="mode"
            id="mode"
            onChange={(e) => {
              router.push(`?mode=${e.currentTarget.value}`);
            }}
            defaultValue={settings.mode}
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </label>

        <input type="submit" value="Select" />
      </form>

      <section className={styles.section}>
        <h2>Colors</h2>
        {colorPairs.map(([name, color]) => (
          <Swatch
            key={name}
            mode={settings.mode}
            name={name}
            color={color as ContrastColor}
          />
        ))}
      </section>

      <section className={styles.section}>
        <h2>Transportation</h2>
        {transportPairs.map(([name, color]) => (
          <Swatch
            key={name}
            mode={settings.mode}
            name={name}
            color={color as ContrastColor}
          />
        ))}
      </section>

      <section className={styles.section}>
        <h2>Status</h2>
        {stausPairs.map(([name, color]) => (
          <Swatch
            key={name}
            mode={settings.mode}
            name={name}
            color={color as ContrastColor}
          />
        ))}
      </section>

      <section className={styles.section}>
        <h2>Typography</h2>
        {fontPairs.map(([name, fontStyle]) => (
          <FontType key={name} name={name} fontStyle={fontStyle} />
        ))}
      </section>
    </Layout>
  );
}

type ColorPair = [string, ContrastColor];
function splitColorsOnTransport(colors: Colors): [ColorPair[], ColorPair[]] {
  let data: [ColorPair[], ColorPair[]] = [[], []];

  for (let [name, color] of Object.entries(colors)) {
    const index = name.startsWith('transport') ? 1 : 0;
    data[index].push([name, color]);
  }

  return data;
}

function convertStatusesToFlatList(statuses: StatusTheme) {
  let data: {[key: string]: ContrastColor} = {};

  for (let [name, status] of Object.entries(statuses)) {
    data = {
      ...data,
      ...flattenStatus(name, status),
    };
  }

  return data;
}
function flattenStatus(name: string, status: Status) {
  return {
    [`${name}__main`]: status.main,
  };
}

type SwatchProps = {
  name: string;
  mode: Mode;

  color: ContrastColor;
};
function Swatch({mode, name, color}: SwatchProps) {
  let contrast = '';

  try {
    contrast = getContrastRatio(color.color, color.backgroundColor).toFixed(2);
  } catch (e) {}

  return (
    <section
      style={{
        backgroundColor: color.backgroundColor,
        color: color.color,
      }}
      className={styles.swatch}
    >
      <div className={styles.swatch__header}>
        <h3 className={styles.swatch__title}>
          {mode} / {name} + Text / {color.textColorType}
        </h3>
        <div className={styles.swatch__number}>{contrast}</div>
      </div>
      <div className={styles.swatch__colors}>
        {color.color} / {color.backgroundColor}
      </div>
    </section>
  );
}
type FontTypeProps = {
  fontStyle: TextStyle;
  name: string;
};
function FontType({name, fontStyle}: FontTypeProps) {
  return (
    <div className={styles.typography}>
      <div
        className={styles.typography__element}
        style={asCSSProperties(fontStyle)}
      >
        {name}
      </div>
      <div className={styles.typography__metadata}>
        {fontStyle.fontSize} / {fontStyle.lineHeight} /{' '}
        {fontStyle.letterSpacing}
      </div>
      <div className={styles.typography__metadata}>
        {fontStyle.fontWeight}
        {fontStyle.textDecorationLine}
      </div>
    </div>
  );
}
function asCSSProperties(fontStyle: TextStyle): CSSProperties | undefined {
  return {
    fontSize: `${fontStyle.fontSize}px`,
    lineHeight: `${fontStyle.lineHeight}px`,
    letterSpacing: `${fontStyle.letterSpacing}px`,
    textDecorationLine: fontStyle.textDecorationLine,
    textTransform: fontStyle.textTransform,
    fontWeight: fontStyle.fontWeight as any,
  };
}

function useBodyClass(classNames: string[]) {
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.className = '';
    }
    classNames.forEach((cn) => body?.classList.add(cn));
  });
}
