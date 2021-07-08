# [**Survive**](https://joelmichaelrutter.github.io/survive-web-MS2/index.html)
## Milestone Project 2
### General Purpose & Introduction
Survive is a fun and interactive personality quiz. The premise of the quiz enables to see how they would fair in a zombie apocalypse. Upon starting the game, the user is presented with a finite number of scenarios, questions and answers inside a robust and responsive UI which they must read and navigate through. Once they have completed the quiz, the user is presented with a score which relates them to a popular culture zombie content character.
Based on the topical content of the quiz, I thought it was really important to generate the a creepy/post apocalyptic/uneasy atmosphere. I will explain my user considerations, stories and how I met the user stories inside this document.
## Table of Contents
* ### [Deployed Site](#Deployed-Website)
* ### [Demo](#Site-Demonstration)
* ### [UX](#User-Experience)
* ### [Design](#Design-Features)
* ### [Features](#Functional-Features)
* ### [Technologies](#Technologies-Used)
* ### [Testing](#Application-Testing)
* ### [Deployment](#Deploying-the-site)
* ### [Reflection](#Project-Reflection)
* ### [Further Development](#Further-Development-Scope)
* ### [Credits](#Project-Credits)
* ### [Acknowledgement](#Project-Acknowledgements)
# [**Deployed Website**](https://joelmichaelrutter.github.io/survive-web-MS2/index.html)
By clicking the hyperlinked header above, you can access the final deployed site hosted on GitHub Pages.
# Site Demonstration
## [Am I Responsive?](http://ami.responsivedesign.is/)
Below you can see an image of the final site in the Am I Responsive tool which shows the fantastic level of responsivity of the site to a number of viewports. Attached the above header is a link to the Am I Responsive tool; should you wish to use it yourself.  
![Survive-Am-I-Responsive-Image](assets/images/read-me-images/survive-am-i-responsive.PNG)
# **User Experience**
In this section, I will discuss the user experience considerations I implemented during the development process.
## **Strategy**
### **Business Goals**
In terms of business scope, there are certainly less points as I didn’t design this application to serve a business. The main goals that I wanted to achieve was:
* To provide the user with a fun, interactive zombie themed personality quiz experience.
* To generate an uneasy/spooky atmosphere to put the user in the correct frame of mind to answer the questions.
* To provide a seamless and easy user journey through consistent, robust & responsive UI design.
* To ensure ease of learning to allow users to use the application well without using it previously.
* To provide an informal gimmick like response to the user so that the quiz, whilst atmospheric is not to serious to put off a wider audience.
### **User Stories**
Below are the user stories that needed to be fulfilled for the project to be successful from the perspective of the user:
* To discover Survive and instantly be able to understand the purpose of the site.
* To be able to navigate through the site with ease on the first visit.
* To understand and buy into the atmosphere the quiz promotes.
* To be able to control all elements of the application easily, including any background audio should the user not wish to hear it.
* To see their score increase as the quiz progresses.
* To be provided with feedback on how they performed.
* To be able to play again.
## **Structure Plane**
Due to the scope of the project increasing from my last one as I needed to incorporate more technologies, I wanted to create something simple and robust, as well as entertaining, unique and interactive. For this reason, I kept decided to keep my HTML to one page and modify it with Javascript. I adopted a mobile first approach which made making things responsive much easier than my first project where I primarily designed for desktop first.  
Because one of the main business and user stories was the implementation of a creepy atmosphere, I thought about how to achieve that. My conclusion to the matter was imagery, audio and consistent colour usage to create a seamless UI. I will explain exactly how I created the atmosphere of the site and the tools later in the document. In terms of the quiz itself, I knew that I wanted it to be robust and responsive, so I went with a classic game show style container set with a main container, and four multiple choice answers below it.  

