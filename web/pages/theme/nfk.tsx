import {ThemeVariant} from '@atb-as/theme/lib';
import React from 'react';
import Guide from 'web/src/guide';

import '@atb-as/theme/lib/themes/nfk-theme/theme.css';

export default function NfkTheme() {
  return <Guide theme={ThemeVariant.Nfk} />;
}
