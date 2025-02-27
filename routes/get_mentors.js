//@ts-check
const getMentorMiddleware = require("express").Router();

/**
 * Some typedefs
 */
/**
 * @typedef MentorFullData
 * @property {string} name
 * @property {string} courseName
 * @property {string} courseInstitution
 * @property {string} courseCompletionCertificate Effectively a url to where it has been uploaded (like a storage bucket)
 * @property {string} yearOfCompletion
 * @property {string} calendlySchedulingLink
 * @property {"under_review" | "approved" | "rejected"} applicationStatus
 */

getMentorMiddleware.get("/", (req, res, next) => {

    //a fake list of mentors. We'll filter to approved ones and send as result
    /**
     * @type {MentorFullData[]}
     */
    const allMentors = [
        {
            name: "William",
            courseName: "CS",
            courseInstitution: "JK",
            courseCompletionCertificate: "url/to/bucket",
            yearOfCompletion: "2012",
            calendlySchedulingLink: "calendly/url",
            applicationStatus: "approved"
        },
        {
            name: "Dilly",
            courseName: "B.Sc",
            courseInstitution: "S.U",
            courseCompletionCertificate: "url/to/bucket",
            yearOfCompletion: "2012",
            calendlySchedulingLink: "calendly/url2",
            applicationStatus: "rejected"
        },
        {
            name: "Marcus",
            courseName: "CT",
            courseInstitution: "HW",
            courseCompletionCertificate: "url/to/bucket",
            yearOfCompletion: "2012",
            calendlySchedulingLink: "calendly/url3",
            applicationStatus: "approved"
        }
    ]

    res.status(200).send(allMentors.filter((m) => m.applicationStatus === "approved").map((mentor) => ({ name: mentor.name, courseName: mentor.courseName, calendlySchedulingLink: mentor.calendlySchedulingLink })));
});

module.exports = getMentorMiddleware;