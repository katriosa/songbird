import React, { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import HeaderLevels from "../components/HeaderLevels";
import SecretBlock from "../components/SecretBlock";
import VariantSelectView from "../components/VariantSelectView/VariantSelectView";
import Wrapper from "../UI/Wrapper";
import ResultWindow from "../components/ResultWindow";

const GamePage = () => {
  const loadedBirdsData = useSelector((state) => state.birds.birdsData);

  const [numberOfSelectedLevel, setNumberOfSelectedLevel] = useState(0);
  const [correctBirdId, setCorrectBirdId] = useState(null);
  const [isBirdClicked, setIsBirdClicked] = useState(false);
  const [incorrectBirdId, setIncorrectBirdId] = useState(null);
  const [clickedBirdId, setClickedBirdId] = useState(null);
  const [levelScore, setLevelScore] = useState(0);
  const [calculatedScore, setCalculatedScore] = useState(5);
  const [showResult, setShowResult] = useState(false);

  const levelDataArr = useMemo(() => {
    return loadedBirdsData ? loadedBirdsData[numberOfSelectedLevel] : null;
  }, [loadedBirdsData, numberOfSelectedLevel]);

  const maxScore = useMemo(
    () => (loadedBirdsData ? loadedBirdsData.length * 5 : null),
    [loadedBirdsData]
  );
  const randomBird = useMemo(
    () =>
      levelDataArr
        ? levelDataArr[Math.floor(Math.random() * levelDataArr.length)]
        : null,
    [levelDataArr]
  );

  const resetBirdIds = () => {
    setIsBirdClicked(false);
    setCorrectBirdId(null);
    setIncorrectBirdId(null);
    setClickedBirdId(null);
    setCalculatedScore(5);
  };

  const compareBirdId = (buttonId) => {
    setIsBirdClicked(true);
    setClickedBirdId(buttonId);
    if (buttonId === randomBird.id) {
      setCorrectBirdId(buttonId);
    } else {
      setIncorrectBirdId(buttonId);
    }
  };

  useEffect(() => {
    if (isBirdClicked && randomBird) {
      if (clickedBirdId === randomBird.id) {
        setLevelScore((prev) => prev + calculatedScore);
      } else {
        setCalculatedScore((prev) => (prev === 0 ? 0 : prev - 1));
        setIsBirdClicked(false);
      }
    }
  }, [clickedBirdId, isBirdClicked, randomBird, calculatedScore]);

  const clickedBirdObj = useMemo(() => {
    return (
      levelDataArr &&
      levelDataArr.filter((item) => item.id === clickedBirdId)[0]
    );
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
      {loadedBirdsData && (
        <>
          <HeaderLevels
            numberOfSelectedLevel={numberOfSelectedLevel}
            loadedBirdsData={loadedBirdsData}
          />
          <SecretBlock
            isBirdGuessed={clickedBirdId === randomBird?.id}
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
        </>
      )}
    </Wrapper>
  );
};

export default GamePage;
