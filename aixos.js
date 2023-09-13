// axios.get('https://httpbin.org/get')
// .then(functi)

axios.get("https://dummyjson.com/products/1").then((res) => {
  //   console.log(res.data);
  document.querySelector("body").innerHTML = `<li>${res.data.id}</li>
  <li>${res.data.title}</li>
  <li>${res.data.description}</li>
  <li>${res.data.price}</li>`;
});

// {
//     "id": 1,
//     "title": "iPhone 9",
//     "description": "An apple mobile which is nothing like apple",
//     "price": 549,
//     "discountPercentage": 12.96,
//     "rating": 4.69,
//     "stock": 94,
//     "brand": "Apple",
//     "category": "smartphones",
//     "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//     "images": [
//       "https://i.dummyjson.com/data/products/1/1.jpg",
//       "https://i.dummyjson.com/data/products/1/2.jpg",
//       "https://i.dummyjson.com/data/products/1/3.jpg",
//       "https://i.dummyjson.com/data/products/1/4.jpg",
//       "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//     ]
//   }
