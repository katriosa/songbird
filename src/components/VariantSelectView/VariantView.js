import classes from "./VariantView.module.css";

const VariantView = () => {
  const selectedVariant = (
    <>
      <div className={classes.text}>
        <div className={classes.float}>
          <img
            src="https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg"
            alt="selected-bird"
          />
        </div>
        <h3 className={classes.title}>Ворон</h3>
        <p className={classes.species}>Corvus corax</p>
        <p className={classes.description}>
          Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах
          крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В
          Англии бытует поверье, что в день, когда черные вороны улетят от
          Тауэра, монархия рухнет.
        </p>
      </div>
      <audio
        src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
        controls
      ></audio>
    </>
  );
  return (
    <section className={classes.wrapper}>
      <div>Послушайте плеер. Выберите птицу из списка.</div>
    </section>
  );
};
export default VariantView;
