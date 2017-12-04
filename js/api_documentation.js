/*
	----------------------------------------
	Versão da documentação
*/
var vDocumentationVersion = "1.0"
/* ----------------------------------------- */

/*
	----------------------------------------
	Define URLs utilizadas pela documentação
*/
var vURL = window.location.href;
var vHost = window.location.hostname;
var vPort = window.location.port;
if(vPort) vPort = ":" + vPort;
else vPort = "";
var vExternalDocument_ResponseCodesDetail = vURL + "doc";
/* ----------------------------------------- */


var api_documentation_json =
{
  "swagger": "2.0",
  "info": {
    "description": "This is an example of a web chat, with simple actions as user registration, sending messages, deleting messages and so on.",
    "version": vDocumentationVersion,
    "title": "Web chat"
  },
  "host": "www.angelito.com.br",
  "basePath": "/webchat",
  "tags": [
    {
      "name": "webchat",
      "description": "A simple web chat for study purpose",
      "externalDocs": {
        "description": "Find out more",
        "url": "http://www.angelito.com.br"
      }
    },
    {
      "name": "user",
      "description": "User related actions"
    },
    {
      "name": "message",
      "description": "Message related actions"
    }
  ],
  "schemes": [
    "http"
  ],
  "paths": {
    "/user": {
      "post": {
        "tags": [
          "user"
        ],
        "summary": "Validate if a user is registered, if not, register the user",
        "description": "This function validates if a user is registered and ALSO performs the registration of new users, in case the nickname passed does not exist yet.",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "query",
            "name": "nickname",
            "description": "User name that needs to be validate",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "405": {
            "description": "Invalid input"
          }
        }
      }
    },
    "/users": {
      "get": {
        "tags": [
          "user"
        ],
        "summary": "Gets all the connected users nicknames",
        "description": "",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "A list of nicknames",
            "schema": {
              "$ref": "#/definitions/ArrayOfUsers"
            }
          }
        }
      }
    },
    "/reset_users": {
      "get": {
        "tags": [
          "user"
        ],
        "summary": "Delete all registered users",
        "description": "",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "All users are successfuly deleted"
          }
        }
      }
    },
    "/send": {
      "post": {
        "tags": [
          "message"
        ],
        "summary": "Send a message to the chat server",
        "description": "The user should be logged in to performe this action",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "query",
            "name": "nickname",
            "description": "User name responsible for the message",
            "required": true,
            "type": "string"
          },
          {
            "in": "query",
            "name": "textmsg",
            "description": "Message to be sent",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/messages": {
      "get": {
        "tags": [
          "message"
        ],
        "summary": "Get all the messages sent to the server",
        "description": "The user should be logged in to performe this action",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "query",
            "name": "nickname",
            "description": "User name requesting the message list",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/ArrayOfMessages"
            }
          }
        }
      }
    },
    "/reset_messages": {
      "get": {
        "tags": [
          "message"
        ],
        "summary": "Delete all messages sent to the server",
        "description": "",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "All messages are successfuly deleted"
          }
        }
      }
    }
  },
  "definitions": {
    "ArrayOfUsers": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "example": [
        "chatbot",
        "user1",
        "user2"
      ]
    },
    "ArrayOfMessages": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/MessageObject"
      },
      "example": [
        {
          "user": "chatbot",
          "datetime": "21/11/2017 12:11",
          "textmsg": "Olá! Bem vindo ao CHAT!"
        },
        {
          "user": "chatbot",
          "datetime": "21/11/2017 12:11",
          "textmsg": "<b>Up</b> entrou na conversa."
        }
      ]
    },
    "MessageObject": {
      "type": "object",
      "properties": {
        "user": {
          "type": "string"
        },
        "datetime": {
          "type": "string"
        },
        "textmsg": {
          "type": "string"
        }
      }
    }
  }
}