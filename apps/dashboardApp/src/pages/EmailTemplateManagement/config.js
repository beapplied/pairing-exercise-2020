export default {
  "application-invite": {
    description:
      "Candidates get this email when you invite them to a role or they apply through an integration",
    subject: "Link to your application to *|ORGNAME|*",
    emailText: `Hi *|TOFIRSTNAME|*,
        Here's the link to your application for the *|ROLETITLE|* at *|ORGNAME|*, there's a test,
        which you can complete in your own time using this link:
        *|URL|*
        Please do not share this link with anyone as they will be able to access your application.
        If you have any questions about your application, you can respond to this email directly!
        Best of luck!
        *|FROMFIRSTNAME|* *|FROMLASTNAME|*
        *|ORGNAME|*
    `,
    availableMergeTags: [
      {
        name: "CandidateFirstName",
        tag: "TOFIRSTNAME",
        required: false
      },
      {
        name: "RoleTitle",
        tag: "ROLETITLE",
        required: false
      },
      {
        name: "OrganisationName",
        tag: "ORGNAME",
        required: false
      },
      {
        name: "ApplicationLink",
        tag: "URL",
        required: true
      },
      {
        name: "AdminFirstName",
        tag: "FROMFIRSTNAME",
        required: false
      },
      {
        name: "AdminLastName",
        tag: "FROMLASTNAME",
        required: false
      }
    ]
  }
};
