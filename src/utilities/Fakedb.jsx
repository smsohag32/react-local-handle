const addToDb = (id) => {
  let shoppingCart;

  //   get the shoppingCart
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }
  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    console.log(newQuantity);
    shoppingCart[id] = newQuantity;
    localStorage.setItem(id, newQuantity);
  } else {
    localStorage.setItem(id, 1);
    console.log("new item");
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
export { addToDb };