import classes from "./ImageSlider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = ({ allBirds, clickedTileID, setClickedTileID }) => {
  const clickedTileObj = allBirds.filter(
    (tile) => tile.id === clickedTileID
  )[0];

  const closeTileHandler = () => {
    setClickedTileID(null);
  };

  const goToPrevios = () => {
    setClickedTileID((prev) => {
      const firstSlide = prev === 1;
      return firstSlide ? allBirds.length : prev - 1;
    });
  };

  const goToNext = () => {
    setClickedTileID((prev) => {
      const lastSlide = clickedTileID === allBirds.length;
      return lastSlide ? allBirds[0].id : prev + 1;
    });
  };

  return (
    <div className={classes.popup}>
      <span onClick={closeTileHandler}>&times;</span>
      <FaChevronLeft className={classes.arrow} onClick={goToPrevios} />
      <div className={classes.card}>
        <img src={clickedTileObj.image} alt={clickedTileObj.name} />
        <div className={classes.details}>
          <div className={classes["text-container"]}>
            <h3>{clickedTileObj.name}</h3>
            <p>{clickedTileObj.species}</p>
            <p>{clickedTileObj.description}</p>
          </div>
          <div className={classes["audio-container"]}>
            <audio src={clickedTileObj.audio} controls></audio>
          </div>
        </div>
      </div>
      <FaChevronRight className={classes.arrow} onClick={goToNext} />
    </div>
  );
};
export default ImageSlider;
