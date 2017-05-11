
# README

Training ground to learn web development.

* No new users permitted yet.

----------

-ruby 2.2.3


-Rails 5.0.0


-Devise


-SQLite on Development, PostgreSQL on Production


-Built using "advantage-responsive-admin-theme". Can be found here for reference -> 
	https://shapebootstrap.net/item/1525214-advantage-responsive-admin-theme


----------
* Features:


	* Create new Client --> 
		Type "firstname lastname" on the "Search/Add" modal, hit ENTER or press "Add firstname lastname..." 


	* Search existing Client --> 
		Start typing first or last name on Search/Add modal, options will appear.


	* Create sample assessment based on information provided --> 
		Fill as much information as possible on the "Gather" tab. (Labs are still a Work In Progress (WIP), please ignore).

		BUG #1 --> after filling info on "Gather" tab, hitting "Next" will not advance to the next tab.

		Workaround
			1. manually click on the "Assess" tab and hit "Run" to run the assessment.
				This will create a sample assessment and will indicate any potential diagnosis based on the information provided in the "Gather" tab.
			2. Go back to "Gather" and click "Next" so all the info filled in "Gather" can be saved on the database.


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

Work two jobs. Time is scarce. 
