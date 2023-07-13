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

  const resetBirdIds = () => {
    setCorrectBirdId(null);
    setIncorrectBirdId(null);
    setСlickedBirdId(null);
    setCalculatedScore(5);
  };

  const compareBirdId = (buttonId) => {
    setСlickedBirdId(buttonId);
    if (buttonId === randomBird.id) {
      setCorrectBirdId(buttonId);
    } else {
      setIncorrectBirdId(buttonId);
    }
  };
  // console.log("calculatedScore", calculatedScore);
  // console.log("levelScore", levelScore);

  useEffect(() => {
    if (clickedBirdId) {
      if (clickedBirdId === randomBird.id) {
        setLevelScore((prev) => {
          return prev + calculatedScore;
        });
      } else {
        setCalculatedScore((prev) => {
          return prev === 0 ? 0 : prev - 1;
        });
        setСlickedBirdId(null);
      }
    }
  }, [clickedBirdId, randomBird.id, calculatedScore]);

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
        resetBirdIds={resetBirdIds}
      />
    </Wrapper>
  );
};
export default GamePage;
