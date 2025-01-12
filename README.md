# CoffeeMug Project

This repository contains a simple application for managing products and orders. Below is an overview of how to configure, run, and interact with the API.

## Initial Setup
1.	Copy .env.example to .env

        Fill in the following variables:
        ```dotenv
            MONGO_INITDB_ROOT_USERNAME=<your_username>
            MONGO_INITDB_ROOT_PASSWORD=<your_password>
            MONGO_INITDB_DATABASE=<your_database>
            
            SERVER_HOST=<your_server_host>
            SERVER_PORT=<your_server_port>
        ```
2.	Build and Run via Docker 

        From the project root, run: 
        `docker-compose --env-file .env up`

The application will then be available on the port specified by SERVER_PORT.

## Application Overview

The application provides a REST API for two main resources: products and orders.

### Products 
-	GET /products

        Retrieves all products. \
        Response
        ```json
        [
          {
            "_id": "string",
            "name": "string",
            "description": "string",
            "price": number,
            "stock": number,
            "createdAt": "string",
            "updatedAt": "string"
          },
          ...
        ]
        ```

-	POST /products 

        Creates a new product. \
        Request Body (JSON)
        ```json
        {
          "name": "string",
          "description": "string",
          "price": number,
          "stock": number
        }
        ```
        Response
        ```json
        {
          "_id": "string",
          "name": "string",
          "description": "string",
          "price": number,
          "stock": number,
          "createdAt": "string",
          "updatedAt": "string"
        }
        ```

-	POST /products/:id/restock 

        Increases the stock of the specified product. \
        Request Body (JSON)
        ```json
        { "amount": number }
        ```
        Response
        ```json
        {
          "_id": "string",
          "name": "string",
          "description": "string",
          "price": number,
          "stock": number,
          ...
        }
        ```

-	POST /products/:id/sell 

        Decreases the stock of the specified product. \
        Request Body (JSON)
        ```json
        { "amount": number }
        ```
        Response
        ```json
        {
          "_id": "string",
          "name": "string",
          "description": "string",
          "price": number,
          "stock": number,
          ...
        }
        ```
An error (e.g., 409 status) is returned if the product’s stock is insufficient.

### Orders

-	POST /orders 

        Creates a new order. Each product’s availability is checked and an error is returned if the product does not exist or has insufficient stock. \
        Request Body (JSON)
        ```json
        {
          "customerId": "string",
          "products": [
            { "productId": "string", "quantity": number },
            ...
          ]
        }
        ```
        Response
        ```json
        {
          "_id": "string",
          "customerId": "string",
          "products": [
            { "product": "string", "quantity": number },
            ...
          ],
          "createdAt": "string",
          "updatedAt": "string"
        }
        ```

### Error Handling

If an error occurs (e.g., not found, insufficient stock), the server returns a JSON response with an appropriate HTTP status. For example:
```json
{
  "success": false,
  "message": "Error description"
}
```
Certain errors may also include an errors array for additional details.

Notes 
-	All data is persisted in the configured MongoDB instance. 
-	After modifying .env, ensure you rebuild and restart with docker-compose --env-file .env up. 
-	The base URL defaults to http://localhost:<SERVER_PORT> unless otherwise specified in .env.
