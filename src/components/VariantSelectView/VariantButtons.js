import classes from "./VariantButtons.module.css";
import { Link } from "react-router-dom";

const VariantButtons = () => {
  return (
    <>
      <section className={classes.wrapper}>
        <ul className={classes.list}>
          <li>Ворон</li>
          <li>Журавль</li>
          <li>Ласточка</li>
          <li>Козодой</li>
          <li>Кукушка</li>
          <li>Синица</li>
        </ul>
        <div className={classes["btn-wrapper"]}>
          <div className={classes.button}>
            <Link to="/game">Дальше</Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default VariantButtons;
