import classes from "./HeaderLevels.module.css";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

const HeaderLevels = ({ numberOfSelectedLevel, loadedBirdsData }) => {
  const { t } = useTranslation();

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
      {loadedBirdsData.map((level, index) => (
        <button key={index} className={getButtonClass(index)}>
          {t("gamePage.levelTitle", { levelNumber: index + 1 })}
        </button>
      ))}
    </ul>
  );
};
export default HeaderLevels;
