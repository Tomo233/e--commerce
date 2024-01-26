import Rating from "./Rating";

/* eslint-disable react/prop-types */
function FlashSalesProduct({ item }) {
  const { title, price, image, rating } = item;
  return (
    <li className="max-w-60">
      <img className="w-36 h-36" src={image} alt={title} />
      <h3 className="font-medium">{title}</h3>
      <p className="text-red-700 font-medium">${price}</p>
      <Rating value={rating.toFixed()} />
    </li>
  );
}

export default FlashSalesProduct;