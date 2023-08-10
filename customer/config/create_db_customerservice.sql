create database customerservicedb;

create user 'customerservice' @'localhost' identified by 'ijinmasuk';

create user 'customerservice' @'%' identified by 'ijinmasuk';

grant all privileges on customerservicedb.* to 'customerservice' @'localhost';

grant all privileges on customerservicedb.* to 'customerservice' @'%';

flush privileges;