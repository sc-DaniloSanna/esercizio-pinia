import axios from 'axios'

export default {
  postCart(data) {
    // console.log(data)

    // function convertToNewFormat(cart, customId) {
    //   const convertedCart = {
    //     id: customId || Math.floor(Math.random() * 1000),
    //     createdAt: new Date().toISOString(),
    //     products: [],
    //     total: 0
    //   }

    //   const productMap = {} // Utilizzato per tenere traccia dei prodotti già aggiunti

    //   cart.forEach((product) => {
    //     const productId = product.id
    //     const price = parseFloat(product.price)
    //     const quantity = 1

    //     if (productMap[productId]) {
    //       // Se il prodotto è già presente nel carrello, aggiorna la quantità
    //       productMap[productId].quantity += quantity
    //     } else {
    //       // Altrimenti, aggiungi il nuovo prodotto al carrello
    //       productMap[productId] = {
    //         productId,
    //         price,
    //         quantity
    //       }
    //       convertedCart.products.push(productMap[productId])
    //     }

    //     convertedCart.total += price * quantity
    //   })

    //   return convertedCart
    // }

    // // Eseguire la conversione
    // const convertedCart = convertToNewFormat(data)
    // console.log(convertedCart)

    return axios.post(import.meta.env.VITE_DB_URL + '/orders', data)
  }
}
