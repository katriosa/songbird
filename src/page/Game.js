import HeaderLevels from "../components/HeaderLevels";
import SecretBlock from "../components/SecretBlock";
import VariantSelectView from "../components/VariantSelectView/VariantSelectView";
import Wrapper from "../UI/Wrapper";

const GamePage = () => {
  return (
    <Wrapper>
      <HeaderLevels />
      <SecretBlock />
      <VariantSelectView />
    </Wrapper>
  );
};
export default GamePage;
