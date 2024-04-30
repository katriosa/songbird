import classes from "./BirdInfoView.module.css";
import BirdInfoItem from "./BirdInfoItem";

const BirdInfoView = ({ clickedBirdData }) => {
  const defaultContent = (
    <section className={classes.wrapper}>
      <div className={classes.default}>
        Послушайте плеер. Выберите птицу из списка.
      </div>
    </section>
  );

  if (clickedBirdData) {
    return (
      <section className={classes.wrapper}>
        <BirdInfoItem clickedBird={clickedBirdData} />
      </section>
    );
  }
  return defaultContent;
};
export default BirdInfoView;
