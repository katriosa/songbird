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

  let levelDataArr = useMemo(() => {
    return loadedBirdsData ? loadedBirdsData[numberOfSelectedLevel] : null;
  }, [loadedBirdsData, numberOfSelectedLevel]);

  let maxScore = loadedBirdsData ? loadedBirdsData.length * 5 : null;
  let randomBird = levelDataArr
    ? levelDataArr[Math.floor(Math.random() * levelDataArr.length)]
    : null;

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

// export async function loader() {
//   const response = await fetch(
//     "https://songbird-ff3d2-default-rtdb.firebaseio.com/birdsData.json"
//   );
//   if (!response.ok) {
//     throw new Error("Could not fetch data");
//   }
//   const responseData = await response.json();

//   const loadedBirds = [];

//   Object.values(responseData).forEach(function (innerObject, index) {
//     let tempArray = [];

//     Object.values(innerObject).forEach(function (value, index) {
//       tempArray.push({
//         id: value.id,
//         name: value.name,
//         species: value.species,
//         audio: value.audio,
//         description: value.description,
//         image: value.image,
//       });
//     });
//     loadedBirds.push(tempArray);
//     tempArray = [];
//   });

//   return loadedBirds;
// }
