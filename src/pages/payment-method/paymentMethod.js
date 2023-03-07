import { AddPaymentMethodFrm } from "../../components/paymentform/PaymentForm";

import { PmTable } from "../../components/paymentform/PaymentTable";

import { AdminLayout } from "../layout/AdminLayout";

const PaymentMethod = () => {
  return (
    <AdminLayout>
      <div>
        <AddPaymentMethodFrm />
      </div>
      <div>
        <PmTable />
      </div>
    </AdminLayout>
  );
};
export default PaymentMethod;
