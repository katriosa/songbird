# Songbird Project

Link: https://songbird-ff3d2.web.app/

Songbird is a quiz app for recognizing birds by voices. The website consists of a home page, a game page and a gallery, thanks to the use of React Routing. A firebase is used to store and display data.

Game mechanics:
• The bird in the question block is randomly selected from the list of possible answers.
• When clicking on one of the items in the list with answer options, information about the bird is displayed in the block with the description of the bird.
• If the player has chosen the correct answer, the name and image of the bird are displayed in the question block.
• At the start of the game, the score is 0. If the player gave the correct answer on the first attempt, his score increases by 5 points, each subsequent attempt gives one point less, if the correct answer is given only on the last (sixth attempt), the player receives 0 points for it.
• A light indication is used for the correct and incorrect answers of the player.
• When the player has given the correct answer, the "Next" button is activated and he gets the opportunity to move to the next level
• After the last question, the score of the game is displayed: "You scored x points out of 30 possible". The player is invited to take the quiz again or view the gallery.
