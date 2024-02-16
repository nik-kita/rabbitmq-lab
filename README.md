# About:

**This is application that will provide service to help connect AI support
exactly for your inputed resume. So you will reuse this api anywhere you want
and it will chatting according to your cv.**

## Technical structure of the project:

- **main-site** - the place where client can register, upload or modify his cv,
  generate or remove api-tokens connection api url
- **main-api** - backend for main-site
- **connector-proxy** - proxy-backend for synchronization between ui or client
  systems and rabbitmq
- **engine** - backend system that will directly work with llm etc.
- **client-api** - backend that will support registered and configured clients
- **example-ui** - default first client that is use this project

## Example flow:

- registration
- upload cv
- take api token
- use client-api somewhere for own purpose
