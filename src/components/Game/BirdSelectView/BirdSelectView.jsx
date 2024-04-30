import classes from "./BirdSelectView.module.css";
import BirdNameSelector from "./BirdSelectorBlock/BirdNameSelector";
import BirdInfoView from "./BirdInfoBlock/BirdInfoView";

const BirdSelectView = ({
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
      <BirdNameSelector
        setNumberOfSelectedLevel={setNumberOfSelectedLevel}
        numberOfSelectedLevel={numberOfSelectedLevel}
        levelDataArr={levelDataArr}
        compareBirdId={compareBirdId}
        correctBirdId={correctBirdId}
        incorrectBirdId={incorrectBirdId}
        resetBirdIds={resetBirdIds}
        changeLevelHandler={changeLevelHandler}
      />
      <BirdInfoView
        levelDataArr={levelDataArr}
        correctBirdId={correctBirdId}
        incorrectBirdId={incorrectBirdId}
        clickedBirdData={clickedBirdData}
      />
    </main>
  );
};
export default BirdSelectView;
