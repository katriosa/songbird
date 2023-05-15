import classes from "./VariantSelectView.module.css";
import VariantButtons from "./VariantButtons";
import VariantView from "./VariantView";

const VariantSelectView = () => {
  return (
    <main className={classes.main}>
      <VariantButtons />
      <VariantView />
    </main>
  );
};
export default VariantSelectView;
