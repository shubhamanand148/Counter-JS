import {counters} from "./getCounters.js";
import {CounterModel} from "../Models/CounterModel.js"

async function addCounters(){
    let counter = new CounterModel();

    counter.id = counters.length?counters[counters.length-1].id +1:1;
    counter.name = "Counter " + counter.id;
    counter.count = 0;
    
    counters.push(counter);
    return counters;
}

export {addCounters}