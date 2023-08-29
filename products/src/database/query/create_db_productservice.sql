use mysql;
create database IF NOT EXISTS productservicedb;
create user 'productservice'@'localhost' identified by 'ijinmasuk';
create user 'productservice'@'%' identified by 'ijinmasuk';
grant all privileges on productservicedb.* to 'productservice'@'localhost';
grant all privileges on productservicedb.* to 'productservice'@'%';
