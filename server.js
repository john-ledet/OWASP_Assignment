const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());
server.use(express.json());
const sampleAccount = {
  loginEmail: "admin@juice-sh.op",
  loginPassword: "password123"
};
server.post("/login", (request, response) => {
  const submittedEmail = request.body.email;
  const submittedPassword = request.body.password;
  if (!submittedEmail || !submittedPassword) {
    return response.json({ message: "Server check failed: missing input" });
  }
  if (submittedEmail.indexOf("@") === -1) {
    return response.json({ message: "Server check failed: bad email format" });
  }
  if (submittedPassword.length < 8) {
    return response.json({ message: "Server check failed: password too short" });
  }
  if (
    submittedEmail === sampleAccount.loginEmail &&
    submittedPassword === sampleAccount.loginPassword
  ) {
    return response.json({ message: "Login accepted" });
  }
  return response.json({ message: "Login denied" });
});
server.listen(3000, () => {
  console.log("App listening on port 3000");
});
