import clsx from "clsx";
import { Link } from "shared/ui/Link/Link";

export const Navbar = () => {
  return (
    <header
      className={clsx(
        "w-full h-navbar bg-bg flex items-center justify-between gap-10",
        "px-10 py-5 overflow-hidden",
      )}
    >
      <div className="flex justify-end gap-15 items-center">
        <Link to="/">Главная</Link>
        <Link to="/about">О сайте</Link>
      </div>
    </header>
  );
};
