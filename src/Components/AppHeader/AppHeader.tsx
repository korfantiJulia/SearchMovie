import { Link, NavLink } from "react-router";
import cinema from "../../assets/cinema.jpg";

export const AppHeader = () => {
  return (
    <header className="relative h-[250px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${cinema})` }}
      />
      <div className="relative z-10 flex h-full items-center justify-between px-8">
        <Link to="/" className="flex items-center gap-3">
          {/* <img
            src={cinema}
            alt="Cinema logo"
            className="h-14 w-14 rounded-full object-cover shadow"
          /> */}

          <span className="text-6xl font-bold text-zinc-800">Movie Search</span>
        </Link>

        <nav>
          <ul className="flex items-center gap-6 text-2xl font-medium">
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
          </ul>
        </nav>
      </div>
    </header>
  );
};
