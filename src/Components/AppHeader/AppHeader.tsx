import { Link, NavLink } from "react-router";
import cinema from "../../assets/cinema.jpg";
import { ChangeThemeButton } from "../ChangeThemeButton/ChangeThemeButton";

export const AppHeader = () => {
  return (
    <header className="relative h-50 overflow-hidden sm:h-62.5">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${cinema})` }}
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-between px-4 py-4 sm:flex-row sm:px-8 sm:py-0">
        <Link to="/" className="flex items-center gap-2">
          <span className="bg-linear-to-r from-indigo-600 to-indigo-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            MovieSearch
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          <ul className="flex items-center gap-4 text-base font-medium sm:gap-6 sm:text-xl">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 underline underline-offset-4"
                    : "text-zinc-800 transition hover:text-indigo-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 underline underline-offset-4"
                    : "text-zinc-800 transition hover:text-indigo-500"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-500 underline underline-offset-4"
                    : "text-zinc-800 transition hover:text-indigo-500"
                }
              >
                Sign up!
              </NavLink>
            </li>
          </ul>

          <ChangeThemeButton />
        </nav>
      </div>
    </header>
  );
};
