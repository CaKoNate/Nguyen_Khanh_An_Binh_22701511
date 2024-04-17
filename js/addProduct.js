
function addToCart(productName, price) {
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    
    cart.push({ name: productName, price: price });
    
    
    localStorage.setItem('cart', JSON.stringify(cart));
}

$(document).ready(function() {
   
    $('.add-to-cart').click(function() {
        
        let productName = $(this).data('product');
        let price = parseFloat($(this).data('price'));
       
        addToCart(productName, price);
        
       
        alert('Sản phẩm đã được thêm vào giỏ hàng!');
        console.log('Giỏ hàng mới:', JSON.parse(localStorage.getItem('cart')));
    });

    
});
