import React from 'react';
import { useTranslation } from 'react-i18next';

function ExampleComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button>{t('buttonLabel')}</button>
    </div>
  );
}

export default ExampleComponent;
