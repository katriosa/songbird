import classes from "./Gallery.module.css";
import { birdsData } from "../store/data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const GalleryPage = () => {
  const allBirds = birdsData.flat();
  const [clickedTileID, setClickedTileID] = useState(null);

  const renderLargeTile = () => {
    const clickedTileObj = allBirds.filter(
      (tile) => tile.id === clickedTileID
    )[0];

    const closeTileHandler = () => setClickedTileID(null);

    return (
      <div className={classes.popup}>
        <span onClick={closeTileHandler}>&times;</span>
        <img src={clickedTileObj.image} alt={clickedTileObj.name} />
      </div>
    );
  };

  const renderTiles = () => {
    return (
      <div className={classes.container}>
        {allBirds.map((tile) => {
          return (
            <div
              className={classes.img}
              onClick={() => setClickedTileID(tile.id)}
            >
              <img src={tile.image} alt={tile.name} />
              <div className={classes.title}>{tile.name}</div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={classes.gallery}>
      <div className={classes["main-container"]}>
        {/* <div className={classes["arrow-container"]}>
          <FaChevronLeft className={classes.arrow} />
        </div> */}
        {renderTiles()}
        {clickedTileID && renderLargeTile()}
        {/* <div className={classes["arrow-container"]}>
          <FaChevronRight className={classes.arrow} />
        </div> */}
      </div>
    </div>
  );
};
export default GalleryPage;
