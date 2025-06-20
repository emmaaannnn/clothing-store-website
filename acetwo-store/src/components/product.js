import React from "react";

const Product = ({ product, onSelect }) => {
  return (
    <div className="product-card" onClick={() => onSelect(product)}>
      <div className="image-wrapper">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image front"
        />
        <img
          src={product.imageUrl2}
          alt={`${product.name} back`}
          className="product-image back"
        />
      </div>
      <h3 className="product-title">{product.name}</h3>

      {product.outOfStock ? (
        <p className="product-price sold-out">SOLD OUT</p>
      ) : product.sale ? (
        <div className="price-container">
          <p className="product-price">
            <span className="original-price">${product.price}</span>{' '}
            <span className="sale-price">${product.salePrice}</span>
          </p>
            {/* <span className="sale-title">SALE</span> */}
        </div>
      ) : (
        <p className="product-price">${product.price}</p>
      )}
    </div>
  );
};

export default Product;