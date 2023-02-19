# CMS Frontend

Cms frontend for the ecommerce project

## work flow

When admin user forget their password, they should be able to reset password from the system

So, follow the steps to build a password rest system:

1. FORNTEND: show the email input form and let user submit that to API.
2. BACKEND: Get the email data in the API and check if user exist in the our db associated with that email.
3. BACKEND: if we have no user found, send error messesage saying user not found that complets the transaction.
4. BACKEND: if user found, generate a random 6 digit number and store in a session table.
5. BACKEND: send that randomly generated 6 digit number to tht user email address.
6. BACKEND: at the same time send resopnse to frontend saying OTP has been sent to their email.
7. FORNTEND: if we receive success message from the backend, then show another form that requires you to enter the OTP that was sent to your email and 2 more input fields for the new password and confirm password. let user submit the form to another API.
8. BACKEND: once user submits the form, in the API, grabl that OTP and password and email.
9. BACKEND: check if combination of email and OTP exitsts in the sessions table, if it doesnot exists simply respons saying invalid OTP. If it does exists than remove the data from the session table and continue to step 10.
10. BACKEND: encrypt the incoming plain password, user table with that new ecnrypted password based on user email.
11. BACKEND: once password update operation is succesful, then send email notification saying password has been changed, and also response password updated successfully message to the frontend.

## session model:

status: string,
token: string, (insert OTP )
association: string (insert email.)
ct
ut
