const { loginUser, buatuser, getUser } = require("../controller/usercontroller")

const express = require("express");
const router = express.Router();

router.get("/", getUser);
router.post("/register", buatuser);
router.post("/login", loginUser);

module.exports = router;