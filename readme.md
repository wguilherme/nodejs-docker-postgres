## Commands


```
// command to populate basic table
CREATE TABLE products (
    productId SERIAL PRIMARY KEY,
    productName VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    price NUMERIC(5,2)
);

// admin url
pgAdmin url: http://localhost:5050/browser/

// inspect docker container to get ipAddress
docker inpsect <container-id>

```

