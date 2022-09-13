const ProductDetail = ({ selectedItem, addToCart }) => {
  return (
    <div>
      <h2>
        {selectedItem.company} - {selectedItem.name}
      </h2>
      <h3>{selectedItem.flavor}</h3>
      <img src={selectedItem.imageSrc} alt={selectedItem.name}></img>
      <h4>{selectedItem.weight} lbs.</h4>
      <h4>${selectedItem.price}</h4>
      <p>{selectedItem.description}</p>
      <button type="button" onClick={() => addToCart(selectedItem)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
