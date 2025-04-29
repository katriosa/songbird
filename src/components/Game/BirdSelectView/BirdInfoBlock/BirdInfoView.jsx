import classes from "./BirdInfoView.module.css";
import BirdInfoItem from "./BirdInfoItem";
import { useTranslation } from "react-i18next";

const BirdInfoView = ({ clickedBirdData }) => {
  const { t } = useTranslation();
  const defaultContent = (
    <section className={classes.wrapper}>
      <div className={classes.default}>{t("gamePage.defaultText")}</div>
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
