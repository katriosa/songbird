import classes from "./SecretBlock.module.css";

const SecretBlock = () => {
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
              <h3>0</h3>
            </div>
          </div>
          <h2>Певчий дрозд</h2>
          <audio
            src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
            controls
          ></audio>
        </div>
      </div>
      <div className={classes.score}>
        <h3>Счёт</h3>
        <h3>0</h3>
      </div>
    </section>
  );
};
export default SecretBlock;
