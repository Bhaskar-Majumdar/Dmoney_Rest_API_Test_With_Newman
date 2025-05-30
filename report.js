const newman = require("newman");
require("dotenv").config();
newman.run(
  {
    collection: `https://api.postman.com/collections/25294114-9d03daf9-4441-44d0-8adf-720731b5e160?access_key=${process.env.access_key}`,
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/report.html",
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run is complete");
  }
);