import LazyImage from "../../../Lazyimage/LazyImage";
import classes from "./BirdInfoItem.module.css";

const BirdInfoItem = ({ clickedBird }) => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <div className={classes.float}>
          <LazyImage src={clickedBird.image} alt="selected-bird" />
        </div>
        <h3 className={classes.title}>{clickedBird.name}</h3>
        <p className={classes.species}>{clickedBird.species}</p>
        <p className={classes.description}>{clickedBird.description}</p>
      </div>
      <audio src={clickedBird.audio} controls></audio>
    </div>
  );
};
export default BirdInfoItem;
