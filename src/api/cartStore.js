import axios from "axios";


export default {
postCart(data) {
  console.log(data);

  function convertToNewFormat(cart) {
    const convertedCart = {
      id: Math.floor(Math.random() * 1000), // da cambiare
      createdAt: new Date().toISOString(), 
      products: [],
      total: 0
    };
  
    cart.forEach(product => {
      const productId = product.id;
      const price = parseFloat(product.price);
      const quantity = 1; // Puoi impostare la quantità desiderata
  
      convertedCart.products.push({
        productId,
        price,
        quantity
      });
  
      convertedCart.total += price * quantity;
    });
  
    return convertedCart;
  }
  
  // Eseguire la conversione
  const convertedCart = convertToNewFormat(data);
  console.log(convertedCart);

    return axios.post(
      import.meta.env.VITE_DB_URL + "/orders",
      convertedCart
    );
  }
}