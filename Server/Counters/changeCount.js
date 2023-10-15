// JS Script to Increase/Decrease the count of a counter.
import {counters} from "./getCounters.js";

async function changeCount(counter_id, action){
    let index;
    switch (action) {
        case "inc":
            index = counters.findIndex(counter => counter.id === counter_id);
            counters[index].count++;
            break;
        case "dec":
            index = counters.findIndex(counter => counter.id === counter_id);
            counters[index].count--;
        break;
    
        default:
            break;
    }
}

export {changeCount}