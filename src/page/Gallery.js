import Wrapper from "../UI/Wrapper";
import classes from "./Gallery.module.css";
import { birdsData } from "../store/data";

const GalleryPage = () => {
  const currentLevel = birdsData[0];
  const displayCard = currentLevel.map((objBird) => {
    return (
      <div className={classes.img}>
        <img src={objBird.image} alt={objBird.name} />
        <div className={classes.title}>{objBird.name}</div>
      </div>
    );
  });
  return (
    <div className={classes.gallery}>
      <h3>Уровень 1</h3>
      <div className={classes.container}>{displayCard}</div>
      <div className={classes.popup}>
        <span>&times;</span>
        <img
          src="https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg"
          alt="bird"
        />
      </div>
    </div>
  );
};
export default GalleryPage;
