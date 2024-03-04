import outputThemes from './create-theme';
import outputTypography from './create-typo';
import {AtBThemes, NfkThemes, FRAMThemes, TromsThemes} from '../src/themes';

Promise.all([
  outputThemes('atb-theme', AtBThemes),
  outputThemes('nfk-theme', NfkThemes),
  outputThemes('fram-theme', FRAMThemes),
  outputThemes('troms-theme', TromsThemes),
  outputTypography(),
]).then(() => console.log('Written CSS files'), console.error);
