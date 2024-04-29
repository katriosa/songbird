import classes from "./MainNavigationBar.module.css";
import NavigationLink from "./NavigationLink";

const MainNavigationBar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img
          src="https://birds-quiz.netlify.app/static/media/logo.4f82cd73.svg"
          alt="logo"
        />
      </div>
      <nav>
        <ul>
          <NavigationLink path="/" textContent="Home" />
          <NavigationLink path="/game" textContent="Game" />
          <NavigationLink path="/gallery" textContent="Gallery" />
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigationBar;
