import classes from "./VariantSelectView.module.css";
import VariantButtons from "./VariantButtons";
import VariantView from "./VariantView";

const VariantSelectView = ({
  setNumberOfSelectedLevel,
  numberOfSelectedLevel,
  levelDataArr,
  randomBird,
  compareBirdId,
  correctBirdId,
  incorrectBirdId,
}) => {
  return (
    <main className={classes.main}>
      <VariantButtons
        setNumberOfSelectedLevel={setNumberOfSelectedLevel}
        numberOfSelectedLevel={numberOfSelectedLevel}
        randomBird={randomBird}
        levelDataArr={levelDataArr}
        compareBirdId={compareBirdId}
        correctBirdId={correctBirdId}
        incorrectBirdId={incorrectBirdId}
      />
      <VariantView />
    </main>
  );
};
export default VariantSelectView;
