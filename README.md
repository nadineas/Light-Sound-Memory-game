# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Nadine Siddharta**

Time spent: **5** hours spent in total

Link to project: [https://gentle-tall-chipmunk.glitch.me](https://gentle-tall-chipmunk.glitch.me)
## Required Functionality

The following **required** functionality is complete:

* [✓] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [✓] "Start" button toggles between "Start" and "Stop" when clicked. 
* [✓] Game buttons each light up and play a sound when clicked. 
* [✓] Computer plays back sequence of clues including sound and visual cue for each button
* [✓] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [✓] User wins the game after guessing a complete pattern
* [✓] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [✓] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [✓] Buttons use a pitch (frequency) other than the ones in the tutorial
* [✓] More than 4 functional game buttons
* [✓] Playback speeds up on each turn
* [✓] Computer picks a different pattern each time the game is played
* [✓] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [✓] Added mistake counter for player to keep track of number mistakes 
- [✓] Added level button to show which level player is at

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/f25c148f-6bcf-4fa7-9033-312eff84a661%2Fezgif.com-gif-maker.gif?v=1616626817072)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- Used to find fonts: https://www.w3schools.com/css//css_font_websafe.asp
- Used to find CSS colors: https://www.w3schools.com/cssref/css_colors.asp
- Used to learn how to add counter: https://stackoverflow.com/questions/22402777/html-javascript-button-click-counter

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)   
  
A challenge I encountered when creating this submission was catching and debugging issues with my code. 
Often times throughout creating this submission my game would work perfectly on the first run, however, when I played the game a second 
time that's when issues with the code would arise. One particular issue that I had trouble fixing was the strikes and levels counter. I had trouble getting the 
strikes to count correctly as well as accurately print. I overcame this challenge through trial and error in which I tested out adding each strike in different places in the guess function. 
Eventually, through trial and error, I was able to get the counter working. After that, I faced a similar issue with the level counter except for this time the levels wouldn't reset to 0 once a started a new game. I overcame this obstacle using what I learned from my issue with the strike counter so I knew I had to print the levels counter in the start game function. I also had issues with creating the random pattern as with each game the pattern would get longer. After looking and my code more carefully I realized I didn't initialize a 
new array every time I started a new game so the pattern would transfer over from the previous game and add more patterns. Once I found the issue it was an easy fix.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)   
  
Through this submission, I learn a lot about Javascript and HTML/CSS. Some questions I have after completing this submission would be how to incorporate databases into a website like this. For example, 
if I wanted to create a website where users can log in and save their scores and have a leaderboard of all the users and their scores,  I assume I would need a database to save the scores and information of 
each user from the website. My main question would be what databases to use and how to implement that into the current code. In addition, if I wanted to make the website password secure how would I go about the 
cybersecurity aspect of the website to make sure each player's information and password is safe.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)   

If I had a few more hours to work on this project I would try to further fix the strike and level counter. Currently, the strike counter only adds the last strike after outputting the lost game message
and the level counter counts from 0 to 8 instead of 1 to 9. I would try fixing those first if I had a few more hours. Then I would try to add more features such as adding images and audio files to the buttons as well as a 
timer for when the player is inputting their guess. In addition to those features, I would try to make more levels and obstacles to the game. For example, after the first 5 levels, I would make it so that the buttons would move around after every level and after the next five levels, I would either hide the button's colors or audio. I would also put in a window of the player's mistake history where the player can see the pattern of colored boxes they inputted on their past strikes. 
If I had a lot more time I would try and learn how to implement a database so users can save their scores and have a leaderboard of high-scoring players.


## License

    Copyright Nadine Siddharta

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.