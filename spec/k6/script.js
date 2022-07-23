import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1,
  duration: '45s'
};

export default function () {
  http.request(
    'GET',
    'http://localhost:3000/reviews',
    {"product_id": 4}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
    );
  // sleep(1);
}
