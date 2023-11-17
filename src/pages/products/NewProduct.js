import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Container } from "react-bootstrap";
import { fetchCats } from "../category/categoryAction";
import { CustomeInputeField } from "../../components/custom-inpute-field/CustomeInputeField";
import AdminLayout from "../dashboard/Adminlayout";
import { postProductAction } from "./productAction";
import { Link } from "react-router-dom";
import { CustomeSelect } from "../../components/custome-select/CustomeSelect";

const initialState = {
  status: "inactive",
};

export const NewProduct = () => {
  const [formdt, setFormdt] = useState(initialState);
  const dispatch = useDispatch();
  const [newImages, setNewImages] = useState([]);

  const { cats } = useSelector((state) => state.category);

  useEffect(() => {
    !cats.length && dispatch(fetchCats());
  }, [cats.length, dispatch]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormdt({
      ...formdt,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in formdt) {
      formData.append(key, formdt[key]);
    }
    newImages.length &&
      [...newImages].map((item) => formData.append("images", item));
    dispatch(postProductAction(formData));
  };

  const handlOnImageUplodad = (e) => {
    const { files } = e.target;

    setNewImages(files);
  };

  const inputes = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Jordan 1 Low OG",
      required: true,
    },
    {
      name: "sku",
      label: "Sku",
      type: "text",
      placeholder: "JOR-1-LOW",
      required: true,
    },
    {
      name: "qty",
      label: "Qty",
      type: "number",
      placeholder: "Qlt No",
      required: true,
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "$100",
      required: true,
    },
    {
      name: "salesPrice",
      label: "Sales Price",
      type: "number",
      placeholder: "$800",
    },
    {
      name: "salesStartDate",
      label: "Sales Start Date",
      type: "date",
    },
    {
      name: "salesEndDate",
      label: "Sales End Date",
      type: "date",
    },
    {
      name: "description",
      label: "Description",
      as: "textarea",
      rows: 5,
      placeholder: "write detail information abou the product",
      required: true,
    },
    {
      name: "images",
      label: "Images",
      type: "file",
      multiple: true,
      required: true,
      accept: "image/*",
    },
  ];

  return (
    <AdminLayout>
      <Container className="py-2 mt-2 add-product-page">
        <div className="py-3 fs-2"> New Products</div>
        <Link to="/products">
          {""}
          <Button variant="secondary">&lt; Back</Button>
        </Link>
        <hr />
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Check name="status" type="switch" label="Status"></Form.Check>
          </Form.Group>

          <CustomeSelect
            label="Category"
            args={cats}
            func={handleOnChange}
            name="parentCat"
          />

          {inputes.map((item, i) => (
            <CustomeInputeField
              key={i}
              {...item}
              onChange={
                item.name === "images" ? handlOnImageUplodad : handleOnChange
              }
            />
          ))}
          <div className="d-grid">
            <Button type="submit" variant="danger">
              Add Product
            </Button>
          </div>
        </Form>
      </Container>
    </AdminLayout>
  );
};

// export const NewProduct = () => {
//   const dispatch = useDispatch();
//   const [formDt, setFormDt] = useState({});
//   const [newImages, setNewImages] = useState([]);

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;

//     setFormDt({
//       ...formDt,
//       [name]: value,
//     });
//   };

//   const handleOnSubmit = (e) => {
//     e.preventDefault();

//     const fromData = new FormData();

//     console.log(fromData);
//     console.log(FormData);

//     for (let key in formDt) {
//       fromData.append(key, formDt[key]);
//     }

//     newImages.length &&
//       [...newImages].map((item) => fromData.append("images", item));

//     dispatch(postProductAction(fromData));

//     console.log(formDt);
//   };

//   const handlOnImageUplodad = (e) => {
//     const { files } = e.target;

//     setNewImages(files);
//   };

//   const inputes = [
//     {
//       name: "name",
//       label: "Name",
//       type: "text",
//       placeholder: "Samsung TV.",
//       required: true,
//     },
//     {
//       name: "sku",
//       label: "Sku",
//       type: "text",
//       placeholder: "SAM-TV-8",
//       required: true,
//     },
//     {
//       name: "qty",
//       label: "Qty",
//       type: "number",
//       placeholder: "50",
//       required: true,
//     },
//     {
//       name: "price",
//       label: "Price",
//       type: "number",
//       placeholder: "1000",
//       required: true,
//     },
//     {
//       name: "salesPrice",
//       label: "Sales Price",
//       type: "number",
//       placeholder: "800",
//     },
//     {
//       name: "salesStartDate",
//       label: "Sales Start Date",
//       type: "date",
//     },
//     {
//       name: "salesEndDate",
//       label: "Sales End Date",
//       type: "date",
//     },
//     {
//       name: "description",
//       label: "Description",
//       as: "textarea",
//       rows: 10,
//       placeholder: "write detail information abou the product",
//       required: true,
//     },
//     {
//       name: "images",
//       label: "Images",
//       type: "file",
//       multiple: true,
//       required: true,
//     },
//   ];
//   return (
//     <AdminLayout>
//       <div className="mb-3">
//         <div className="py-3 fs-2">New Product</div>

//         <Link to="/products">
//           {" "}
//           <Button variant="secondary"> &lt; Back</Button>
//         </Link>
//         <hr />

//         <Form onSubmit={handleOnSubmit}>
//           <Form.Group className="mb-3">
//             <Form.Check required name="status" type="switch" label="Status" />
//           </Form.Group>

//           {inputes.map((item, i) => (
//             <CustomeInputeField
//               key={i}
//               {...item}
//               onChange={
//                 item.name === "images" ? handlOnImageUplodad : handleOnChange
//               }
//             />
//           ))}

//           <div className="d-grid">
//             <Button type="submit" variant="success">
//               Add Product
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </AdminLayout>
//   );
// };
