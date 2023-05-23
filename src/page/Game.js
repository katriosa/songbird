import HeaderLevels from "../components/HeaderLevels";
import SecretBlock from "../components/SecretBlock";
import VariantSelectView from "../components/VariantSelectView/VariantSelectView";
import Wrapper from "../UI/Wrapper";
import { useState, useMemo, useEffect } from "react";
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
  const [clickedBirdId, setСlickedBirdId] = useState(null);
  const [levelScore, setLevelScore] = useState(0);
  const [calculatedScore, setCalculatedScore] = useState(5);

  const compareBirdId = (buttonId) => {
    setСlickedBirdId(buttonId);
    if (buttonId === randomBird.id) {
      setCorrectBirdId(buttonId);
    } else {
      setIncorrectBirdId(buttonId);
    }
  };
  useEffect(() => {
    if (clickedBirdId) {
      if (clickedBirdId === randomBird.id) {
        setLevelScore((prev) => {
          return prev + calculatedScore;
        });
        setCalculatedScore(5);
      } else {
        setCalculatedScore((prev) => {
          return prev === 0 ? 0 : prev - 1;
        });
      }
    }
  }, [clickedBirdId, randomBird.id]);

  return (
    <Wrapper>
      <HeaderLevels numberOfSelectedLevel={numberOfSelectedLevel} />
      <SecretBlock
        isBirdGuessed={clickedBirdId === randomBird.id}
        randomBird={randomBird}
        score={levelScore}
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
