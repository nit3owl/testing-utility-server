# [testing-utility-server](https://github.com/nit3owl/testing-utility-server)

## Components
The testing-utility-server is a simple application which combines:

* (Node.js)  A web server with a RESTful API
* (React)    A basic UI
* (MongoDB)  A NoSQL database to support CRUD operations via the API

## Deployment

The various project components, excluding the database, can be run ad-hoc via their standard start and/or
deployment paradigms (e.g. "npm start"). However, the project also contains a Dockerfile which can be used
to build a Docker image which packages and runs the components automatically.

### Using Docker

Assuming that Docker is installed, build the image with the following command:

```sh
 docker image build -t testing-utility-server testing-utility-server/
```

The -t arugment can be altered to specify whatever name you desire. To run the image:
```sh
docker run -it -p 3000:3000 testing-utility-server
```

Because the server (which also hosts the front-end) runs on Node via port 3000, it is important to specify
the -p flag to map the interal Docker image port to the port of the machine where you are running the image.

## Questions, Comments, and Contributions

Feel free to open an issue for anything you might see that can be improved!
