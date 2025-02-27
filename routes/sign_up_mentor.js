//@ts-check
const signUpMentorMiddleware = require("express").Router();

/**
 * Some typedefs
 */
/**
 * @typedef MentorUser
 * @property {string} name
 * @property {string} courseName
 * @property {string} courseInstitution
 */

signUpMentorMiddleware.post("/", (req, res, next) => {

    //Get the request data from the body
    /**
     * @type {MentorUser}
     */
    const reqData = req.body;
    // Ensure all fields are provided in request body
    // A simple mock check, just to ensure all fields are provided.
    // Value checks can be more advanced to fish out malformed string values, etc
    if(!reqData.name || !reqData.courseName || !reqData.courseInstitution){

        res.status(400).send("Please fill in all fields");
        return;
    }
    //fields are okay. We save to the database (mock) and return a 200 response.
    res.sendStatus(200);
});

module.exports = signUpMentorMiddleware;