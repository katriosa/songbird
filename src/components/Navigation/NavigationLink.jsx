import classes from "./NavigationLink.module.css";
import { NavLink } from "react-router-dom";

const NavigationLink = ({ path, textContent }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? classes.activeLink : undefined
        }
        end
      >
        {textContent}
      </NavLink>
    </li>
  );
};
export default NavigationLink;
