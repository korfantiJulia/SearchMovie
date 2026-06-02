import { Link, NavLink } from "react-router";
import cinema from "../../assets/cinema.jpg";
import { ChangeThemeButton } from "../ChangeThemeButton/ChangeThemeButton";

export const AppHeader = () => {
  return (
    <header className="relative h-[250px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${cinema})` }}
      />
      <div className="relative z-10 flex h-full items-center justify-between px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="text-6xl font-bold text-zinc-800">Movie Search</span>
        </Link>

        <nav className="flex gap-6">
          <ul className="flex items-center gap-6 text-xl font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 underline" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 underline" : ""
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 underline" : ""
                }
              >
                Register
              </NavLink>
            </li>
          </ul>

          <ChangeThemeButton />
        </nav>
      </div>
    </header>
  );
};
