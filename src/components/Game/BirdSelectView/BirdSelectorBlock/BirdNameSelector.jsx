import classes from "./BirdNameSelector.module.css";
import BirdButton from "./BirdButton";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

const BirdNameSelector = ({
  levelDataArr,
  compareBirdId,
  correctBirdId,
  incorrectBirdId,
  changeLevelHandler,
}) => {
  const { t } = useTranslation();
  const [isButtonsActive, setButtonsActive] = useState(true);
  const onSelectCorrectBird = useCallback(() => {
    setButtonsActive(false);
  }, []);

  const onNextClick = useCallback(() => {
    setButtonsActive(true);
    changeLevelHandler();
  }, [changeLevelHandler]);
  return (
    <>
      <section className={classes.wrapper}>
        <ul className={classes.list}>
          {levelDataArr.map((item) => (
            <BirdButton
              title={item.name}
              key={item.id}
              id={item.id}
              item={item}
              correctBirdId={correctBirdId}
              incorrectBirdId={incorrectBirdId}
              compareBirdId={compareBirdId}
              onSelectCorrectBird={onSelectCorrectBird}
              isActive={isButtonsActive}
            />
          ))}
        </ul>
        <div className={classes["btn-wrapper"]}>
          <div className={classes.button}>
            <button onClick={onNextClick} disabled={!correctBirdId}>
              {t("gamePage.nextButton")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default BirdNameSelector;
