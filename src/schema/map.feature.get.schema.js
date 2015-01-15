cmapi.channel["map.feature.get"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.get",
    "description": "Request the full feature data, what is provided in the map.feature.plot payload, for one or more features on a given overlay.  To get a simple list of featureIds and names on an overlay use the map.feature.query channel",
    "properties": {
      "features" : {
        "description" : "An array of objects with a featureId and an overlayId representing the feature to be retrived",
        "type" : "array",
            "properties":{
                "overlayId":{
                    "type": "string",
                    "description": "The overlayId that currently contains the feature."
                },
                "featureId":{
                    "type": "string",
                    "description": "The id of the feature you wish to retrieve."
                }
            },
        "additionalItems": true,
        "required": ["features, messagId"]
      },
      "messageId": {
        "description": "A globally unique ID that identifies this particular message. If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of this message request.",
        "type": "string"
      }
    },
    "required": ["features, messagId"]
  },
  "notes": [],
  "changeLog": [{
    "version": "1.3.0",
    "change": "This channel is new"
  }]

};