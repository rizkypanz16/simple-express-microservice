import { React, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// react-icons
import { CiCirclePlus, CiRedo } from "react-icons/ci";
import DataTable from "react-data-table-component";
import axios from "axios";

const Customertable = ({ users }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // DataTable columns
  const columns = [
    {
      name: "customerId",
      selector: (data) => data.customerId,
      sortable: true,
    },
    {
      name: "customerName",
      selector: (data) => data.customerName,
      sortable: true,
    },
    {
      name: "customerEmail",
      selector: (data) => data.customerEmail,
      sortable: true,
    },
  ];

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  // fetch data from customers service api
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://192.168.8.155:8001/api/customer"
      );
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      alert("500 Internal Server Error from Customers Service ");
      setLoading(false);
    }
  };
  const addCustomer = "   Add Customer";
  const refreshCustomer = "   Refresh Data";
  return (
    <Container className="mt-4">
      {/* add & refresh button */}
      <Row>
        <Col>
          <div className="d-flex justify-content-end">
            <Button size="sm" variant="outline-primary">
              <CiCirclePlus size={20} />
              {addCustomer}
            </Button>
            <Button
              size="sm"
              variant="outline-secondary"
              onClick={fetchData}
              style={{ marginLeft: "15px" }}
            >
              <CiRedo size={20} />
              {refreshCustomer}
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <DataTable
                title="Customers Data"
                columns={columns}
                data={data}
                pagination={true}
                paginationServer={true}
                // paginationTotalRows={totalRows}
                paginationPerPage={10}
                onChangePage={(page) => setCurrentPage(page)}
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Customertable;
