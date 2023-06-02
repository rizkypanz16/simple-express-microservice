import { React } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min";
// import component
import Topnavbar from "../components/topnavbar/Topnavbar";
import Homebreadcrumb from "../components/home-breadcrumb/Homebreadcrumb";
import Customertable from "../components/customers-table/Customertable";

function Customers() {
  return (
    <div>
      <Topnavbar />
      <Homebreadcrumb />
      <Customertable />
    </div>
  );
}

export default Customers;
