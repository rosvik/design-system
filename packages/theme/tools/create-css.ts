import outputThemes from './create-theme';
import outputTypography from './create-typo';

Promise.all([outputThemes(), outputTypography()]).then(
  () => console.log('Written CSS files'),
  console.error,
);
