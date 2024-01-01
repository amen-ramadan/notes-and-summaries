import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  let navigate = useNavigate();

  const forSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:9000/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // هذا الخيار لكي نخبر الريويست ان البيانات المرسلة عبارة عن سترينغ ولانه كانت تظهر لدينا مشكلة وهي اننا عندما نضيف منتج كان يضاف فقط ال اليدي بتاعه من غير التايتل والسعر
      body: JSON.stringify({
        title,
        price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/products");
      });
  };
  return (
    <>
      <form onSubmit={forSubmit()}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            placeholder="product title"
            aria-describedby="product-title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="product price"
            aria-describedby="product-price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}
