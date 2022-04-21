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
  InteractiveColor,
} from '@atb-as/theme/lib/index';
import {CSSProperties, useEffect} from 'react';
import {queryToSettings} from '../utils/query';

const fontData = createTextTypeStyles('web');

type StaticColors = Themes['light']['static'];
type StaticColorTypes = keyof Themes['light']['static'];
type StaticColorNames<Key extends keyof StaticColors> =
  keyof Themes['light']['static'][Key];

type InteractiveColors = Themes['light']['interactive'];

type GuideProps = {
  theme: ThemeVariant;
};
export default function Guide({theme}: GuideProps) {
  const router = useRouter();

  const settings = queryToSettings(router.query);
  useBodyClass([settings.mode, `override-${settings.mode}`]);

  const themeObj = createThemesFor(theme);
  const fontPairs = Object.entries(fontData);
  const textColors = themeObj[settings.mode].text.colors;

  const staticColors = themeObj[settings.mode].static;
  const interactiveColors = interaciveObjects(
    themeObj[settings.mode].interactive,
  );

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
        <h1>Interactive colors</h1>
        {interactiveColors.map(([name, color]) => (
          <InteractiveSwatch
            key={name}
            mode={settings.mode}
            name={name}
            color={color as InteractiveColor}
          />
        ))}
      </section>

      <section className={styles.section}>
        <h1>Static colors</h1>
        {Object.keys(staticColors).map((val) => {
          const colorKey = val as StaticColorTypes;
          return (
            <div key={colorKey}>
              <h2>{colorKey}</h2>
              {Object.keys(staticColors[colorKey]).map((name: string) => {
                const colorName = name as StaticColorNames<typeof colorKey>;
                return (
                  <Swatch
                    key={colorName}
                    mode={settings.mode}
                    name={colorName}
                    color={staticColors[colorKey][colorName]}
                  />
                );
              })}
            </div>
          );
        })}
      </section>

      <section className={styles.section}>
        <h1>Typography</h1>
        <h2>Colors</h2>
        {Object.keys(textColors).map((color) => (
          <p
            key={color}
            style={{
              color: textColors[color as keyof typeof textColors],
            }}
          >
            {color} / {textColors[color as keyof typeof textColors]}
          </p>
        ))}

        <h2>Styles</h2>
        {fontPairs.map(([name, fontStyle]) => (
          <FontType key={name} name={name} fontStyle={fontStyle} />
        ))}
      </section>
    </Layout>
  );
}

type InteractivePair = [string, InteractiveColor];
function interaciveObjects(interactives: InteractiveColors): InteractivePair[] {
  let data: InteractivePair[] = [];

  for (let [name, color] of Object.entries(interactives)) {
    data.push([name, color]);
  }

  return data;
}

type SwatchProps = {
  name: string;
  mode: Mode;

  color: ContrastColor;
};
function Swatch({mode, name, color}: SwatchProps) {
  let contrast = '';

  try {
    contrast = getContrastRatio(color.text, color.background).toFixed(2);
  } catch (e) {}

  return (
    <section
      style={{
        backgroundColor: color.background,
        color: color.text,
      }}
      className={styles.swatch}
    >
      <div className={styles.swatch__header}>
        <h3 className={styles.swatch__title}>
          {mode} / {name}
        </h3>
        <div className={styles.swatch__number}>{contrast}</div>
      </div>
      <div className={styles.swatch__colors}>
        text: {color.text} / background: {color.background}
      </div>
    </section>
  );
}

type InteractiveSwatchProps = {
  name: string;
  mode: Mode;

  color: InteractiveColor;
};
function InteractiveSwatch({mode, name, color}: InteractiveSwatchProps) {
  let contrast = '';

  try {
    contrast = getContrastRatio(
      color.default.text,
      color.default.background,
    ).toFixed(2);
  } catch (e) {}

  return (
    <button
      style={{
        width: '100%',
        textAlign: 'left',
        border: '3px solid' + color.outline.background,
      }}
      className={styles.swatch + ' interactive-' + name}
    >
      <div className={styles.swatch__header}>
        <h3 className={styles.swatch__title}>
          {mode} / {name}
        </h3>
        <div className={styles.swatch__number}>{contrast}</div>
      </div>
      {Object.keys(color).map((value) => (
        <div className={styles.swatch__colors} key={value}>
          {value}: {color[value as keyof InteractiveColor].text} /{' '}
          {color[value as keyof InteractiveColor].background}
        </div>
      ))}
    </button>
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
