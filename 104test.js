//1st 迴圈和條件語句：編寫一個程式，列印1到100的數字，但是對於3的倍數輸出“Fizz”，對於5的倍數輸出“Buzz”，對於同時是3和5的倍數輸出“FizzBuzz”。
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }
//2nd 使用JavaScript Promise將以下的非同步操作改為可控的順序執行。
// function fetchData() {
  
//     const result1 = fetch('url1');
  
//     const data1 = result1.json();
  
//     const result2 = fetch('url2');
  
//     const data2 = result2.json();
  
//     return [data1, data2];
//   }

// async function fetchData() {
//     try{
//     const result1 = await fetch('url1');
  
//     const data1 = await result1.json();
  
//     const result2 = await  fetch('url2');
  
//     const data2 = await result2.json();
  
//     return [data1, data2];
//     }catch(error){
//         console.log(error)
//     }
// }

//3rd
//5.創建一個包含商品清單的JavaScript物件，每個商品有名稱和價格屬性。然後寫一個函式，接受一個商品清單物件作為參數，並計算所有商品的總價格。
const products = [
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 },
    { name: 'Product 3', price: 300 }
];
function addTotal(products){
    let totalPrice=0
    products.forEach((product)=>{
        totalPrice+=product.price
    })
    return totalPrice
}
addTotal(products)