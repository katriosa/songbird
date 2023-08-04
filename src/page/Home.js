import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import React from "react";

const HomePage = () => {
  return (
    <>
      <main>
        <div className={classes["bg-image"]}></div>
        <div className={classes.content}>
          <h1>
            Угадай <span>птицу</span> по голосу
          </h1>
          <Link to="/game">Начать</Link>
        </div>
      </main>
      <footer className={classes.footer}>
        <p>
          Автор: <a href="https://github.com/katriosa">katriosa</a>
        </p>
      </footer>
    </>
  );
};
export default HomePage;
