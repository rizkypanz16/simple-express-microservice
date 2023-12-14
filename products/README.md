CREATE DATABASE productservicedb;
CREATE USER 'productservice'@'localhost' IDENTIFIED BY 'ijinmasuk';
CREATE USER 'productservice'@'%' IDENTIFIED BY 'ijinmasuk';
GRANT ALL PRIVILEGES ON productservicedb.* TO 'productservice'@'%' IDENTIFIED BY 'ijinmasuk';
GRANT ALL PRIVILEGES ON productservicedb.* TO 'productservice'@'localhost' IDENTIFIED BY 'ijinmasuk';
FLUSH PRIVILEGES;

npm run migration:run
npm run seed:all