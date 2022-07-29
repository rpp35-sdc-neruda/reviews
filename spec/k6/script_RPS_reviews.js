import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s',
      duration: '1m',
      preAllocatedVUs: 100,
      maxVUs: 20000,
    }
  }
};

export default function () {
  http.get('http://localhost:3000/reviews', {"product_id": 4}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
}
// export default function () {
//   http.request(
//     'GET',
//     'http://localhost:3000/reviews',
//     {"product_id": 4},
//     {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
//   );
// }