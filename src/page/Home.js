import classes from "./Home.module.css";

const Homepage = () => {
  return (
    // <div className="App">
    <>
      <main>
        <div className={classes["bg-image"]}></div>
        <div className={classes.content}>
          <h1>
            Угадай <span>птичку</span> по голосу
          </h1>
          <button>Начать</button>
        </div>
      </main>
      <footer className={classes.footer}>
        <p>
          Автор: <a href="https://github.com/katriosa">katriosa</a>
        </p>
      </footer>
    </>
    // </div>
  );
};
export default Homepage;
