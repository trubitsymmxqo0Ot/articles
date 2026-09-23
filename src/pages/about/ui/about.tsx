import { useTranslation } from "react-i18next"

export const About = () => {
    const {t} = useTranslation('about');

    return (
        <section>
            <h2>{t('temp')}</h2>
        </section>
    )
}