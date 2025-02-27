# Fourth-Profile-Task

The goal is to write a simple list of APIs that will allow a user to sign up, select a role they want to play (course mentor) and effectively send their application for the role (thus can be denied or approved). 

The user can only mentor a study program they studied in college. This should appear in their profile. Applications are made after sign in.

Application process involves selecting the course you want to mentor (must be the course you studied in college) and providing a calendly scheduling link. The application can be approved or rejected, as earlier specified.

Only approved mentors are visible on the list of mentors shown to other users (mentees). You cannot apply more than once to be a mentor.

From the description above, we need APIs for:

## Signing Up
Specify details such as name, and course studied in college (course name and institution).

## Applying to be a mentor
Give details such as course completion certificate, year of completion, and calendly scheduling link. MUST be signed in to do this.

## Querying the list of mentors
Show profile details of approved mentors (name, course studied in college, calendly scheduling link)

All APIs can be accessed and tested through Postman. 

## API's List
API accessible under localhost, port 3030

### Signing up
Route: /signup
Method: POST
contentType: application/json
Params: {

    name: string,
    courseName: string,
    courseInstitution: string,
}
response:   400 (Bad format) - values missing
            200 (OK) - user signed up successfully

### Applying to be a mentor
API assumes you're signed in and have a Bearer token. (Mock token is i_am_signed_in). Also, automatically assumes the course you signed up with is the one you're applying to be a mentor for.
Route: /apply-mentor
Method: POST
contentType: application/json
Params: {

    courseCompletionCertificate: string, //effectively a url to where it has been uploaded (like a storage bucket),
    yearOfCompletion: string, 
    calendlySchedulingLink: string,
    userId: string //unique identifier for the user
}
response:   400 (Bad format) - values missing
            200 (OK) - application submitted successfully

### Querying list of mentors
Route: /get-mentors
Method: GET
response:   200 (OK) - approved mentors list retrieved successfully
            [
                {
                    name: string,
                    courseName: string,
                    calendlySchedulingLink: string
                }
            ]