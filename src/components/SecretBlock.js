import classes from "./SecretBlock.module.css";

const SecretBlock = ({ randomBird, correctBirdId, score }) => {
  const defaultImage =
    "https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg";
  const defaultTitle = "*****";
  return (
    <section className={classes.wrapper}>
      <div className={classes["secret-content"]}>
        <div className={classes["secret-image"]}>
          <img
            src="https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg"
            alt="secret-bird"
          />
        </div>
        <div className={classes["secret-details"]}>
          <div className={classes["score-wrapper"]}>
            <div className={classes["score-min"]}>
              <h3>Счёт</h3>
              <h3>{score}</h3>
            </div>
          </div>
          <h2>*{randomBird.name}*</h2>
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
