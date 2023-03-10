import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <h1>{t('main')}</h1>
            <h3>{t('welcome')}</h3>
        </div>
    );
};

export default MainPage;
