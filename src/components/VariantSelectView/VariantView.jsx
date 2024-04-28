import classes from "./VariantView.module.css";
import VariantViewItem from "./VariantViewItem";

const VariantView = ({ clickedBirdObj }) => {
  const defaultContent = (
    <section className={classes.wrapper}>
      <div className={classes.default}>
        Послушайте плеер. Выберите птицу из списка.
      </div>
    </section>
  );

  if (clickedBirdObj) {
    return (
      <section className={classes.wrapper}>
        <VariantViewItem clickedBird={clickedBirdObj} />
      </section>
    );
  }
  return defaultContent;
};
export default VariantView;
