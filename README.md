# Advanced Node concepts

This project explores much about how the internals of
Node work. It's a follow-along to Stephen Grider's
Node JS: Advanced concepts course. Here, I begin
to understand the eventloop, libuv and v8 as running under Node, and how to improve performance through caching and cluster mode

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Running Ubuntu 18.04 Bionic Beaver standard image
Visit ubuntu.com to get the latest image.
Google how to install the iso.
(iso on USB through UniversalUSB installer works.)
```

### Installing

A step by step series of examples that tell you how to get a development env running

```
Node
sudo apt update
sudo apt install nodejs npm
node -v
'check what version you have'
```

```
Express.js
mkdir performance
cd performance
npm init
**Hit Enter to accept all default prompts.
npm install --save express

```

```
Apache utilities for benchmarking
sudo apt install apache2-utils
```

```
Install PM2
npm install -g pm2
```

```

```

Demo
```

```

## Running the tests

Benchmark tests in clustering performance
Apache benchmark
```
cd nodeOverview
cd performance
node index.js
ab -c 50 -n 500 localhost:3000/fast
This will run concurrent 50 tests running
localhost:3000 express webserver, specifically for page fast
It will run a total of 500 times
```
```

```
<enter tests>
```
```

### Break down into end to end tests

There are no breakdown of these tests.

```
```

### And coding style tests

There are no breakdown of these coding tests.

```
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework

## Contributing

No contribution.md file setup yet. No contributions at this time.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Noe Alvarado** - *Initial work* - [CeroDosUno](https://github.com/CeroDosUno)

## License

This project is licensed under the GNU Public License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Thank you to anyone that blogs, teaches coding courses, or contributes funds towards the development of coding skills among minorities.
* This engineer couldn't have gotten far without you guys.
* Thank you to the teams of Node.js, Express.js, Stephen Grider
