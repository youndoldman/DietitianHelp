
# README


Electronic Medical Record keeping application with auto assessment functionality to help reduce MNT errors.


v1 incoorporates:
 - Dynamic Javascript files rendering in application.html.erb.
 - JS files bundled up.
 - RESTful Routes adjusted to allow users to share clients with other users.
 	- from `/clients/1` to `/users/2/clients/1`

Prototype of small CRUD app using Ruby on Rails.

Functions as an Electronic Medical Record.

I am solely responsible for this fullstack. UX/UI, API calls, user authentication, data modeling, version control, deployment, routing, design, etc...

## dependencies 

-ruby 2.2.3

-Rails 5.0.0

-Devise for authentication

-SQLite on Development, PostgreSQL on Production

----------
* Features:


	* Create new Client --> 
		Type "<firstname> <lastname>" on the "Search/Add" modal, hit ENTER or press "Add firstname lastname..." 


	* Search existing Client --> 
		Start typing first or last name on Search/Add modal, options will appear.


	* Create sample assessment based on information provided --> 
	
		Fill as much information as possible on the "Gather" tab. (Labs are still a Work In Progress (WIP), please ignore).


	* Add notes relevant to Medical Nutrition Therapy --> 
		1. On the "Assess" tab click on the button "Comply" next to "Run" to move to the "Comply" tab. 
		2. Add the necessary notes (and date for the case of Next Evaluation Notes) and click "Done".
		3. A notification will appear "MNT Completed" asking what to do next.
		4. Click "Dashboard" to move on to calendar or "History" to see the notes that were saved for this current client.

	* See all the assessments that are due for today displayed on the calendar "Dashboard".


* Pending Work/Features
	
	* Show saved data. -Enable History feature.

	* Integrate Labs to auto-assessment
		e.g. relevant lab values that are not Within Normal Limits (WNL) should be mentioned in assessment.

	* Billing

	* User account should be able to update users information.

	* Clients should be able to send their Dietitians pictures of meals so Dietitians can keep track of MNT better.

	* Clients should be able to communicate with Dietitian for online consults.

	* Minify, compress and get rid of unecessary files and functions.

_____________________________________

To preview this project please visit http://dietitian.help

Thanks for stopping by!
