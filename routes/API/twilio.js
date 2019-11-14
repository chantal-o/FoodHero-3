// const express = require("express");
// const router = express.Router();

// require('dotenv').config();
// const client = require('twilio')(
//     process.env.TWILIO_ACCOUT_SID,
//     process.env.TWILIO_AUTH_TOKEN)
//     //twillio
  

// router.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

// router.post('/api/messages', (req, res) => {
//   res.header('Content-Type', 'application/json');
//   client.messages
//     .create({
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to: req.body.to,
//       body: req.body.body
//     })
//     .then(() => {
//       res.send(JSON.stringify({ success: true }));
//     })
//     .catch(err => {
//       console.log(err);
//       res.send(JSON.stringify({ success: false }));
//     });
// });


// module.exports = router;