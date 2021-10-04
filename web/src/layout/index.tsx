import Head from 'next/head';
import Link from 'next/link';

import styles from './layout.module.css';

import {PropsWithChildren} from 'react';
import {ThemeVariant} from '@atb-as/theme/lib';
import {stringify} from 'querystring';

import {useRouter} from 'next/router';
import {queryToSettings} from '../utils/query';

type ThemeItem = {name: string; num: number};
const allThemes: ThemeItem[] = [];
for (let themeId in ThemeVariant) {
  if (!Number.isNaN(Number(themeId))) {
    allThemes.push({name: ThemeVariant[themeId], num: Number(themeId)});
  }
}

type LayoutProps = PropsWithChildren<{
  theme: ThemeVariant;
}>;
export default function Layout({theme, children}: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>AtB Design System</title>
        <meta name="description" content="Overview design system and colors" />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <ul>
              {allThemes.map((themeItem) => {
                return (
                  <LinkItem
                    key={themeItem.num}
                    themeItem={themeItem}
                    activeTheme={theme}
                  />
                );
              })}
            </ul>
          </nav>
        </header>
        {children}
      </main>
    </div>
  );
}

type LinkItemProps = {
  themeItem: ThemeItem;
  activeTheme: ThemeVariant;
};
function LinkItem({themeItem, activeTheme}: LinkItemProps) {
  const router = useRouter();
  const settings = queryToSettings(router.query);

  const href = `/theme/${themeItem.name.toLowerCase()}?${stringify(settings)}`;
  return (
    <li>
      <Link href={href}>
        <a
          className={and(
            styles.nav__link,
            themeItem.num === activeTheme
              ? styles['nav__link--active']
              : undefined,
          )}
        >
          {themeItem.name}
        </a>
      </Link>
    </li>
  );
}

function and(...classNames: (undefined | string)[]): string {
  return classNames.filter(Boolean).join(' ');
}
