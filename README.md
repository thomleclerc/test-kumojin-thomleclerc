# test-kumojin-thomleclerc

👨‍💻 Test technique suivant l'entrevue chez Kumojin. 👩‍💻

## Notes

- The following code was writen in english, in my opinion, it's easier to understand, to maintain and to read. Plus, I don't know why, but I find it easier to find variable names in english 🙄
- The architecture of the entire project is overcomplicated for the size of the project, but I wanted to showcase how I would do things if it were a bigger project

## How to start the project with DOCKER

### Entire project

Run `command here`

### Frontend container

1. At the root of the project, run `cd frontend`

2.Build the container by running this command `docker build -t frontend-kumojin-thomas:dev .`

3. To start the container, run `docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true frontend-kumojin-thomas:dev`

4. Go to localhost:3001

### Backend container

1. At the root of the project, run `cd frontend`

2.Build the container by running this command `docker build -t backend-kumojin-thomas:dev .`

3. To start the container, run `docker run -p 3010:3009 -d backend-kumojin-thomas:dev`

4. Using postman, you can make a request at localhost:\*\*\*\*

## How to start frontend & backend manually

### Frontend

1. At the root of the project, run `cd frontend`
2. Run `yarn` or `npm install`
3. Run `yarn start` or `npm start`

### Backend

1. At the root of the project, run `cd backend`
2. Run `yarn` or `npm install`
3. Run `yarn start` or `npm start`

## How to run the tests

### Frontend

1. At the root of the project, run `cd frontend`
2. Run `yarn test` or `npm test`

### Backend

1. At the root of the project, run `cd backend`
2. Run `yarn test` or `npm test`