Because of the nature of the site, I determined that a classic navigation bar was not required due to the specific nature of the site’s purpose. As the app is essentially a personality quiz with the premise of “what would you do in the zombie apocalypse”, I decided that I didn’t want the questions to be timed like you would have for example on a general knowledge quiz and I also wanted each user to have a consistent journey so the questions and situations are in a specific order.  
## **Skeleton Plane**
I employed one stage to skeleton process. Because of the nature of the site, I used a different approach to my first project and digitally wireframed the site to begin with. To provide myself with a fuller picture and a plan to lean on, I took the skeleton phase of my project a little further by designing some of the written content that would be implemented into the project.  

Below you will find links to images of my plan for the site. It is worth noting that this was the original development plan and that some features may differ slightly either in context or position due to the site evolving through the development process.  

* [UI Wireframes](assets/images/read-me-images/survive-wireframes.png)
* [Question Logic & Initial Function Plan](assets/images/read-me-images/survive-logic-and-function-plan.png)
* [Feedback Container Plan](assets/images/read-me-images/survive-user-feedback-container-plan.png)  
# **Design Features**
## **Imagery**
To begin my development process, I asked myself what would be one of the main ways that I could generate a spooky atmosphere for the user as the interacted with the quiz. The first thing that came to me is via imagery, so I went about locating an appropriate background image for my site.  
I downloaded the background image from Shutterstock, a link to the image and references to the creator can be found via this [link]( https://www.shutterstock.com/image-photo/crowd-hungry-zombies-woods-silhouettes-scary-504847591).  
The misty pastel tone of the image was perfect for creating a horror/survival atmosphere, and the zombie silhouettes were perfect. I wanted to keep gore and such out of scope for the site so that it could appeal to younger users as well as older.  
## **Audio**
The second consideration I made to effectively generate an atmosphere for the user was to include some background audio which would play when the user starts the game. I have made user considerations in terms of the audio and the user has full control over when the audio plays and when they would like to mute it, despite there being no visible HTML controls on the page. I will explain these functions in the functional features section of this document.   
To create my background audio, I downloaded some stock royalty free music & sound effects from [Fesliyan Studios]( https://www.fesliyanstudios.com/).   
The sounds I downloaded are as follows:  
* [Dark Fog – Background Music]( https://www.fesliyanstudios.com/royalty-free-music/download/dark-fog/265)
* [Zombie & Gunfire Soundeffects]( https://www.fesliyanstudios.com/sound-effects-search.php?q=)  

I mixed the sound effects and music together using [Spotify Sound Trap]( https://www.soundtrap.com/home).  
## **Colour Choices**
The colours I sourced for the project were mostly developed by extracting the HEX values from parts of the background image by using [HTML Color Codes]( https://html-color-codes.info/colors-from-image/) colour from image tool. The reason that I adopted this approach was to create a visual connection with the background depicting some zombies amongst some trees and the main content in the foreground of the page, therein adding to the atmosphere that the image generates.  
The colour palette for the whole project and the uses of those colours is set out below:  
![ColourPaletteImage](assets/images/read-me-images/colour-palette.png)
## Typography
For the project, I used two fonts imported into my CSS file from [Google Fonts](https://fonts.google.com/). They were selected in line with the overarching themes that I wanted to achieve. The fonts I chose, examples and explanations are detailed below:  
### **DotGothic16**
![DotGothic16Image](assets/images/read-me-images/dot-gothic-images.PNG)  
I chose DotGothic16 after auditioning other fonts as it adds to the atmosphere of the quiz/game. Its almost degraded and blocky nature have a post-apocalyptic yet fun/8bit feel, both of which are attributes that I strived to achieve in business and user goals.  
### **Roboto**
![RobotoImage](assets/images/read-me-images/roboto-font-image.PNG)  
Roboto was one of the pairings that google fonts recommended with DotGothic16, I liked the clear cut nature of the font and decided it was the best for the purpose of development so that the user would be able to clearly read the situations and questions to play the quiz.
## **Iconography**
For iconography, I imported an icon library from [Font Awesome]( https://fontawesome.com/). In particular, I used the following icons:  
* [Play Icon](https://fontawesome.com/v5.15/icons/play?style=solid) - This icon is used inside the play music button.
* [Mute Icon](https://fontawesome.com/v5.15/icons/volume-mute?style=solid) - This icon is used inside the mute music button.
* [Music Icon](https://fontawesome.com/v5.15/icons/music?style=solid) - This icon is used inside both play music and mute music buttons.
* [Biohazard Icon](https://fontawesome.com/v5.15/icons/undo-alt?style=solid) - This icon is used in the play button.
* [Back Circular Arrow](https://fontawesome.com/v5.15/icons/undo-alt?style=solid) - This icon is used in the play again buttons.  
# Functional Features
Below I will list the functional features of the site in order, how I have manipulated the features with Javascript to make the site interactive and how the features satisfy my user stories:  
* **Main Header** - The main header of the page displays title of the application “Survive”. This immediately allows the user to discover the game which satisfies the first user story. The heading text is wrapping in an <a></a> tag which links to index.html. An appropriate aria-label has been added for accessibility purposes. Clicking or tapping the heading will reload the index.html file as is common practice with most web pages.
* **Play & Mute Music Buttons** - These buttons allow the user to control the playing and pausing of audio at any point during the quiz. They have a hover pseudo selector active on nearly all devices to provide visual feedback to the user as to what they are doing. The buttons are container in a flex container and justified to spread out via justify-content: space-around which makes the site very easy to make responsive.
* **Rules Container** - This div displays some introductory text and is displayed in the centre of the screen so that the user can locate it easily, its content provides and introduction to Survive and explains the premise of the game. Within the rules container there are additional elements:
  * **Rules List** - This list provides more specific guidance to the user on how the game works and the scoring system.
  * **Start Game Button** - The button is positioned at the bottom of the rules container. I have styled this to be appealing to the user and entices them to click. There is a have pseudo selector applied on larger screen devices to provide visual feedback to the user as to what they are doing. All this combined makes the site easy to navigate, even for someone with no exposure previously. The button has some JavaScript functionality attached to it which I will explain below:
    1.	When the user clicks or touches the button, the startGame function is called. This function does a number of things. Firstly, it removes the rules container from the DOM by adding a CSS declaration of display: none; to it, whilst simultaneously changing the display: none; properties of the game area and the answer container so that they appear.
    2. It also calls the function changeQuestionAndOptions which populates the game area and answer buttons from the question array in questions.js.
    3.	Finally, the function calls the audio.play method attached to my audio object which contains the background music. The user can mute(pause) this music by clicking the mute button and subsequently play the music by clicking the play button when the music is in a paused state.  
* **Game Container** - The game area contains a few subsections:
  * **Score Block** - This div contains a h2 element containing the content “score:0”. The number is wrapped in a span tag and labelled with the ID “score-tally-container”. This id is recognised in my script.js file and passed as an integer to the variable scoreTally. This integer is then operated on in the tallyScore function which adds a value of 40, 30, 20 or 10 to the scoreTally variable depending on which button the user selects. At the end of the tallyScore, every time it is called when a user selects an answer, the scoreTally variable is then passed back into the container creating a running total score. This enables the user to see exactly what score they have as they progress. In terms of styling, I pulled a grey from the background image and added a box shadow with the RGBA value of the main font colour to help the two blend together. I did this to further promote the creepy atmosphere of the game to the user.
  * **Number Container** - Beneath the score, there are three spans, the first of which is labelled with an ID “number-container”. It is assigned to the variable “numb” in the changeQuestionAndOptions function. The text content of this span is populated from the questions array from questions.js via the changeQuestionAndOptions function. One additional caveat to add here is that inside the function, the question number is assessed inside the changeQuestionAndOptions function and when it reaches the blank object at the end of the array (currently checked for question 11), it calls the assessScore function. The assess score function checks the value of the scoreTally variable and displays the relevant score feedback.
  * **Situation Container** - This span element is labelled with the id “situation-container”. This is recognised in the changeQuestionAndOptions function and allocated to the variable “situ”. The text content of this variable is then set by the changeQuestionsAndOptions function from the questions array. In the array, there are objects nested as each element. Through dot notation, the variable accesses the array and the relevant key to access the string text content within and then sets the text content.
  * **Question Container** - This span is also populated from the questions array of objects in the questions.js file via the changeQuestionAndOptions function inside script.js. The span is assigned to the “quest” variable inside the function. The array and subsequent objects are accessed via dot notation and passed into the variable which then sets the text of the HTML via the .textContent method. This happens each time the function is called when the user clicks one of the answer buttons.
* **Answer Button Container** - This div is a flex container and contains the buttons that the user uses to play the game. Depending on the viewport width, the flex container works slightly differently, for smaller screen widths, the container wraps its contents onto a new line creating a layout with more verticality. The responsive nature of CSS flexbox makes a robust and widely responsive layout.
* **Answer Buttons** - These HTML button elements are the user’s main point of interaction with the game. Whilst limited in terms of the scope, the layout, positioning, and styling of the buttons promotes my business goals and user stories by making the site easy to navigate and pick up. The button functionality tie in to two functions within the script.js file:
  1. **changeQuestionsAndOptions()** – This function is called whenever the user clicks an answer button. It amends the text content in the game container (excluding the score-block) and the spans within the answer buttons, populating from the nested data questions.js file.
  2. **tallyScore()** – This assesses which answer button is clicked based on the id value of the element and adds an integer to the scoreTally variable before setting the textContent of the scoreTally variable again to update the score.  

In terms of styling, I decided to colour the text with the main text colour that I pulled from the background image and have the background colour as a deep crimson to signify separation from the background and to signal to the user that these buttons were the interactive part of the site. Depending on the viewport width, there are pseudo selectors applied which reverse the colour and adds a box shadow either on hover or on press of the button to provide visual feedback to the user as to which answer button they are selecting.

* **Score Containers** - These divs are revealed based on the value of the scoreTally variable which is assessed in the tallyScore function. The divs are styled in the same manner as the rules container for visual consistency and contain feedback for the user as to how they scored on the quiz. It relates the score to a character in zombie popular culture. There are four divs in total:
  * **Best Score** - This div’s CSS display declaration is changed in the assessScore function to block if the scoreTally value is greater than 300. Its content informs the user that they have achieved a great score in terms of their survival chances and relates them to Rick Grimes (image is also provided), the main protagonist and survival machine from the Walking Dead franchise.
  * **Good Score** - This div’s CSS display declaration is changed in the assessScore function to block if the scoreTally value is greater than 200. Its content informs the user that they have achieved a good score in terms of their survival chances and them to Shaun (image is also provided), the main protagonist from the cult favourite Shaun of the Dead.
  * **Bad Score** - This div’s CSS display declaration is changed in the assessScore function to block if the scoreTally value is greater than 100. Its content informs the user that they have achieved a bad score and relates them to David (image is also provided), a heavily disliked character from Shaun of the Dead (who does end up getting eaten by zombies).
  * **Bad Score** - This div’s CSS display declaration is changed in the assessScore function to block if the scoreTally value is equal to 100 (which is the lowest possible score a user could achieve). Its content informs the user that they have achieved the worst score in terms of their survival chances and relates them to you guessed it a zombie (image is also provided).
  * **Play again button** - The final piece of functionality in the site  is the play again button which is positioned in a very similar position to play button at the start of the game, the styling for the buttons are the same in terms of colour; however, I used a more appropriate undo arrow icon to suggest to the user that this was to restart the game. There same hover and active pseudo selectors are applied to the element to invert the colours of the button as the user interacts with it to provide visual feedback. The JavaScript functionality attached to this button is as follows. On click or press, the button calls the restartGame function. This function reloads the window placing the user back at the rules container to begin again. This functionality satisfies the final user story in allowing the user to play the game again.  

In summary, the premise and topic of the game create satisfy creating the fun element. Its an often commonly debated topic “what would you do during the zombie apocalypse”. This element combined with the background image and music as well as the textual situations provided promotes the uneasy/creepy atmosphere to the user. The interactivity of the site comes through in the buttons different paths the user can take based on their personality which is formed with the functionality in the script.js file.





