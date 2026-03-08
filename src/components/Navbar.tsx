import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="text-2xl space-x-6 flex">
      
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-(--nav-active)"
            : "text-(--nav-inactive)"
        }
      >
        home
      </NavLink>

      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive
            ? "text-(--nav-active)"
            : "text-(--nav-inactive)"
        }
      >
        blog
      </NavLink>

      <NavLink
        to="/UI-UX"
        className={({ isActive }) =>
          isActive
            ? "text-(--nav-active)"
            : "text-(--nav-inactive)"
        }
      >
        ui-ux reactjs
      </NavLink>

      <NavLink
        to="/lms-project"
        className={({ isActive }) =>
          isActive
            ? "text-(--nav-active)"
            : "text-(--nav-inactive)"
        }
      >
        lms
      </NavLink>

    </div>
  )
}

export default Navbar