import Modal from "../../../UI/Modal";
import { Link } from "react-router-dom";
import classes from "./ResultWindow.module.css";
import { useTranslation } from "react-i18next";

const ResultWindow = ({ totalScore, maxScore }) => {
  const { t } = useTranslation();
  return (
    <Modal>
      <h3>{t("gamePage.result.title")}</h3>
      <p>{t("gamePage.result.description", { totalScore, maxScore })}</p>
      <ul className={classes.list}>
        <li>
          <Link to="/">{t("gamePage.result.restartButton")}</Link>
        </li>
        <li>
          <Link to="/gallery">{t("gamePage.result.viewGalleryButton")}</Link>
        </li>
      </ul>
    </Modal>
  );
};
export default ResultWindow;
