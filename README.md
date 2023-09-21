# Songbird Project

Link: https://songbird-ff3d2.web.app/

Songbird is a quiz app based on guessing birds by their voices. The website consists of a home page, a game page and a gallery, thanks to the use of React Routing. A firebase is used to store and display data.

### Game mechanics:
- The bird in the question block is randomly selected from the list of possible answers.
- When clicking on one of the items in the list with answer options, information about the bird is displayed in the block with the description of the bird.
- If the player has chosen the correct answer, the name and image of the bird are displayed in the secret block.
- At the start of the game, the score is 0. If the player gave the correct answer on the first attempt, his score increases by 5 points, each subsequent attempt gives one point less, if the correct answer is given only on the last (sixth attempt), the player receives 0 points for it.
- A light indication is used for the correct and incorrect answers of the player.
- When the player has given the correct answer, the "Next" button is activated and he gets the opportunity to move to the next level
- After the last question, the score of the game is displayed: "You scored x points out of 30 possible". The player is invited to take the quiz again or view the gallery.

Screenshots:
![songbird-home](https://github.com/katriosa/songbird/assets/112644662/d608bfd6-744c-42b9-8e56-16af950db188)

![songbird-game](https://github.com/katriosa/songbird/assets/112644662/bd612287-ab5f-40fa-ad95-5a408dde4122)

![songbird-gallery](https://github.com/katriosa/songbird/assets/112644662/ac3ef978-ab15-4354-ae57-d961bb3ecf06)
