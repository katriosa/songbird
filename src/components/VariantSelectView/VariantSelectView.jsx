import classes from "./VariantSelectView.module.css";
import VariantButtons from "./VariantButtons";
import VariantView from "./VariantView";

const VariantSelectView = ({
  setNumberOfSelectedLevel,
  numberOfSelectedLevel,
  levelDataArr,
  clickedBirdData,
  compareBirdId,
  correctBirdId,
  incorrectBirdId,
  resetBirdIds,
  changeLevelHandler,
}) => {
  return (
    <main className={classes.main}>
      <VariantButtons
        setNumberOfSelectedLevel={setNumberOfSelectedLevel}
        numberOfSelectedLevel={numberOfSelectedLevel}
        levelDataArr={levelDataArr}
        compareBirdId={compareBirdId}
        correctBirdId={correctBirdId}
        incorrectBirdId={incorrectBirdId}
        resetBirdIds={resetBirdIds}
        changeLevelHandler={changeLevelHandler}
      />
      <VariantView
        levelDataArr={levelDataArr}
        correctBirdId={correctBirdId}
        incorrectBirdId={incorrectBirdId}
        clickedBirdData={clickedBirdData}
      />
    </main>
  );
};
export default VariantSelectView;
