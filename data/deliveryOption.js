export const deliveryOption = [{
    id:'1',
    deliveryDays:7,
    price:0
},
{
    id:'2',
    deliveryDays:3,
    price:5000
},
{
    id:'3',
    deliveryDays:1,
    price:10000
}]

export function getDeliveryOption(deliveryOptionId){
    let delivOption;

        deliveryOption.forEach((option) => {
            if (option.id === deliveryOptionId) {

                delivOption = option;
            }
        });

        return delivOption;
}