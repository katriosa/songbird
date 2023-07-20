import classes from "./VariantSelectView.module.css";
import VariantButtons from "./VariantButtons";
import VariantView from "./VariantView";

const VariantSelectView = ({
  setNumberOfSelectedLevel,
  numberOfSelectedLevel,
  levelDataArr,
  clickedBirdObj,
  compareBirdId,
  correctBirdId,
  incorrectBirdId,
  resetBirdIds,
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
      />
      <VariantView
        levelDataArr={levelDataArr}
        correctBirdId={correctBirdId}
        incorrectBirdId={incorrectBirdId}
        clickedBirdObj={clickedBirdObj}
      />
    </main>
  );
};
export default VariantSelectView;
