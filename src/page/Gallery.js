import Wrapper from "../UI/Wrapper";
import classes from "./Gallery.module.css";

const GalleryPage = () => {
  return (
    <Wrapper>
      <section className={classes.wrapper}>
        <div className={`${classes.arrow} ${classes["arrow-left"]}`} />
        <div className={`${classes.arrow} ${classes["arrow-right"]}`} />

        <div className={classes.text}>
          <div className={classes.float}>
            <img
              src="https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg"
              alt="bird"
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
      </section>
    </Wrapper>
  );
};
export default GalleryPage;
