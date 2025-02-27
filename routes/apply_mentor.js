//@ts-check
const applyMentorMiddleware = require("express").Router();

/**
 * Some typedefs
 */
/**
 * @typedef MentorApplicationData
 * @property {string} courseCompletionCertificate Effectively a url to where it has been uploaded (like a storage bucket)
 * @property {string} yearOfCompletion
 * @property {string} calendlySchedulingLink
 */

applyMentorMiddleware.post("/", (req, res, next) => {

    //Mock checking authentication
    const token = req.headers['authorization'] ? req.headers['authorization'].split("Bearer ").join("").trim() : "";
    if(token !== "i_am_signed_in"){

        res.sendStatus(403);
        return;
    }

    //assuming authorized access
    //Ensure all fields are provided
    /**
     * @type {MentorApplicationData}
     */
    const reqData = req.body;
    if(!reqData.courseCompletionCertificate || !reqData.yearOfCompletion || !reqData.calendlySchedulingLink){

        res.status(400).send("Please provide all details needed");
        return;
    }
    //Assuming value is okay. Store to db, with applicationStatus field added with the value "under_review"
    //Send a 200 (OK) status
    res.sendStatus(200);
});

module.exports = applyMentorMiddleware;