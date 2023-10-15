import express from 'express';
import cors from "cors";
import { getCounters } from "../Counters/getCounters.js";
import { changeCount } from "../Counters/changeCount.js";
import { deleteCounters } from "../Counters/deleteCounters.js";
import { addCounters } from "../Counters/addCounters.js";

const router = express.Router();

router.use(
  cors({
    origin: "*",
    methods: ['GET','POST','DELETE', 'PUT'],
    preflightContinue: false
  })
);

//----------------------------- Rest API to get all Counters -----------------------------//

router.get('/', (req, res) => {
  getCounters().then(function (counters) {
    res.send(counters); // Send the data as a response
  }).catch(function (error) {
    console.log(error);
  });
});

//----------------------------- Rest API to add a Counter -----------------------------//

router.post("/", function(req, res){
  addCounters().then(function (counters) {
    res.send(counters); // Send the data as a response
  }).catch(function (error) {
    console.log(error);
  });
});


//----------------------------- Rest API to Inccrement/Decrement a Counter -----------------------------//

router.put("/", function(req, res){
  changeCount(req.body.counter_id, req.body.action).then(function () {
    getCounters().then(function (counters) {
      res.send(counters); // Send the data as a response
    }).catch(function (error) {
      console.log(error);
    })
  }).catch(function (error) {
    console.log(error);
  });
});

//----------------------------- Rest API to delete a Counter -----------------------------//

router.delete("/", function(req, res){
  deleteCounters(req.body.counter_id).then(function (counters) {
    res.send(counters); // Send the data as a response
  }).catch(function (error) {
    console.log(error);
  });
})

export { router };