import classes from "./HeaderLevels.module.css";
import { useCallback } from "react";

const HeaderLevels = ({ numberOfSelectedLevel, loadedBirdsData }) => {
  const getButtonClass = useCallback(
    (index) => {
      return `${classes.btn} ${
        numberOfSelectedLevel === index && classes.active
      }`;
    },
    [numberOfSelectedLevel]
  );

  return (
    <ul className={classes.levels}>
      {loadedBirdsData.map((level, index) => {
        return (
          <button key={index} className={getButtonClass(index)}>
            Уровень {index + 1}
          </button>
        );
      })}
    </ul>
  );
};
export default HeaderLevels;
