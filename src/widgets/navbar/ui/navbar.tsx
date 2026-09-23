import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Link } from "shared/ui/link/link";

export const Navbar = () => {
  const {t: tAbout} = useTranslation('about');
  const {t: tMain} = useTranslation('main-page');
  return (
    <header
      className={clsx(
        "w-full h-navbar bg-bg flex items-center justify-between gap-10",
        "px-10 py-5 overflow-hidden",
      )}
    >
      <div className="flex justify-end gap-15 items-center">
        <Link to="/">{tMain('title')}</Link>
        <Link to="/about">{tAbout('title')}</Link>
      </div>
    </header>
  );
};
