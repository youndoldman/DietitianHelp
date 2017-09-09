
# README

Prototype of small CRUD app using Ruby on Rails.

Functions as an Electronic Medical Record.

I am solely responsible for this fullstack. Backend, data modeling, design, database, frontend, etc...

----------

-ruby 2.2.3


-Rails 5.0.0


-Devise


-SQLite on Development, PostgreSQL on Production

----------
* Features:


	* Create new Client --> 
		Type "firstname lastname" on the "Search/Add" modal, hit ENTER or press "Add firstname lastname..." 


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


	* Add goals functionality
		e.g. "Client should show a 5% weight reduction by next visit."


	* Integrate Labs to auto-assessment
		e.g. relevant lab values that are not Within Normal Limits (WNL) should be mentioned in assessment.


	* Billing


	* Design and colors


	* Minify, compress and get rid of unecessary files and functions.


_____________________________________
