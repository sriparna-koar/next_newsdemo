import user from "../../models/user";

import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
const handler = async (req, res) => {
  if (req.method == "POST") {
    // console.log(req.body)
    const {name,email}=req.body
   let u=new user({name,email,password:CryptoJS.AES.encrypt(req.body.password,process.env.AES_SECRET).toString()})
   u.save()
   
    res.status(200).json({ success: "This method is allowed" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler);
