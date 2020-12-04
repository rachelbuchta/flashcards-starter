# Mod 2 Flash Cards
Mod2 Solo Project

Using flash cards to study and learn concepts is an excellent study tool. But, the days of writing flash cards by hand are behind us. This application gives you a virtual use of studying your flash cards in your terminal. 

Building this application has turned out to be a wonderful study tool in more ways than one. The process building this flash cards app allowed me to practice implementing robust testing suites using TDD, get more comfortable using ES6 syntax and classes, write DRY and reusable code and incorporate iterator methods. Now, this application is set up for me to continue studying these concepts in my terminal with 30 questions and a set of possible questions for each.

## In Action
![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)

## Setup

To get this game started in your terminal, do the following:
* Clone down the repo and access the directory
* Install dependencies by running:
```bash
npm install
```
* To being the game, run:
```bash
node index.js
```
* You will be prompted with the message "Welcome to FlashCards! You are playing with 30 cards"
* You will also see your first question and choice of possible answers
* Using the up and down arrow keys, choose the answer you think is correct and hit enter
* The answer you choose will pop up along with a message indicating if it was correct or incorrect
* Hit enter again and you will see your next question
* Keep going until you finish all cards and are presented a message indicating that the round is over and gives a percentage of correct answers.
* Want to play again? hit:
```bash
control c
```
```bash
node index.js
```
* Keep practicing until you get 100% correct!
