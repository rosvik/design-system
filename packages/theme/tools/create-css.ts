import outputThemes from './create-theme';
import outputTypography from './create-typo';
import {
  AtBThemes,
  NfkThemes,
  FRAMThemes,
  TromsThemes,
  InnlandetThemes,
  VKTThemes,
  FarteThemes,
} from '../src/generated/themes';

Promise.all([
  outputThemes('atb-theme', AtBThemes),
  outputThemes('nfk-theme', NfkThemes),
  outputThemes('fram-theme', FRAMThemes),
  outputThemes('troms-theme', TromsThemes),
  outputThemes('innlandet-theme', InnlandetThemes),
  outputThemes('vkt-theme', VKTThemes),
  outputThemes('farte-theme', FarteThemes),
  outputTypography(),
]).then(() => console.log('Written CSS files'), console.error);
