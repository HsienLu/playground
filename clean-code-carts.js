// 提示：修改為有意義且可閱讀的變數名稱
let carts = [{
	id: 0,
	itemProduct: 'Orange',
	price: 2,
	quantity: 1
}];

// 提示：修改為有意義且可閱讀的變數名稱
// 提示：參數少於 2 個較佳
function add({itemProduct, price, quantity}) {
		const id = Date.now();
    carts.push({ id, itemProduct, price, quantity });
}
add({itemProduct: 'Banana', price: 1, quantity: 1});
// console.log(carts);

// 提示：修改為有意義且可閱讀的變數名稱
// 提示：參數少於 2 個較佳
// 提示：進階寫法可以用 findIndex 語法（非必做）
function edit({id, newItemProduct, newPrice, newQuantity}) { 
    const editProductIndex=carts.findIndex(item=>item.id===id);

    if (editProductIndex !== -1) {
      carts[editProductIndex].itemProduct = newItemProduct;
      carts[editProductIndex].price = newPrice;
      carts[editProductIndex].quantity = newQuantity;    
    }
  }
edit({id:0,newItemProduct:'Strawberry',newPrice:3,newQuantity:4});



// 提示：修改為有意義且可閱讀的變數名稱
// 提示：條件判斷邏輯複雜，可再整理得更清楚
// 提示：函式一次只做一件事
// 提示：進階寫法可以用 findIndex 語法（非必做）

function remove(removeId) {
   
    function findRemoveIndex(removeId){
        return carts.findIndex(item=>item.id===removeId);
    }
    const removeIndex=findRemoveIndex(removeId);
    function removeProduct(removeIndex){
        carts.splice(removeIndex,1)
    }
    removeProduct(removeIndex);

}


// 提示：修改為有意義且可閱讀的變數名稱
// 提示：進階寫法可以用 reduce 語法（非必做）
function calcTotalPrice() {
    return carts.reduce((totalPrice,currentItem)=>totalPrice+currentItem.price*currentItem.quantity,0);
}

// 提示：修改為有意義且可閱讀的變數名稱
let isLogin = true;
// 提示：條件判斷邏輯複雜（太多的 if/else），可再整理得更清楚
function checkout() {
    let maxBuyProductNumber = 5;
    isLogin ?? "請先登入";
    if(carts.length === 0) return'您的購物車是空的';        
    // 提示：使用可搜尋的名稱
    if (carts.length > maxBuyProductNumber) {
        return '您超出了允許結帳的最大商品數量';
    } else {      
        return '付款成功';
    }
}
