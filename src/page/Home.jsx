import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import owl from "../assets/owl.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={classes["bg-image"]}>
        <main className={classes.content}>
          <div className={classes.animationContainer}>
            <Player
              autoplay
              loop
              src={owl}
              style={{ height: "150px", width: "150px" }}
            ></Player>
          </div>
          <div className={classes.header}>
            <h1>{t("homePage.title")}</h1>
          </div>
          <div className={classes.startButton}>
            <Link to="/game">{t("homePage.startButton")}</Link>
          </div>
        </main>
      </div>
      <footer className={classes.footer}>
        <p>
          {t("homePage.author")}
          <a href="https://github.com/katriosa">katriosa</a>
        </p>
      </footer>
    </>
  );
};

export default HomePage;
