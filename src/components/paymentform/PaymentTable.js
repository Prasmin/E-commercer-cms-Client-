import Table from "react-bootstrap/Table";

const PaymentTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Payment Name</th>
          <th>Payment Description</th>
        </tr>
      </thead>
    </Table>
  );
};

export default PaymentTable;
