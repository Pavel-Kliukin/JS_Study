# Cars API

## **getWithLicence(licence)**
function returns the cars that match the given licence. The licence is unique.

- if the car is found, returns car object
- if no car with given licence is found, returns null

## **getWithModel(model)**
- returns all car objects with given model in array
- if no car matches the given model, an emty array is returned.

## **getAllModels()**
returns the names of all models in storage as an array of string. The name is added to the arrays only once.

- returns array of models
- returns an empty array, if no models found

## **getCar(key, value)**
get all car objects that matches the given key-value pair.
- returns car objects in array
- if there is no matches, returns an empty array