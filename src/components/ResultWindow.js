import Modal from "../UI/Modal";
import { Link } from "react-router-dom";
import classes from "./ResultWindow.module.css";

const ResultWindow = ({ totalScore, maxScore }) => {
  return (
    <Modal>
      <h3>Поздравляем!</h3>
      <p>
        Вы набрали {totalScore} из {maxScore} баллов!
      </p>
      <ul className={classes.list}>
        <li>
          <Link to="/">Начать сначала</Link>
        </li>
        <li>
          <Link to="/gallery">Посмотреть галлерею</Link>
        </li>
      </ul>
    </Modal>
  );
};
export default ResultWindow;
