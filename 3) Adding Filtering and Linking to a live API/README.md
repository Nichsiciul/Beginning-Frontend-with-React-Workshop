# 3) Adding Filtering and Linking to a live API

Let's remove our rawData mock from our list and link it to an API. This breaks the app because we no longer have the data variable. Let's fix it by changing our state to 

```javascript
    state = {
        query: "",
        contacts: [],
    }
```

Now we will start from an empty array and populate it with what comes from our server.

## Starting our mock server

Navigate to Resources folder at the root of this repository, download the mockData.json file somewhere on your computer and run:

```bash
    json-server -p 3001 .\mockData.json
```

Navigating to http://localhost:3001/results or running a GET from postman should give us our list of results
using *http://localhost:3001/results?q=MyQuery* provides a filtered result


## Axios

Axios is a promise based library for AJAX requests. React being just a view library it does it built in (like Angular)
Let's install axios

```bash
npm install axios --save
```

### Using Axios

Create a Get function either in a separate helper file or above our class component. This function has the role to take a query parameter and return a promise containing our contacts data.

```javascript
function getContacts(query = "") {
    // Use axios.get to trigger a get request
    // parse response to get the data and return it
    // handle errors
}
```
Be sure to test the function before moving forward.

## Populating with data from API

### componentDidMount()

componentDidMount is a lifecycle function and is invoked immediately after a component is mounted which is the ideal place to make API calls.

In our ContactList class, let's add the lifecycle function

```javascript
componentDidMount() {
    getContacts()
        .then(data => {
            // we should be recieving the array of data here
            // we should update the state with our new data
        })
}
```

## Filtering the data

Let's add filtering in the mix. We would like to filter the results when pressing Enter. To do that we need to modify the SearchComponent
It should accept a new property onSubmit which is a function passed down from the stateful component.

Next we need to handle just the Enter key using a new handleEnter function like so:
```javascript
onKeyPress={event => handleEnter(event, onSubmit)}
```
Our method takes in the event. checks if enter is pressed and calls a callback.

```javascript
const handleEnter = (event, callback) => {
    // check for enter key
    // invoke the callback if true
}
```

Moving back to our Contact List component we need to handle the Enter press and make a call to the API 
Create a handleSubmit function that should update the value

```javascript
handleSubmit = (query) => {
    // take a query parameter
    // make a call to the API
    // update the state with the data
}
```

*Remember to also use the new prop in the SearchBar in our render method and in our proptypes*


## Testing

We should now be able to Search the list of 500 mock elements (the q=) param in the query searches every string in the list of elements. Whenever we press Enter.
