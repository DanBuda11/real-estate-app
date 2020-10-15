# Home Finder Lite
## Why This Project
I have been involved in real estate in different capacities for over 10 years, and during the 4+ years of that time span I have acted in the capcacity of a Realtor, and the 7 years I have spent as a real estate investor, I have been increasingly disappointed by the lack of innovation in real estate technology. While this project is in no way going to reshape the MLS, I hope that it shows that, at least in a relatively simple way with limited functionality, that the digital tools for a Realtor, both in a digital marketing capacity as well as when listing properties for sale or rent, can be simple, useful and powerful. It should also serve as an easy way for a small-scale investor such as myself to have a place to store and advertise the properties I have for rent or sale.

## Scope of Project
### Current Version
* Home Page includes ability for anyone to view Listings & Rentals (with varying levels of detail), and search for a Real Estate Agent
* Home Page allows a visitor to register for a Real Estate Agent account or login to an existing account
* Once logged in (or registered for the first time) user is sent to Dashboard with the options of creating, editing, or deleting listings or rentals
* Login/Logout authentication
* Any user can see all current listings & rentals and contact the listing agent, view more details about the property, and view any photos associated with listing
* Mobile-first, fully responsive design
* Handling of photo upload/storage/deletion is done thru [FileStack](https://www.filestack.com/)
* Features made-from-scratch responsive, mobile-friendly navbar with drop-down menu for smaller screens (much simpler stand-alone example found [here](http://codepen.io/danbuda/pen/mAVALa))
* Grid system for layout is also "home made" without using any external grid systems such as Bootstrap (simple example found [here](http://codepen.io/danbuda/pen/XjyvAQ))

### Future Ideas
* Additional information about Real Estate Agent including broker info, social media accounts & links, required industry disclosures
* Ability to download an application for a rental listing
* Additional tools for visitors including mortgage calculator, information on local schools, neighborhoods, crime statistics
* Ability for Real Estate Agent to allow visitors to sign up for an email newsletter (using MailChimp)
* Ability for Real Estate Agent to create and maintain a blog
* Embedded social media posts on Agent info page
* Client tesimonials to populate on Agent info page
* Online application forms for rental listings that are emailed to the listing agent
* Ability to filter listing search results based on search criteria

## Models
![](./Data-Models.png)

## Wireframes
### Mobile
![](./Mockups_Mobile_Home_Dashboard.png)
![](./Mockups_Mobile_Listings_Rentals.png)

## Libraries & APIs
### Current Version
* FileStack for photo storage and linking to app
* Perk framework including Knex, React, Backbone, Underscore, Gulp
* PostgreSQL & Express

### Potential Future APIs
* Neighborhood information, housing market data, crime statistics, school info, property location

## Additional Project Information/Links
* [Link to launched app](http://home-finder-lite.herokuapp.com/)
* [Trello User Stories](https://trello.com/b/R882AM3Y/real-estate-website)

## Contact Dan 
* [Dan's Portfolio](http://danbuda.com/#/?_k=w19b90)
* [Dan's LinkedIn](https://www.linkedin.com/in/danbuda)
* [Dan's Twitter](https://twitter.com/danielbuda)
* [Dan on CodePen](http://codepen.io/danbuda/)
