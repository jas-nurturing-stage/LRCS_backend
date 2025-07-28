const Admin = require("../models/admin.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const hashKey = process.env.HASH_KEY;
const jwtSecretKey = process.env.JWT_SECRET_KEY;

<<<<<<< HEAD
// Make the function async
async function adminRegister(req, res) {
  const { email, password } = req.body;
  console.log(req.body);
  let date = new Date(); // This variable 'date' is not used, can be removed if not needed

  // Ensure password is a string before hashing
  req.body.password = crypto
    .createHash("sha256", hashKey)
    .update(String(req.body.password))
    .digest("hex");

  try {
    // Use await with findOne()
    const user = await Admin.findOne({ email: email });

=======
function adminRegister(req, res) {
  const {email, password}  = req.body
  console.log(req.body);
  let date = new Date();
  req.body.password = crypto
    .createHash("sha256", hashKey)
    .update(req.body.password)
    .digest("hex");

  Admin.findOne({ email: email }, (err, user) => {
>>>>>>> 41451f2fc0872a8e61f711bf48ac996b473323db
    if (user) {
      res.send({ message: "admin already exist" });
    } else {
      const newAdmin = new Admin({ ...req.body });
      console.log(newAdmin);
<<<<<<< HEAD

      // Use await with save() as well, and handle errors
      const newSavedAdmin = await newAdmin.save();
      console.log({ newSavedAdmin });
      res.json({ message: "registered" }).status(200);
    }
  } catch (err) {
    // Catch any errors from findOne or save
    console.error("Error during admin registration:", err); // Log the actual error for debugging
    res.status(500).json({ message: "Registration failed", error: err.message }); // Send a 500 status for server errors
  }
=======
      newAdmin.save(function (err, newSavedAdmin) {
        if (err) {
          res.json({ message: "not registered", err: err }).status(200);
        } else {
          console.log({ newSavedAdmin });
          res.json({ message: "registered" }).status(200);
        }
      });
      // res.json({message:'here'}).status(200)
    }
  });
>>>>>>> 41451f2fc0872a8e61f711bf48ac996b473323db
}

const AdminLogin = (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    console.log("Please fill all the details");
<<<<<<< HEAD
    res.json({ message: "Please fill all the details", login: false });
  } else {
    // This AdminLogin also uses a callback for findOne.
    // You should update this function similarly to adminRegister
=======
    res.json({ message: "Please fill all the details" ,login:false});
  } else {
>>>>>>> 41451f2fc0872a8e61f711bf48ac996b473323db
    Admin.findOne({ email: email }, (err, result) => {
      if (result) {
        req.body.password = crypto
          .createHash("sha256", hashKey)
          .update(req.body.password)
          .digest("hex");
        if (req.body.password === result.password) {
          //create jwt token
          let data = {
            email: req.body.email,
            userType: req.body.userType,
          };
<<<<<<< HEAD
          const jwtToken = jwt.sign(data, jwtSecretKey, { expiresIn: "12m" });
=======
          const jwtToken = jwt.sign(data, jwtSecretKey, {expiresIn: '12m'});
>>>>>>> 41451f2fc0872a8e61f711bf48ac996b473323db
          let resultpayload = {
            result: result,
            token: jwtToken,
          };
<<<<<<< HEAD
          console.log("resultpayload", resultpayload);
=======
          console.log("resultpayload" , resultpayload);
>>>>>>> 41451f2fc0872a8e61f711bf48ac996b473323db
          res.send(resultpayload);
        } else {
          res.status(400).send("Wrong Password");
        }
      } else {
        res.send("Invalid User");
      }
    });
  }
};
<<<<<<< HEAD
module.exports = { adminRegister, AdminLogin };
=======
module.exports = { adminRegister, AdminLogin };
>>>>>>> 41451f2fc0872a8e61f711bf48ac996b473323db
