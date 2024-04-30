import classes from "./BirdButton.module.css";
import { useCallback, useMemo } from "react";

const BirdButton = ({
  id,
  title,
  correctBirdId,
  incorrectBirdId,
  compareBirdId,
  onSelectCorrectBird,
  isActive,
}) => {
  const clickButtonHandler = useCallback(() => {
    if (isActive) {
      const isCorrectBirdSelected = compareBirdId(id);
      if (isCorrectBirdSelected) {
        onSelectCorrectBird(false);
      }
    }
  }, [id, isActive, compareBirdId, onSelectCorrectBird]);

  const buttonClass = useMemo(() => {
    const defaultClass = isActive
      ? classes["btn-item"] + " " + classes["btn-active-item"]
      : classes["btn-item"];
    if (id === correctBirdId) {
      return `${defaultClass} ${classes.correct}`;
    }
    if (id === incorrectBirdId) {
      return `${defaultClass} ${classes.incorrect}`;
    }
    return defaultClass;
  }, [isActive, id, correctBirdId, incorrectBirdId]);

  return (
    <button className={buttonClass} onClick={clickButtonHandler}>
      {title}
    </button>
  );
};
export default BirdButton;
