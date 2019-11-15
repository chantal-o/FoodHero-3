const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../controllers/register");
const validateLoginInput = require("../../controllers/login");
// Load User model
const User = require("../../models/User");



// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({

          usertype: req.body.usertype,
          username: req.body.username,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          organization: req.body.organization,
          // streetnum: req.body.streetnum,
          streetname: req.body.streetname,
          cityname: req.body.cityname,
          province: req.body.province,
          postalcode: req.body.postalcode,
          mobile: req.body.mobile,
          email:req.body.email,
          password: req.body.password,
          accepttc: req.body.accepttc,
          acceptem: req.body.acceptem,
          
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

  
  // @route POST api/users/login
// @desc Login user and return JWT tokens
// @access Public
router.post("/login", (req, res) => {
  // Form validation
const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
const email = req.body.email;
const password = req.body.password;
// const usertype = req.body.usertype;


// Find user by email
  User.findOne({ email}).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          usertype: user.usertype,
          username: user.username,
          firstname: user.firstname,
          lastname: user.lastname,
          organization: user.organization,
          // streetnum: user.streetnum,
          streetname: user.streetname,
          cityname: user.cityname,
          province: user.province,
          postalcode: user.postalcode,
          mobile: user.mobile,
          email:user.email
        };

        
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }

        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});



module.exports = router;