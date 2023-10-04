import React from 'react';
import '@material/mwc-top-app-bar';
import '@material/mwc-icon';
import '@material/mwc-button';
import LanguageSwitcher from '../LanguageSwitcher';

function Toolbar() {
  return (
    <mwc-top-app-bar>
      <mwc-button icon label="Menu"></mwc-button>
      <div slot="title">App Title</div>
      <mwc-icon slot="actionItems">favorite</mwc-icon>
      <mwc-icon slot="actionItems">search</mwc-icon>

      <LanguageSwitcher />
    </mwc-top-app-bar>
  );
}

export default Toolbar;
