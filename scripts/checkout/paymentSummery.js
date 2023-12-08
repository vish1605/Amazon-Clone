    import { cart } from '../../data/cart.js';
    import { getProduct } from '../../data/products.js';
    import { getDeliveryOption } from '../../data/deliveryOption.js';

    export function renderPaymentSummery() {
        let i = 0;
        let productprice = 0;
        let Shippingprice = 0;
        cart.forEach(cartItem => {

            const product = getProduct(cartItem.productId);
            productprice += product.price * cartItem.quantity;

            const delivOption = getDeliveryOption(cartItem.deliveryOptionId);
            Shippingprice += delivOption.price;



        });

        const totalBeforeTax = productprice + Shippingprice;
        const tax = totalBeforeTax* 0.1;
        const total = totalBeforeTax + tax;

        const paymentSummeryHTML = ` <div class="payment-summary-title">
    Order Summary
    </div>

    <div class="payment-summary-row">
    <div>Items (3):</div>
    <div class="payment-summary-money">&#8377;${productprice / 100}</div>
    </div>

    <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">&#8377;${Shippingprice / 100}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">&#8377;${totalBeforeTax / 100}</div>
    </div>

    <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">&#8377;${(tax /100).toFixed(2) }</div>
    </div>

    <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">&#8377;${(total /100).toFixed(2)}</div>
    </div>

    <button class="place-order-button button-primary">
    Place your order
    </button>


    
    `;

    document.querySelector('.js-payment-summery').innerHTML = paymentSummeryHTML;


    }

    