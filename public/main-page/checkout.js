let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));

const checkoutItem = document.querySelector('.checkout-item');
const checkoutPrice = document.querySelector('.checkout-total-price');

const countTheSumPrice = function () { 
	let sum = 0;
	productsInCart.forEach(item => {
		sum += item.price;
	});
	return sum;
}

const updateCheckout = function () {
	if (productsInCart.length > 0) {	
        let result = productsInCart.map(product => {
			return `
				<div class="checkout-product">
					<img src="${product.image}">
					<div class="checkout-product-name">
						<p>${product.name}</p>
                    </div>
                    <div class="checkout-product-price">
                        <p>X${product.count}</p>
						<p>CNY${product.price}</p>
						
					</div>
				</div>`
		});
		checkoutItem.innerHTML = result.join('');
		if (countTheSumPrice() > 500){
			var price = 0.7 * countTheSumPrice();
			checkoutPrice.innerHTML = 'Total: CNY ' + parseInt(price) + 'reward:-30%';
		}
		else if (countTheSumPrice() > 300){
			var price = 0.8 * countTheSumPrice();
			checkoutPrice.innerHTML = 'Total: CNY ' + parseInt(price) + 'reward:-20%';
		}
		else if (countTheSumPrice() > 200){
			var price = 0.9 * countTheSumPrice();
			checkoutPrice.innerHTML = 'Total: CNY ' + parseInt(price) + 'reward:-10%';
		}
		else{
			var price = countTheSumPrice()
			checkoutPrice.innerHTML = 'Total: CNY ' + parseInt(price) + 'reward:-0%';
		}

	}
	else {
		checkoutItem.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
		checkoutPrice.innerHTML = 'CNY 0';
	}
}

updateCheckout();

const checkout = document.querySelector('.pay-btn');
checkout.addEventListener('click', function(){
	window.location.href = '../PersonalPages/SettlementInterface.html';
});

