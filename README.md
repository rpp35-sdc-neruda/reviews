# Ecommerce Reviews API

A RESTful API that manages reviews data provided by consumers for an existing frontend reviews component of an e-commerce website.

## Features

- Diagnosed node.js bottleneck with New Relic after MySQL indexing – used an NGINX cache and load balancer to horizontally scale five EC2 instances that - increased RPS from 750 to 2500 w/ 0.27% err rate (K6) and client load from 800 to 8000 w/ <1.2s latency (Loader.io).
- Conducted extract, transform and load using MySQL on millions of entries from CSV documents to preserve inherited legacy data.
- Engineered a testing framework using Mocha and Chai to achieve over 82% code coverage to ensure seamless API integration. 

## Diagrams

-  

## K6 Testing:

## Loader.io Testing: 

## Tech Stack

This project was built with the following technologies:

![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" />

## Setup/ Installation

-  Start server to begin listening for requests at port 3000:

```bash
npm start
```

## Testing

-  Run Mocha/Chai test suites while server is running:

```bash
npm test
```

## Resources (include useful or related links)

-  [MySQL](https://dev.mysql.com/doc/)
-  [PM2](https://pm2.io/docs/runtime/integration/transpilers/)
