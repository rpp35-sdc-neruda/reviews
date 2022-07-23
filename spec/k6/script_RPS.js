import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  // stages: [
  //   {duration: '.5m', target: 800},
  //   {duration: '.75m', target: 800},
  //   {duration: '.5m', target: 1600},
  //   {duration: '1.25m', target: 1600},
  //   {duration: '1m', target: 2000},
  //   {duration: '1.25m', target: 2400},
  //   {duration: '.5m', target: 3200},
  //   {duration: '1.25m', target: 3200},
  //   {duration: '2.5m', target: 0},
  // ]
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s',
      duration: '1m',
      preAllocatedVUs: 20,
      maxVUs: 1000,
    }
  }
};

export default function () {
  http.request(
    'GET',
    'http://localhost:3000/reviews',
    {"product_id": 4},
    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
  );
  // sleep(1);
}