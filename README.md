# OWASP_Assignment
Part 2: Implement a Simple Front-End Form (100 words)

Create a basic HTML and JavaScript login form that mimics Juice Shop’s login page. Your form should include:

    Email and password input fields
    Client-side validation to prevent empty fields
    A simple JavaScript function that checks if the email contains "@", and the password is at least 8 characters long
    Note: In part 2 you are required to create a basic login form with client side and server-side validations and then in 100 words write what you implemented and how you implemented in 100 words. With that you can add your GitHub link in the document itself and keep it public for TA's assessment.
    Provide the HTML and JavaScript code for this form with your github repo link. As a good developer practice your readme.md file should be well explained. 

Part 3: Exploit a Vulnerability in your OWASP Web Form (100 words)

    Perform an SQL Injection or XSS attack on the login page.
    Document the exact steps taken to execute the attack.
    Provide a screenshot or description of the attack’s success (e.g., accessing admin credentials or executing JavaScript in the browser).
    Suggest one way to fix this vulnerability.
    Note: In part 3 you are required to exploit your own web login form. What steps you took? Even if you are not able to exploit it that means you have enforced great practices designing it. Thus, paste screenshots, etc. If successful attack, then what fix you'll do in this scenario. Mention your learnings in 100 words.

Project Files Explanation

index.html
This is the secure version of the login form .
It contains the email and password input fields and performs client-side validation. It checks that fields are not empty, verifies the email contains "@", and ensures the password is at least 8 characters long. It sends login data to the backend using the Fetch API and safely displays responses using textContent.

xss-demo.html
This is the intentionally vulnerable version .
It uses innerHTML to display user input, which allows XSS attacks for demonstration purposes in Part 3.

server.js
This file runs the backend server. It handles POST requests to /login, performs server-side validation, and returns JSON responses.

package.json
This file defines the project name, dependencies (express and cors), and includes a start script to run the server.

package-lock.json
This file automatically tracks the exact dependency versions installed by npm.

README.md
This file contains the assignment instructions and project documentation.

How to Run the Program

Install Node.js from https://nodejs.org

Open a terminal inside the project folder.

Install dependencies:

npm install

Start the server:

npm start

or

node server.js

Open index.html in your browser for the secure version.
Open xss-demo.html to test the vulnerable version.
