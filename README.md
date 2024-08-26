# react-project-1

This is my first project in React, an Employee Management System that provides a platform for managing employee details and performing administrative operations. The application features multiple pages with different functionalities, including user authentication, employee management, and department management.

Project Description
The Employee Management System is built using React and is designed to handle various administrative tasks such as adding, editing,  and removing employees. 
For testing purposes, the JSONPlaceholder API is used to simulate data.

Project Structure
Pages and Functionalities
Home Page (/)
Displays information about the company (mission, vision, services).
Includes navigation links to other pages (Login, Dashboard, Admin).
Company logo is displayed.

Login Page (/login)
Provides a login form with username and password fields.
Includes a submit button for authentication.
Displays error messages for incorrect login attempts.

Dashboard Page (/dashboard)
Displays user-related information such as username, name, phone, email, and address.
Includes an option to edit the user details.
Includes a logout button to end the session.
Restricted to authenticated users.

Admin Login Page (/admin-login)
Provides a login form for admin users.
Includes a submit button for authentication.
Displays error messages for incorrect login attempts.

Admin Dashboard Page (/admin/dashboard)
Offers various admin functionalities including:
View a list of employees
Add a new employee
Edit employee details
Remove an employee
Includes a logout button for admin users.
Restricted to authenticated admin users.

Header and Footer
Header:
Displays the company logo.
Quick links for navigation (Home, Login, Dashboard, Admin).
Footer:
Includes copyright information.
Additional links: Contact Us, Privacy Policy, Terms of Service.

Testing with JSONPlaceholder API
The JSONPlaceholder API is used for testing purposes to simulate user and employee data.
Endpoints Used:
Users: https://jsonplaceholder.typicode.com/users

Setup Instructions
Clone the repository:
git clone https://github.com/Jasdeep-GIT/react-project-1.git
Navigate to the project directory:
cd react-project-1
Install dependencies:
npm install
Start the development server:
npm start
