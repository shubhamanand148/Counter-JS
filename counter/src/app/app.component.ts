import { Component, OnInit } from '@angular/core';
import { CounterModel } from './CounterModel';
import axios from "axios";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counters: CounterModel[] = [];
  API_URL = "http://localhost:3002/counter"

  // This will load all the counters when a user opens the webpage for first time.
  ngOnInit() {
    this.getCounters();
  }

  // Function to increase the Counter count.
  increase(counter_id: number){
    axios.put(this.API_URL, {
      counter_id: counter_id,
      action: "inc"
    })
    .then((response) => {
      this.counters = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // Function to decrease the Counter count.
  decrease(counter_id: number){
    axios.put(this.API_URL, {
      counter_id: counter_id,
      action: "dec"
    })
    .then((response) => {
      this.counters = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // Function to add a counter.
  addCounter(){
    axios.post(this.API_URL)
    .then((response) => {
      this.counters = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // Function to get all the counters.
  getCounters(){
    axios.get(this.API_URL)
    .then((response) => {
      this.counters = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // Function to delete a counter.
  deleteCounter(counter_id: number){
    axios.delete(this.API_URL, {
      data: {counter_id: counter_id}
    })
    .then((response) => {
      this.counters = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
