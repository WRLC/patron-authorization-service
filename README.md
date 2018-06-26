# Patron Authorization Service
This is a gloss on the Alma User API. It returns limited information from user records, and can be configured with API keys from multiple institutions.

## Setup
* Clone this repository
* Copy the config.default.js file to config.js
* Comment out or delete the config.empty variable. Add your institution names and API keys to the config.api_keys dictionary in config.js. Modify the other variables as desired
* Edit the docker-compose.yml file if you want to change the default host:container port mapping
* Run the container `docker-compose up -d`

## Usage
Endpoint: `/lookup/patrons`
Parameters:
 * `uid` is the patron's identifer. This can be anythign from the identifer section of the patron records (id, primary id or university id)
* `inst` is the institution code to look the patron up in. Must match a value configured in the config.api_keys variable from config.js
Example Request:
```
GET /lookup/patrons?uid=12345&inst=mylib
```
Example Response:
```
{
  "primary_id": "12345",
  "full_name": "Sarah Sarahson",
  "user_group": {
    "value": "patgroup1",
    "desc": "Description of patgroup1"
  },
  "status": {
    "value": "ACTIVE",
    "desc": "Description of value ACTIVE"
  }
}
```

