import { useCallback } from "react";
import classes from "./SecretBlock.module.css";

const SecretBlock = ({ randomBird, isBirdGuessed, score }) => {
  const birdData = useCallback(() => {
    if (isBirdGuessed) {
      return { image: randomBird.image, title: randomBird.name };
    }
    return {
      image: "https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg",
      title: "*****",
    };
  }, [isBirdGuessed, randomBird.image, randomBird.name]);

  return (
    <section className={classes.wrapper}>
      <div className={classes["secret-content"]}>
        <div className={classes["secret-image"]}>
          <img src={birdData().image} alt="bird" />
        </div>
        <div className={classes["secret-details"]}>
          <div className={classes["score-wrapper"]}>
            <div className={classes["score-min"]}>
              <h3>Счёт</h3>
              <h3>{score}</h3>
            </div>
          </div>
          <h2>******</h2>
          <audio src={randomBird.audio} controls></audio>
        </div>
      </div>
      <div className={classes.score}>
        <h3>Счёт</h3>
        <h3>{score}</h3>
      </div>
    </section>
  );
};
export default SecretBlock;
