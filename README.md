# The City Arms, Olde City Gaol 

Welcome to my project and thank you for taking a look! 

This project is a website that was built for an **old traditional pub called the City Arms** located in Wells, England. The city is the smallest in England, with a population of 12,000. 
The building of City Arms dates back to 1549 when it was used as the city jail. Much of this building remains intact today, including the original barred windows, locks and chains
and a solitary cell. The challenge of this product was to build out a fully functioning website that still encompassed the traditional feel of the pub. 

## Contents

* [UX](#ux)
    * [Overall Project Goals](#overall-project-goals)
    * [User Goals](#user-goals)
    * [Design Decisions](#design-decisions)
        * [Fonts](#fonts)
        * [Icons](#icons)
        * [Colours](#colours)
* [Bugs](#bugs) 
* [Technologies Used](#technologies-used)
    * [Languages](#languages)
    * [Libraries and Tools](#libraries-and-tools)
* [User Stories](#user-stories)
* [Testing](#testing)
* [Credits](#credits)
    

## UX 
### Overall Project Goals 

The overall objective of this project is to **give users information about a pub and restaurant** located in Wells, England. This is a history rich pub that used to be an old city jail. 
It is aimed towards both tourists and locals alike, who are looking for something to eat, drink or just have a look at the old building. There are also rooms upstairs offering 
lovely accommodation. This website should be easy to navigate, while aiming to provide users with everything they need to know about this old pub in an easily
navigable manner. With all of this in mind, it should encourage users to go and check out the pub for themselves. 

### User Goals
* **Informative website** that serves to provide all needed information about the pub, for example **food, drink, opening times and accommodation availability**.
* **Well placed calls to action** which inspire users to get in touch with the pub and continue their experience offline
* Ability to **send a message via a contact form** for ease of access
* **Location map** which makes it easy for users to find
* Use the website across all screen sizes, from desktop to mobile. **Fully responsive design**.

### Design Decisions
* As the pub is quite old and traditional, the design will be influenced by **toned down colour schemes and structure**. As the pub itself is quite historic, photos of the pub itself will
be a large focus of the design. This will come in the form of **hero images and also galleries** which showcase the beautiful and old architecture of the building.

#### Fonts
Regarding fonts, **[Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville)** was chosen as it is a more **traditional font that is based on older serif styles**. This will compliment the ambience of the pub. While the goal of the 
website is to encourage web visitors to come into the pub, the history of the pub plays a large role in this. With this in mind, Libre Baskerville does a good job of reinforcing this 
historic feel. 

#### Icons
**Icons will be used to further identify what certain parts of the website do**. These should always be relevant, so as to provide a more navigable website and better user experience. The
burger icon will be utilized on mobile and tablet devices, as this is the universal navigation symbol for smaller screens. This will allow for better user experience on smaller devices.

#### Colours
The pub itself has a dark coral exterior, while darker colours dominate indoors. This will be replicated in the colour scheme of the website. Again, this will maintain the more traditional
feel. The following color scheme was selected based on this;
* **Primary: #a98a90 "Dark Mauve"** - This will be the brightest colour shown throughout the website, although it is still quite toned down. It will be shown across section backgrounds and 
in some cases icons. 
* **Secondary: #54595F** - This is a dark charcoal grey, which compliments the dark mauve. This will be utilized for text headings and also icons in some cases.

## Technologies Used

### Languages

* <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>
* <a href="https://www.w3schools.com/js/">JavaScript</a>

### Libraries and Tools
* <a href="https://getbootstrap.com/">Bootstrap</a>
* <a href="https://fontawesome.com/icons?d=gallery">Font-Awesome</a>
* <a href="https://fonts.google.com/">Google Fonts</a>
* <a href="https://jquery.com/">jQuery</a>
* <a href="https://popper.js.org/">Popper.js</a>
* <a href="https://www.google.com/maps">Google Maps</a>
* <a href="https://git-scm.com/">Git</a>


## User Stories

Each of the following user stories contributed to the design of the website, to ensure the user had the most effortless experience;
* As a user I would expect to be able to **contact the website owner by filling out a form or else via the phone**. This could be used to enquire about restaurant or accomodation bookings, or even 
just for general queries. Both a contact form and the phone number of the pub are on the website.
* As a user I would expect to be able to **navigate to different parts of the website by selecting different options in the nav bar**. This was achieved through linking different sections of 
the website to each of the buttons in the nav bar. 
* As a user I would expect to be able to **find the location of the pub** so I had the information to visit it should I wish. This was included by embedding Google maps and also including 
address details in the footer. 
* As a user I would expect to have an **understanding of the main services** offered by the pub. In this case it would be accommodation, food and drink, which we can see from the icons
displaying this information on the website. 
* As a user I would expect to be able to see some **imagery of the pub** before I went to see it. This is especially relevant for the accommdation section, where users would like to see
how a place looked before they booked to stay there. There are two separate photo galleries built in - one for a the restaurant and the other for the accommodation. 


## Testing

Implementing a **good testing plan** was a priority for me from the outset of this project, especially considering it was the first website I have fully built. For this reason, a close eye was kept on 
the outcome of any code changes or adaptations to the design. 

#### Testing Stories 

* Originally I was planning on using a lot more of the dark mauve #a98a90 in the design. However, when I began building out the website design **this colour looked too dominant**. Instead I opted for more white
background than originally intended, and also used a **transparent nav bar** so the hero image could come through behind it. 

* At one point the accommodation section was on a separate page, but this later was added to index.html. This had the effect of **bringing the website together into one full webpage** which was a cleaner design. 

* The website originally had just the transparent nav bar which was visible at the very top. However, it was decided it would be a better user experience if the nav bar was visible
to **jump to different sections of the website, regardless of where the user was on the page**. With this in mind, my mentor Simon Daehlin wrote some Javascript which meant the nav bar would be sticky and accessible
from each part of the website. 


#### Responsiveness 
* Plan: Similar to most modern websites, it was important this worked effectively across all devices. A close eye was kept on the **dev tools**, which was used the check how the website looked on different
screen sizes throughout. Utilizing Bootstrap was also a choice made here for responsive design, and in some cases flexbox was used too. 
* Implementation: While working with Bootstrap, I was **checking the documentation frequently ensuring all the classes were being implemented in the correct way**. The format was consistently checked - container,
row, column. This ensured that each breakpoint was receiving the correct content. 
* Result: The website is **fully functional on all devices**.
* Verdict: This test has been successful as the website is **fully responsive**.

#### Design and Aesthetics
* Plan: The challenge here was to **keep the traditional feel of the pub throughout the website**. This was to be achieved through a simple colour scheme, that echoed the colour of the pub itself. Imagery of
the pub was also to be used to showcase the traditional pub. Throughout each stage of building the website, this was checked to ensure this was achieved.
* Implementation: This involved **balancing out the colours and sections**. In this testing phase, the colours and elements were run and decisions were made on whether these were suitable. In some cases, for
example the form, the dark mauve colour was changed to white so as not to overpower the imagery. **Older images** of the pub were also showcased in the background while the parallex effect gave the impression
that elements were moving with the page. This allowed a nice effect without utilizing anything too fancy that would go against the pub's authenticity. 
* Result: After a few minor changes along the way, the website is designed nice and simple with **images of the pub shown in the background** of some elements. 
* Verdict: This test has been successfully passed as the **colour scheme and imagery suits the traditional feel of the pub**. 

## Bugs 
Nav bar on smaller screens:
* **Bug:** Nav bar menu not clickable for the toggle icon on smaller screens. While the burger icon was present, it did not expand the menu upon clicking.
* **Fix:** It was discovered that this was a result of having the incorrect scripts in the header. These were replaced and moved to their correct 
position before the closing body tag
* **Verdict:** The toggle icon worked perfectly on mobile devices and expanded to show the navigation menu once clicked.

Icons disappearing on smaller screens:
* **Bug:** The icons were cut off on smaller devices and weren't fully visible which was not a responsive design.
* **Fix:** It emerged that there was a set viewport height for the section. On smaller devices, the icons stacked and exceeded the height set for this section.
* **Verdict:** This was solved by changing to max height for sections rather than specifying a fixed height. 

Broken styling for footer and form:
* **Bug:** When building the gallery, the styling for the footer and the form broke.
* **Fix:** After some debugging it seemed the media queries were causing this, as when they were commented out the problem was solved. 
* **Verdict:** Further inspection revealed that the media query was not closed properly, which had caused this. Adding an extra curly bracket, the syntax error was fixed and the styling returned
as normal to the form and footer. 

## Credits
* The JavaScript for the navbar was written by my mentor [Simen Daehlin](https://github.com/Eventyret).