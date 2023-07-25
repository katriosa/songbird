import classes from "./Gallery.module.css";
import { birdsData } from "../store/data";
import { useState } from "react";
import ImageSlider from "../components/ImageSlider";

const GalleryPage = () => {
  const allBirds = birdsData.flat();
  const [clickedTileID, setClickedTileID] = useState(null);

  const renderTiles = () => {
    return (
      <ul className={classes.container}>
        {allBirds.map((tile) => {
          return (
            <li
              className={classes.img}
              onClick={() => setClickedTileID(tile.id)}
              key={tile.id}
            >
              <img src={tile.image} alt={tile.name} />
              <div className={classes.title}>{tile.name}</div>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={classes.gallery}>
      <div className={classes["main-container"]}>
        {renderTiles()}
        {clickedTileID && (
          <ImageSlider
            allBirds={allBirds}
            clickedTileID={clickedTileID}
            setClickedTileID={setClickedTileID}
          />
        )}
      </div>
    </div>
  );
};
export default GalleryPage;
