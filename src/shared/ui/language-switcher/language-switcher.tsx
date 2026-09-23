import { useTranslation } from "react-i18next";
import { Button } from "../button/button";
import Ru from "./assets/ru.svg?react";
import En from "./assets/en.svg?react";
import { useEffect, useState, type FC, type SVGProps } from "react";

type LanguageType = "ru" | "en";
interface ILocales {
  key: LanguageType;
  icon: FC<SVGProps<SVGSVGElement>>;
}

const DEFAULT_LC_KEY = "lang";
const LOCALES: ILocales[] = [
  {
    key: "ru",
    icon: Ru,
  },
  {
    key: "en",
    icon: En,
  },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const defaultStyles = "size-6 rounded-full overflow-hodden";

useEffect(() => {
    const savedLng = localStorage.getItem(DEFAULT_LC_KEY) as LanguageType;
    i18n.changeLanguage(savedLng);
}, [])

  const handleChangeLanguage = () => {
    setLang(lang === 'ru' ? 'en' : 'ru');
    i18n.changeLanguage(lang);
    localStorage.setItem(DEFAULT_LC_KEY, lang);
  };

  return (
    <Button onClick={handleChangeLanguage}>
      {LOCALES.map(
        (Item) =>
          Item.key === i18n.language && (
            <Item.icon key={Item.key} className={defaultStyles} />
          ),
      )}
    </Button>
  );
};
