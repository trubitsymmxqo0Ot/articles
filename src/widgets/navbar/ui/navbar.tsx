import { Link } from "shared/ui/Link/Link";
import { ThemeSwitch } from "shared/ui/Theme/theme-switch";

export const Navbar = () => {
  return (
    <header className="w-full max-h-15 bg-bg flex items-center justify-between gap-10 px-10 py-5">
      <ThemeSwitch />
      <div className=" flex justify-end gap-15 items-center">
        <Link to="/">Главная</Link>
        <Link to="/about">О сайте</Link>
      </div>
    </header>
  );
};
