import outputThemes from './create-theme';
import outputTypography from './create-typo';
import {AtBThemes, NfkThemes} from '../src/themes';

Promise.all([
  outputThemes('atb-theme', AtBThemes),
  outputThemes('nfk-theme', NfkThemes),
  outputTypography(),
]).then(() => console.log('Written CSS files'), console.error);
