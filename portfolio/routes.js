const path = require("path");
const router = require("express").Router();

router.use("/", htmlRoutes);

router.route("/").get(//bio
)
router.route("/portfolio").get(//portfolio)
)
router.route("/contact").get(//contact
)

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

module.exports = router;