let express = require("express");
let app = express();
let cors = require("cors")
let mongoose = require("mongoose");
let jwt = require("jsonwebtoken");
let multer = require("multer")
let path = require("path");
let cloud = require("cloudinary").v2;

let port = 8000;
let url = "mongodb://fakirmuzaffar771:Muzaffar@ac-77j3fy3-shard-00-00.p8eviav.mongodb.net:27017,ac-77j3fy3-shard-00-01.p8eviav.mongodb.net:27017,ac-77j3fy3-shard-00-02.p8eviav.mongodb.net:27017/?ssl=true&replicaSet=atlas-13289m-shard-0&authSource=admin&retryWrites=true&w=majority"
let par = {
    useNewUrlParser: true
}
mongoose.connect(url, par).then(() => {
    console.log("eastablish")
}).catch((er) => {
    console.log(er)
})
let usersc = new mongoose.Schema({
    name: String,
    email: String,
    pass: String
});
let Scpost = new mongoose.Schema({
    video: String
});
let user = new mongoose.model("User", usersc)
let post = new mongoose.model("Scpost", Scpost)

app.use(express.json({ limit: "100mb" }));
app.use(cors());
let storage = multer.diskStorage({
    destination: "upload",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
});
let upload = multer({
    storage: storage
})
app.use(express.static(path.join(__dirname, "upload")))

app.post("/Signdata", (req, res) => {
    let data = new user({
        name: req.body.name,
        email: req.body.email,
        pass: req.body.pass
    })
    data.save();
})
app.post("/login", async (req, res) => {
    let data = await user.findOne({ email: req.body.email, pass: req.body.pass });
    if (data) {
        let token = jwt.sign({ id: data._id }, "Muju");
        res.json({ mess: "exist", token: token, id: data._id })

    } else {
        res.json({ mess: "not" })
    }



})
app.post("/AddVideo", upload.single("file"), (req, res) => {
    let url = req.protocol + "://" + req.get("host")
    let data = new post({
        video: url + "/" + req.file.filename
    })
    data.save();
})
app.get("/", async (req, res) => {
    let data = await post.find()
    res.send(data)

})

app.listen(port)
