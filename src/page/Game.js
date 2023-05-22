import HeaderLevels from "../components/HeaderLevels";
import SecretBlock from "../components/SecretBlock";
import VariantSelectView from "../components/VariantSelectView/VariantSelectView";
import Wrapper from "../UI/Wrapper";
import { useState, useMemo } from "react";
import { birdsData } from "../store/data";

const GamePage = () => {
  const [numberOfSelectedLevel, setNumberOfSelectedLevel] = useState(0);
  const levelDataArr = birdsData[numberOfSelectedLevel];

  const randomBird = useMemo(() => {
    const randomBirdIndex = Math.floor(Math.random() * levelDataArr.length);
    return levelDataArr[randomBirdIndex];
  }, [levelDataArr]);

  const [correctBirdId, setCorrectBirdId] = useState(null);
  const [incorrectBirdId, setIncorrectBirdId] = useState(null);

  const compareBirdId = (buttonId) => {
    if (buttonId === randomBird.id) {
      setCorrectBirdId(buttonId);
    } else {
      setIncorrectBirdId(buttonId);
    }
  };

  return (
    <Wrapper>
      <HeaderLevels numberOfSelectedLevel={numberOfSelectedLevel} />
      <SecretBlock
        numberOfSelectedLevel={numberOfSelectedLevel}
        randomBird={randomBird}
      />
      <VariantSelectView
        setNumberOfSelectedLevel={setNumberOfSelectedLevel}
        numberOfSelectedLevel={numberOfSelectedLevel}
        randomBird={randomBird}
        levelDataArr={levelDataArr}
        compareBirdId={compareBirdId}
        correctBirdId={correctBirdId}
        incorrectBirdId={incorrectBirdId}
      />
    </Wrapper>
  );
};
export default GamePage;
