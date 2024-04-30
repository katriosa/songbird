import classes from "./Gallery.module.css";
import { useCallback, useMemo, useState } from "react";
import ImageSlider from "../components/Gallery/ImageSlider";
import { useSelector } from "react-redux";

const GalleryPage = () => {
  const { birdsData } = useSelector((state) => state.birds);

  const allBirds = birdsData?.flat();

  const [clickedTileID, setClickedTileID] = useState(null);

  const onTileIDClick = useCallback((tileId) => {
    setClickedTileID(tileId);
  }, []);

  const renderTiles = useMemo(() => {
    return (
      <ul className={classes.container}>
        {allBirds &&
          allBirds.map((tile) => {
            return (
              <li
                className={classes.img}
                onClick={() => onTileIDClick(tile.id)}
                key={tile.id}
              >
                <img src={tile.image} alt={tile.name} />
                <div className={classes.title}>{tile.name}</div>
              </li>
            );
          })}
      </ul>
    );
  }, [allBirds, onTileIDClick]);

  return (
    <div className={classes.gallery}>
      <div className={classes["main-container"]}>
        {renderTiles}
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
