import {counters} from "./getCounters.js";

async function deleteCounters(counter_id){
    
    for(let i=0;i<counters.length;i++){
        if(counters[i].id === counter_id) {
            counters.splice(i, 1);
            break;
        }
    }
    return counters;
}

export {deleteCounters}