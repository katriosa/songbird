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
  const [clickBirdId, setСlickBirdId] = useState(null);
  const [score, setScore] = useState(0);
  const [countLevel, setCountLevel] = useState(5);

  const compareBirdId = (buttonId) => {
    setСlickBirdId(buttonId);
    if (buttonId === randomBird.id) {
      setCorrectBirdId(buttonId);
    } else {
      setIncorrectBirdId(buttonId);
    }
  };

  const currentScoreCount = useMemo(() => {
    if (clickBirdId) {
      if (clickBirdId === randomBird.id) {
        // setScore(score + countLevel);
        setScore((prev) => {
          return prev + countLevel;
        });
        setCountLevel(5);
      } else {
        // setCountLevel(countLevel - 1);
        setCountLevel((prev) => {
          return prev === 0 ? 0 : prev - 1;
        });
      }
    }
  }, [clickBirdId, randomBird.id]);
  console.log("countLevel", countLevel);
  console.log("score", score);

  return (
    <Wrapper>
      <HeaderLevels numberOfSelectedLevel={numberOfSelectedLevel} />
      <SecretBlock
        randomBird={randomBird}
        correctBirdId={correctBirdId}
        score={score}
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
