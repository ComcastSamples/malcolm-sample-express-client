malcolm-sample-express-client
=============================

## Summary

This is a sample malcolm client app that uses Express.

## Running the sample app

To run the app:

     $ npm install
     $ npm start

Then try the following HTTP requests using Postman, curl, etc.:

```
// Invoke any endpoint in the API
GET localhost:8000/api/v1/addallnumbers_get?list_of_numbers=[1,2,3]
```

```
// Get a static fake data response (for fake data key STATIC1)
GET http://localhost:8000/api/v1/version?_malcolmFake=STATIC1
```

```
// Get a different static fake data response (for fake data key STATIC2 this time)
GET http://localhost:8000/api/v1/version?_malcolmFake=STATIC2
```

```
// Get yet another fake data response, but this time one that's dynamically uploaded/cleared
// Try this before doing the POST below, then again after doing the DELETE below
GET http://localhost:8000/api/v1/version?_malcolmFake=VERSION1
```

```
// Add a fake data response for GETs to /version (for fake data key VERSION1)
POST http://localhost:8000/fakeDataResponse

Body: x-www-form-urlencoded
relativeUri: /version
method:      GET
fakeDataKey: VERSION1
response:    {"version":"juan"}
```

```
// Clear the fake data response for GETs to /version (for fake data key VERSION1)
DELETE http://localhost:8000/fakeDataResponse
Body: x-www-form-urlencoded
relativeUri: /version
method:      GET
fakeDataKey: VERSION1
```
