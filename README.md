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


