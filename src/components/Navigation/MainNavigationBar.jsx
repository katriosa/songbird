import classes from "./MainNavigationBar.module.css";
import NavigationLink from "./NavigationLink";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const MainNavigationBar = () => {
  const { t } = useTranslation();

  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <img
          src="https://birds-quiz.netlify.app/static/media/logo.4f82cd73.svg"
          alt="logo"
          className={classes.logoImage}
        />
      </div>
      <nav className={classes.navLinksContainer}>
        <LanguageSwitcher />
        <ul className={classes.navLinksList}>
          <NavigationLink path="/" textContent={t("navigation.home")} />
          <NavigationLink path="/game" textContent={t("navigation.game")} />
          <NavigationLink
            path="/gallery"
            textContent={t("navigation.gallery")}
          />
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigationBar;
