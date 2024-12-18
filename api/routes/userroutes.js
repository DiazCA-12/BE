const { loginUser, buatuser } = require("../controller/usercontroller")

const express = require("express");
const router = express.Router();

route.get("/", getUser);
router.post("/register", buatuser);
router.post("/login", loginUser);

module.exports = router;