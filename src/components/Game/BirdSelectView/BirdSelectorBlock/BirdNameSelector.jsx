import classes from "./BirdNameSelector.module.css";
import BirdButton from "./BirdButton";

const BirdNameSelector = ({
  levelDataArr,
  compareBirdId,
  correctBirdId,
  incorrectBirdId,
  changeLevelHandler,
}) => {
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
export default BirdNameSelector;
