import { useTranslation } from "react-i18next";

export const MainPage = () => {
  const {t} = useTranslation('main-page');
  return <h1>{t('temp')}</h1>;
};
