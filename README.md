# Songbird Project

Link: https://songbird-ff3d2.web.app/

Songbird is a quiz app based on guessing birds by their voices. Implemented a SPA with multiple pages (home, game, gallery) using React Router. A firebase is used to store and display data. Implemented multilingual support and dynamic language switching using i18next.

### Game mechanics:
- The bird in the question block is randomly selected from the list of possible answers.
- When clicking on one of the items in the list with answer options, information about the bird is displayed in the block with the description of the bird.
- If the player has chosen the correct answer, the name and image of the bird are displayed in the secret block.
- At the start of the game, the score is 0. If the player gave the correct answer on the first attempt, his score increases by 5 points, each subsequent attempt gives one point less, if the correct answer is given only on the last (sixth attempt), the player receives 0 points for it.
- A light indication is used for the correct and incorrect answers of the player.
- When the player has given the correct answer, the "Next" button is activated and he gets the opportunity to move to the next level
- After the last question, the score of the game is displayed: "You scored x points out of 30 possible". The player is invited to take the quiz again or view the gallery.

Screenshots:
![songbird-home1](https://github.com/user-attachments/assets/9b9efcff-5721-4aea-b2f0-db057912424c)

![songbird-game1](https://github.com/user-attachments/assets/d670be0c-f506-442e-8177-8e483f77367f)

![songbird-gallery1](https://github.com/user-attachments/assets/467df310-822d-4d3a-9048-6acd62654fec)
