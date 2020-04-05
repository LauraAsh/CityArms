# The City Arms, Olde City Gaol 

Welcome to my project and thank you for taking a look! 

## Contents

* UX 
    * Overall Project Goals
    * User Goals
    * Design Decisions
        * Fonts 
        * Icons 
        * Colours
        * Styling 
        * Images 
        * Backgrounds 
    * Bugs 
    
    

## UX 
### Project Goals 

The overall objective of this project is to give users information about a pub and restaurant located in Wells, England. This is a history rich pub that used to be an old city jail. 
It is aimed towards both tourists and locals alike, who are looking for something to eat, drink or just have a look at the old building. There are also rooms upstairs offering 
lovely accommodation. This website should be easy to navigate, while aiming to provide users with everything they need to know about this old pub in an easily
navigable manner. With all of this in mind, it should encourage users to go and check out the pub for themselves. 

### User Goals:
* Informative website that serves to provide all needed information about the pub, for example food, drink, opening times and accommdation availability.
* Well placed calls to action which inspire users to get in touch with the pub and continue their experience offline
* Ability to send a message via a contact form for ease of access
* Location map which makes it easy for users to find
* Use the website across all screen sizes, from desktop to mobile. Fully responsive design.

### Design Decisions
* As the pub is quite old and traditional, the design will be influenced by toned down colour schemes and structure. As the pub itself is quite historic, photos of the pub itself will
be a large focus of the design. This will come in the form of hero images and also galleries on each page which showcase the beautiful and old architecture of the building.

#### Fonts: 
Regarding fonts, Libre Baskerville was chosen as it is a more traditional font that is based on older serif styles. This will compliment the ambience of the pub. While the goal of the 
website is to encourage web visitors to come into the pub, the history of the pub plays a large role in this. With this in mind, Libre Baskerville does a good job of reinforcing this 
historic feel. 

### Icons:
Icons will be used to further identify what certain parts of the website do. These should always be relevant, so as to provide a more navigable website and better user experience. The
burger icon will be utilized on mobile and tablet devices, as this is the universal navigation symbol for smaller screens. This will allow for better user experience on smaller devices.

### Colours
The pub itself has a dark coral exterior, while darker colours dominate indoors. This will be replicated in the colour scheme of the website. Again, this will maintain the more traditional
feel. The following color scheme was selected based on this;
* Primary: #a98a90 "Dark Mauve" - This will be the brightest colour shown throughout the website, although it is still quite toned down. It will be shown across section backgrounds and 
in some cases icons. 
* Secondary: #54595F - This is a dark charcoal grey, which compliments the dark mauve. This will be utilized for text headings and also icons in some cases.

###Bugs 
* Nav bar menu not clickable for the toggle icon on smaller screens. This ended up a result of having the incorrect scripts in the header. These were replaced and moved to their correct 
position before the closing body tag, and the toggle icon worked perfectly on mobile devices!
* Icons were disappearing on smaller screees. This was solved by changing to max height for sections rather than specifying a fixed height. 
* When building the gallery, the styling for the footer and the form broke. After some debugging it seemed the media queries were causing this, as when they were commented out the problem 
was solved. Further inspection revealed that the media query was not closed properly, which had caused this. Adding an extra curly bracket, the syntax error was fixed and the styling returned
as normal to the form and footer. 
