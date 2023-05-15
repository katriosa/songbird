import classes from "./Variants.module.css";
import { Link } from "react-router-dom";

const Variants = () => {
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
        <div className={classes.button}>
          <Link to="/game">Дальше</Link>{" "}
        </div>
      </section>
    </>
  );
};
export default Variants;
