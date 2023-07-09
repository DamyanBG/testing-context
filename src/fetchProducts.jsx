const products = [
    {
        id: 1,
        name: "iPhone",
        price: 999,
        image: "https://s13emagst.akamaized.net/products/48592/48591225/images/res_88dbb52d3570c8fd119fe82ad975b680.jpg"
    },
    {
        id: 2,
        name: "Keyboard",
        price: 199,
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6516/6516290_sd.jpg"
    },
]

export const fetchProducts = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const fetchedProducts = products;
            resolve(fetchedProducts);
        }, 500);
    });
};