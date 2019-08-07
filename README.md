# project-two
Link: https://safe-dusk-55377.herokuapp.com/people

This CRUD app is an employee database that a company/employer would use to keep track of things like employee information. The apps information could expand to whatever the user would like for it to do but in this particular case I used it to store the employees name, phone number, and job title.

I designed this app using the 7 RESTful routes which allowed me to show the different pages that I wanted to display. It starts on the Home page which prompts the user into selecting a button of whether they would like to add a new employee to their database or would they like to view their current employee database.

If the user selects the add button the app will direct them over to the New page which allows the user to fill out the required input fields to create the new employer (first and last name, phone, and job title). Once filled out the user can then select the "Add Employee" button and simply add that employee to their database.

If the user selects the view button the app will direct them over to the Index page which allows the user to view its current employees. On this page the user also has the options to either edit an employee's information, or perhaps delete an employee's information whom they've parted ways with. If the user clicks on the "Edit" button the app will direct them to the Edit page where the user can change any of the employees information and update it in the database.

Also on the Index page is a "View" button which would direct the user to the Show page and would allow the user to display that particular employee's information in which they have selected.

One thing I would of liked to add is some sort of a login method using env that would require the user to login with a username and password in order to display the home page. I had the idea in my mind and tried to implement it but I ran out of time. I also would of liked to add maybe so default images to the employee's info this way when the user is viewing the view page it is a little bit more information about the employee then what you see on the index page.
