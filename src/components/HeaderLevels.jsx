import classes from "./HeaderLevels.module.css";

const HeaderLevels = ({ numberOfSelectedLevel, loadedBirdsData }) => {
  return (
    <ul className={classes.levels}>
      {loadedBirdsData.map((level, index) => {
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
