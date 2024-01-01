import { Link } from "react-router-dom";

export default function Product(props) {
  const { product, showButton } = props;
  return (
    <>
      <div class="card">
        <img src={product.image} class="card-img-top" alt={product.title} />
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <p class="card-text">{product.description}</p>
          <p>price : {product.price}</p>
          {showButton && (
            <Link to={`/product/${product.id}`} class="btn btn-primary">
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
