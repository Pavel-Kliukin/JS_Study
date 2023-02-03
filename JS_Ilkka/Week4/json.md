# JSON (JavaScript Obkect Notation)

## Documentation

json.org

## File extention
.json

## Values
- strings
- numbers
- arrays
- objects
- true
- false
- null

## Examples

### String
Must be doublequoted
Emty string is ""
```json
"this is a string"
"Here is a \"quote\" in the 'middle' of the string"
"hearts symbol is \u2665"
```

outputs
```
this is a string
Here is a "quote" in the 'middle' of the string
hearts symbol is ♥
```

### Number
- no leading +
- only one leading 0
- decimal separator is .

These are allowed:
```json
0, 0.5, 345.678, 1200, -1, -0.57, -23.45, 1.5E10, 2E-2, 2E+2, 1e3
```

These are not allowed
```json
00.34, +20, +0.5, 00023
```

## Array
Array begins with [ and ends with . Values in the array are separated by a comma , .

```json
[1,2,3,4,5],
["textA", "textB"]
[{"firstname": "Matt", "age":10}, {"firstname": "Vera", "age":15}]
[true, false, true]
[[1,2,3],[4,5,6]]
```

## Object
```json
{
    "firstname":"Matt",
    "lastname":"River",
    "age":20
}
````
```json
{
    "firstname":"Matt",
    "children":[
        {"firstname":"Vera", "age":6},
        {"firstname":"John", "age":3}
    ]
}
````
```json
{
    "key1":"value1",
    "key2":"value2",
    "key3":[1,2,3],
    "key4":{
        "a":1,
        "b":"text",
        "c":[7,8,9],
        "d":{
            "x":true,
            "y":false,
            "z":null
        }
    }
}
```
```json
[
    {
        "firstname":"Matt",
        "children":[
            {"firstname":"Vera", "age":6},
            {"firstname":"John", "age":3}
        ]
    },
    {
        "firstname":"Mary",
        "children":[
            {"firstname":"Jesse", "age":8}
        ]
    }
]
````
