import classes from "./Gallery.module.css";
import { useCallback, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const GalleryPage = () => {
  const { birdsData } = useSelector((state) => state.birds);
  const [allBirds, setAllbirds] = useState(null);

  useEffect(() => {
    if (birdsData) {
      setAllbirds(birdsData.flat());
    }
  }, [birdsData]);

  const [clickedTileID, setClickedTileID] = useState(null);

  const onTileIDClick = useCallback((tileId) => {
    setClickedTileID(tileId);
  }, []);

  const renderTiles = () => {
    return (
      <ul className={classes.container}>
        {allBirds.map((tile) => {
          return (
            <li
              className={classes.img}
              onClick={onTileIDClick(tile.id)}
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
        {allBirds && renderTiles()}
        {clickedTileID && allBirds && (
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
