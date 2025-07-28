const jwt = require("jsonwebtoken");
const jwtSecretKey = process.env.JWT_SECRET_KEY;

const Authorization = async (req, res, next) => {
  const bearerHeader = req.headers.authorization;

  if (!bearerHeader) {
    return res.send({
      result: "Invalid Token"
    });
  }

  try {
    await jwt.verify(bearerHeader, jwtSecretKey);
    next();
  } catch (err) {
    res.send({ result: "Invalid Token" });
  }
};

<<<<<<< HEAD
=======
module.exports = Authorization;

    // if(typeof bearerHeader !== undefined){
    //     console.log(">>>>>>" , bearerHeader);
        
    //     const bearer = bearerHeader.split(" ");
    //     const token = bearer[1];
    //     req.token = token;
        
    //    jwt.verify(token , jwtSecretKey , (err, data) => {
    //         if(err) {
    //             res.send({result: "Invalid Token"})
    //         } else{
    //             res.json({
    //                 message: "Profile accessed",
    //                 data
    //             })
    //         }
    //    })
    //    next();
        
    // }
    // else {
    //     res.send({
    //         result: "Invalid Token"
    //     })
    // }

    // try {
    //     const data = jwt.verify(token, jwttokenKey);
    //     if(data) {
    //         console.log("verify")
    //         next();
    //     } else {
    //         res.send("Invalid Token")
    //     }
    // } catch (error) {
    //     res.status(400).send("Invalid Request")
    // }
}
>>>>>>> 41451f2fc0872a8e61f711bf48ac996b473323db
module.exports = Authorization;