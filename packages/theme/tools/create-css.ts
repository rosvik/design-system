import outputThemes from './create-theme';
import outputTypography from './create-typo';
import {AtBThemes, NfkThemes, FRAMThemes} from '../src/themes';

Promise.all([
  outputThemes('atb-theme', AtBThemes),
  outputThemes('nfk-theme', NfkThemes),
  outputThemes('fram-theme', FRAMThemes),
  outputTypography(),
]).then(() => console.log('Written CSS files'), console.error);
