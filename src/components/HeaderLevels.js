import classes from "./HeaderLevels.module.css";
import { birdsData } from "../store/data";
import { Link } from "react-router-dom";

const HeaderLevels = ({ numberOfSelectedLevel }) => {
  return (
    <ul className={classes.levels}>
      {birdsData.map((level, index) => {
        const buttonClass = `${classes.btn} ${
          numberOfSelectedLevel === index && classes.active
        }`;

        return (
          <button key={index} className={buttonClass}>
            Уровень {index + 1}
          </button>
        );
      })}
    </ul>
  );
};
export default HeaderLevels;
