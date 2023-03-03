import PaymentForm from "../../components/paymentform/PaymentForm";

import PaymentTable from "../../components/paymentform/PaymentTable";

import { AdminLayout } from "../layout/AdminLayout";

const PaymentMethod = () => {
  return (
    <AdminLayout>
      <div>
        <PaymentForm />
      </div>
      <div>
        <PaymentTable />
      </div>
    </AdminLayout>
  );
};
export default PaymentMethod;
