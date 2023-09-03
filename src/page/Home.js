import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import owl from "../assets/owl.json";
import { Player } from "@lottiefiles/react-lottie-player";

const HomePage = () => {
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
            <h1>Угадай птицу по голосу</h1>
          </div>
          <div className={classes.startButton}>
            <Link to="/game">Начать</Link>
          </div>
        </main>
      </div>
      <footer className={classes.footer}>
        <p>
          Автор: <a href="https://github.com/katriosa">katriosa</a>
        </p>
      </footer>
    </>
  );
};

export default HomePage;
