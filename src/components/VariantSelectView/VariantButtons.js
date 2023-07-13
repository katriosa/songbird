import classes from "./VariantButtons.module.css";
import VariantItem from "./VariantItem";

const VariantButtons = ({
  numberOfSelectedLevel,
  setNumberOfSelectedLevel,
  levelDataArr,
  compareBirdId,
  correctBirdId,
  incorrectBirdId,
  resetBirdIds,
}) => {
  const changeLevelHandler = () => {
    setNumberOfSelectedLevel(numberOfSelectedLevel + 1);
    resetBirdIds();
  };

  return (
    <>
      <section className={classes.wrapper}>
        <ul className={classes.list}>
          {levelDataArr.map((item) => (
            <VariantItem
              title={item.name}
              key={item.id}
              id={item.id}
              item={item}
              correctBirdId={correctBirdId}
              incorrectBirdId={incorrectBirdId}
              compareBirdId={compareBirdId}
            />
          ))}
        </ul>
        <div className={classes["btn-wrapper"]}>
          <div className={classes.button}>
            <button onClick={changeLevelHandler} disabled={!correctBirdId}>
              Дальше
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default VariantButtons;
