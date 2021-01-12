# Search Page Using Reactjs

Search Page made using react.

## Features

* Search for an item in MongoDB database
* Filter results and search filters

## Technology Used

* Reactjs 
* Redux
* React Hooks
* Node.js
* Express.js
* MongoDB

## Installation

* Make sure you have <span style="font-size:larger;">[nodejs](https://nodejs.org/en/download/) </span> installed in your system
* Clone the repository and cd into `search-page-reactjs`
    ``` bash 
    git clone https://github.com/rahulkaliyath/search-page-reactjs.git
    cd search-page-reactjs
    ``` 
* Create default.json inside config and specify your MONGODB_URI
    ```json
    {
       "MONGO_URI":"mongodb+srv:/xxxxxxxxx"
    }
    ```
    **Note: Add csvjson.json to MongoDB and make text index for Title.**
* Install all the dependencies
    ``` js
    npm install && cd client && npm install
    ```

* Run the following command in the root directory to concurrently run client server and backend server
  ``` js
  npm run dev
  ```
