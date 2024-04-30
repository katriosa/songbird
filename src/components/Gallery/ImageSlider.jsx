import { useCallback, useMemo } from "react";
import classes from "./ImageSlider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = ({ allBirds, clickedTileID, setClickedTileID }) => {
  const selectedTileData = useMemo(() => {
    return allBirds.filter((tile) => tile.id === clickedTileID)[0];
  }, [allBirds, clickedTileID]);

  const closeTileHandler = useCallback(() => {
    setClickedTileID(null);
  }, [setClickedTileID]);

  const goToPreviosSlide = useCallback(() => {
    setClickedTileID((prev) => {
      const firstSlide = prev === 1;
      return firstSlide ? allBirds.length : prev - 1;
    });
  }, [allBirds.length, setClickedTileID]);

  const goToNextSlide = useCallback(() => {
    setClickedTileID((prev) => {
      const lastSlide = clickedTileID === allBirds.length;
      return lastSlide ? allBirds[0].id : prev + 1;
    });
  }, [allBirds, clickedTileID, setClickedTileID]);

  return (
    <div className={classes.popup}>
      <span onClick={closeTileHandler}>&times;</span>
      <FaChevronLeft className={classes.arrow} onClick={goToPreviosSlide} />
      <div className={classes.card}>
        <img src={selectedTileData.image} alt={selectedTileData.name} />
        <div className={classes.details}>
          <div className={classes["text-container"]}>
            <h3>{selectedTileData.name}</h3>
            <p>{selectedTileData.species}</p>
            <p>{selectedTileData.description}</p>
          </div>
          <div className={classes["audio-container"]}>
            <audio src={selectedTileData.audio} controls></audio>
          </div>
        </div>
      </div>
      <FaChevronRight className={classes.arrow} onClick={goToNextSlide} />
    </div>
  );
};
export default ImageSlider;
