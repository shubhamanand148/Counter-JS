import {CounterModel} from "../Models/CounterModel.js"

// Function to get the counters from backend.
let counters = [];

// Create a new counter if there is no counter.
if (counters.length == 0){
    const counter = new CounterModel;

    counter.id = 1;
    counter.name = "Counter " + counter.id;
    counter.count = 0;
    
    counters.push(counter);
}

async function getCounters(){
    return counters;
}

export {getCounters, counters}