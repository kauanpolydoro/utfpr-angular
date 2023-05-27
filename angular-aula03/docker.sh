docker run -d \
    -p 27017:27017 \
    --name angular-mongo \
    -e MONGODB_INITDB_ROOT_USERNAME=user \
    -e MONGODB_INITDB_ROOT_PASSWORD=password \
    mongo:latest
