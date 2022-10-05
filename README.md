# Ecommerce Reviews API

A RESTful API that manages reviews data provided by consumers for an existing frontend reviews component of an e-commerce website.

## Features

- Diagnosed node.js bottleneck with New Relic after MySQL indexing – used an NGINX cache and load balancer to horizontally scale five EC2 instances that - increased RPS from 750 to 2500 w/ 0.27% err rate (K6) and client load from 800 to 8000 w/ <1.2s latency (Loader.io).
- Conducted extract, transform and load using MySQL on millions of entries from CSV documents to preserve inherited legacy data.
- Engineered a testing framework using Mocha and Chai to achieve over 82% code coverage to ensure seamless API integration. 

## Diagrams
- ![SDC_ Reviews API](https://user-images.githubusercontent.com/84835229/194171258-f93b5e68-f131-4e73-afe4-9a43f4c566ee.jpeg)
- ![SDC_ Reviews API2](https://user-images.githubusercontent.com/84835229/194171441-dbda0c3a-232c-4d0e-848f-291e35d44311.jpeg)
- ![SDC_ Reviews API6](https://user-images.githubusercontent.com/84835229/194171701-8bdc400f-c26e-443c-9d3b-f2d427da78e7.jpeg)
- ![SDC_ Reviews API7](https://user-images.githubusercontent.com/84835229/194171816-18d47e05-31c4-4779-b693-d254e22e5d90.jpeg)


## K6 Testing:
- ![SDC_ Reviews API3](https://user-images.githubusercontent.com/84835229/194171489-7656e487-5b0b-4c1c-b05b-440983517475.jpeg)
- ![SDC_ Reviews API4](https://user-images.githubusercontent.com/84835229/194171590-38c2b5c2-0842-4598-b91f-65e34c4e8193.jpeg)
- ![SDC_ Reviews API5](https://user-images.githubusercontent.com/84835229/194171634-0ab604d4-c860-448b-9494-4dc39480ce7c.jpeg)

## Loader.io Testing: 
- ![SDC_ Reviews API8](https://user-images.githubusercontent.com/84835229/194171901-435ce8c5-906a-4ca6-a918-97910e912a5a.jpeg)
- ![SDC_ Reviews API9](https://user-images.githubusercontent.com/84835229/194171961-a9ef76f1-5126-4cee-8fb9-4c779ae136dd.jpeg)
- ![SDC_ Reviews API10](https://user-images.githubusercontent.com/84835229/194172042-db2e2c1c-54f8-4a83-b672-433a2d243cab.jpeg)
- ![SDC_ Reviews API11](https://user-images.githubusercontent.com/84835229/194172080-0c508fbb-9fd3-4643-b2c6-e782398832ad.jpeg)
- ![SDC_ Reviews API12](https://user-images.githubusercontent.com/84835229/194172119-1e978174-f51d-4398-a2c6-32529773a7a2.jpeg)
- ![SDC_ Reviews API13](https://user-images.githubusercontent.com/84835229/194172157-42ab1605-d93e-4a7a-83a9-49fc2b8d2d57.jpeg)



## Tech Stack

This project was built with the following technologies:

![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" />
![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)

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
