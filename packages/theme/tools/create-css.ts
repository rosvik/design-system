import outputThemes from './create-theme';
import outputTypography from './create-typo';
import {AtBThemes, NfkThemes} from '../src/themes';
import {colors as AtBColors} from '../src/themes/atb-theme/colors';
import {colors as NfkColors} from '../src/themes/nfk-theme/colors';

Promise.all([
  outputThemes('atb-theme', AtBThemes, AtBColors),
  outputThemes('nfk-theme', NfkThemes, NfkColors),
  outputTypography(),
]).then(() => console.log('Written CSS files'), console.error);
