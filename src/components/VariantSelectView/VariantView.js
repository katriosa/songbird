import classes from "./VariantView.module.css";
import VariantViewItem from "./VariantViewItem";
import { useMemo } from "react";

const VariantView = ({ levelDataArr, correctBirdId, incorrectBirdId }) => {
  const clickedBird = useMemo(() => {
    if (levelDataArr) {
      return levelDataArr.filter((item) => {
        if (item.id === correctBirdId) {
          return correctBirdId;
        }
        if (item.id === incorrectBirdId) {
          return incorrectBirdId;
        }
      })[0];
    }
    return null;
  }, [levelDataArr, correctBirdId, incorrectBirdId]);

  const defaultContent = (
    <section className={classes.wrapper}>
      <div className={classes.default}>
        Послушайте плеер. Выберите птицу из списка.
      </div>
    </section>
  );

  if (clickedBird) {
    return <VariantViewItem clickedBird={clickedBird} />;
  }
  return defaultContent;
};
export default VariantView;
