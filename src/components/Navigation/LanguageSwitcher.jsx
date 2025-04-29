import { useTranslation } from "react-i18next";
import classes from "./LanguageSwitcher.module.css";
import { fetchBirdsRequest } from "../../redux/birdsActions";
import { useDispatch } from "react-redux";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguage = async (lng) => {
    await i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
    dispatch(fetchBirdsRequest());
  };

  const currentLanguage = i18n.language;

  const getButtonClass = (lng) =>
    `${classes.languageButton} ${
      currentLanguage === lng ? classes.activeButton : ""
    }`;

  return (
    <div className={classes.switcher}>
      <button
        onClick={() => changeLanguage("en")}
        className={getButtonClass("en")}
      >
        EN
      </button>
      <span>|</span>
      <button
        onClick={() => changeLanguage("ru")}
        className={getButtonClass("ru")}
      >
        RU
      </button>
    </div>
  );
};
export default LanguageSwitcher;
