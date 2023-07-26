import HeaderLevels from "../components/HeaderLevels";
import SecretBlock from "../components/SecretBlock";
import VariantSelectView from "../components/VariantSelectView/VariantSelectView";
import Wrapper from "../UI/Wrapper";
import { useState, useMemo, useEffect } from "react";
import { birdsData } from "../store/data";
import ResultWindow from "../components/ResultWindow";

const GamePage = () => {
  const [numberOfSelectedLevel, setNumberOfSelectedLevel] = useState(0);
  const levelDataArr = birdsData[numberOfSelectedLevel];
  const maxScore = birdsData.length * 5;

  const randomBird = useMemo(() => {
    const randomBirdIndex = Math.floor(Math.random() * levelDataArr.length);
    return levelDataArr[randomBirdIndex];
  }, [levelDataArr]);

  const [correctBirdId, setCorrectBirdId] = useState(null);
  const [isBirdClicked, setIsBirdClicked] = useState(false);
  const [incorrectBirdId, setIncorrectBirdId] = useState(null);
  const [clickedBirdId, setСlickedBirdId] = useState(null);
  const [levelScore, setLevelScore] = useState(0);
  const [calculatedScore, setCalculatedScore] = useState(5);
  const [showResult, setShowResult] = useState(false);

  const resetBirdIds = () => {
    setIsBirdClicked(false);
    setCorrectBirdId(null);
    setIncorrectBirdId(null);
    setСlickedBirdId(null);
    setCalculatedScore(5);
  };

  const compareBirdId = (buttonId) => {
    setIsBirdClicked(true);
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
    if (isBirdClicked) {
      if (clickedBirdId === randomBird.id) {
        setLevelScore((prev) => {
          return prev + calculatedScore;
        });
      } else {
        setCalculatedScore((prev) => {
          return prev === 0 ? 0 : prev - 1;
        });
        setIsBirdClicked(false);
      }
    }
  }, [clickedBirdId, isBirdClicked, randomBird.id, calculatedScore]);

  const clickedBirdObj = useMemo(() => {
    return levelDataArr.filter((item) => item.id === clickedBirdId)[0];
  }, [clickedBirdId, levelDataArr]);

  const changeLevelHandler = () => {
    if (numberOfSelectedLevel < 5) {
      resetBirdIds();
      setNumberOfSelectedLevel(numberOfSelectedLevel + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <Wrapper>
      {showResult && (
        <ResultWindow totalScore={levelScore} maxScore={maxScore} />
      )}
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
        clickedBirdObj={clickedBirdObj}
        changeLevelHandler={changeLevelHandler}
      />
    </Wrapper>
  );
};
export default GamePage;
