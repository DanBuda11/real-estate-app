# Real Estate App
## Why This Project
I have been involved in real estate in different capacities for over 10 years, and during the 4+ years of that time span I have acted in the capcacity of a Realtor, and the 7 years I have spent as a real estate investor, I have been increasingly disappointed by the lack of innovation in real estate technology. While this project is in no way going to reshape the MLS, I hope that it shows that, at least in a relatively simple way with limited functionality, that the digital tools for a Realtor, both in a digital marketing capacity as well as when listing properties for sale or rent, can be simple, useful and powerful.

## Scope of Project
### Version 1
* Home Page includes links to Buyers, Sellers, Investors, Listings, Home Search, Rentals, Stay Informed and Austin Info pages as well as a collapsable bio
* Header/Footer on all pages includes social media connect buttons, contact info, required disclosures
* Admin Page allows site owner to login and launch the Dashboard
* Dashboard page allows user/owner to create/edit/remove listings and rental properties, manage photos, and toggle rental properties as either vacant or occupied
* Buyer and Investor pages provide some static content and "useful links" but also incorporate a mortage calculator
* Seller page provide static content
* Austin Info page provides "useful links"
* Stay Informed page allows site visitor to sign up for an email newsletter and automatically be added via MailChimp, view newsletter archives, and link to a separate online newsletter
* Listings will populate from the listings created in the Dashboard; clicking on a listing will open up a detailed version of that listing; clicking on photos will open up a slideshow-type photo viewer with larger photos
* Rentals will populate from the rentals created in the Dashboard and display whether or not they are available for rent (and specific date that they will become available); will contain same detailed & photo-viewing funcitionality as Listings; will have downloadable applications
* Home Search will use Zillow's API to return homes for sale based on the search criteria entered by a user; will contain same detailed & photo-viewing functionality as Listings
* Fully responsive

### Version 2 Potential Additions
* Most recent Facebook post embedded on Home Page
* Blog page added as a link from Home Page
* Dashboard allows owner/user to create and submit new blog posts that are posted to Blog Page and sent automatically to various social media platforms
* Testimonials from former clients are added to the Bio section
* Neighborhood, school and market data info added to Buyer, Investor & Austin Info Pages using APIs to pull in data
* Market data added to Seller Page
* Home Search Page also links to Realtor.com for more accurate listing information; sends user to Realtor.com with my contact info visible
* Stay Informed Page adds embedded Facebook feed & embedded YouTube DIY Videos playlist
* Rentals page adds online application forms that are emailed to me when submitted; accepts credit card payments for applicationf fees

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Draw.io Diagram</title>
<meta http-equiv="refresh" content="0;URL='https://www.draw.io/#G0B-WeXbvNBvEYaFhQRS14d241Unc'"/>
</head>
<body>
<div class="mxgraph" style="position:relative;overflow:auto;width:100%;">
<div style="width:1px;height:1px;overflow:hidden;">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</div>
</div>
<a style="position:absolute;top:50%;left:50%;margin-top:-128px;margin-left:-64px;" href="https://www.draw.io/#G0B-WeXbvNBvEYaFhQRS14d241Unc" target="_blank"><img border="0" src="https://www.draw.io/images/drawlogo128.png"/></a>
</body>
</html>


## Additional Project Information/Links
* [Trello User Stories] (https://trello.com/b/R882AM3Y/real-estate-website)
* [Admin & Dashboard Mobile Mockups] (./Admin-Dashboard-Mobile.html)
* [User App Pages 1 Mobile Mockups] (./User-App-1-Mobile.html)
* [User App Pages 2 Mobile Mockups] (./User-App-2-Mobile.html)
* [User App Listings & Rentals Mobile Mockups] (./Listings-Rentals-Mobile.html)
* [User App Home Search Mobile Mockups] (./Home-Search-Mobile.html)

## Contact Dan 
* [Dan's LinkedIn] (https://www.linkedin.com/in/danbuda)
* [Dan's Twitter] (https://twitter.com/danielbuda)
