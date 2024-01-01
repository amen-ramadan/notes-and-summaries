import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState([]);

  // قمنا بعمل وظيفة لجلب البيانات واسندناها لاكثر من يوز ايفيكت
  // من اجل جلب البيانات عند الحذف وعند بداية تحميل الصفحة

  const getAllProducts = () => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const deleteProduct = (product) => {
    // الرسالة التي سوف تظهر لتاكيد الحذف
    Swal.fire({
      title: `are you sure to delete ${product.title}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes Delete it!",
      cancelButtonText: "No, keep it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // اذا اختار المستخدم نعم فسوف ي
        // يتم حذف المنتج
        fetch(`http://localhost:9000/products/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            getAllProducts();
          });
      }
    });
  };

  return (
    <>
      <h1>products page</h1>

      <Link to={"/products/add"} className="btn btn-success mt-3">
        Add New Product
      </Link>

      <table className="table table-striped mt-5 products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description.slice(0, 20)}...</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-info btn-sm"
                  >
                    View
                  </Link>
                  <button className="btn btn-primary btn-sm">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
