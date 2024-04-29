import classes from "./VariantItem.module.css";
import { useCallback, useMemo } from "react";

const VariantItem = ({
  id,
  title,
  correctBirdId,
  incorrectBirdId,
  compareBirdId,
}) => {
  const clickButtonHandler = useCallback(() => {
    compareBirdId(id);
  }, [compareBirdId, id]);

  const buttonClass = useMemo(() => {
    const defaultClass = classes["btn-item"];
    if (id === correctBirdId) {
      return `${defaultClass} ${classes.correct}`;
    }
    if (id === incorrectBirdId) {
      return `${defaultClass} ${classes.incorrect}`;
    }
    return defaultClass;
  }, [id, correctBirdId, incorrectBirdId]);

  return (
    <button className={buttonClass} onClick={clickButtonHandler}>
      {title}
    </button>
  );
};
export default VariantItem;
