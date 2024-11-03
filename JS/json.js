const shop = {
    owner : 'aliya',
    address : {
        street : 'kochukhet',
        city : 'BD',
        country : 'Bangladesh'
    },
    products :['laptop', 'mic', 'monitor', 'keyboard'],
    revenue : 45000,
    isOpen : true,
    isNew : false
};
console.log(shop)
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObject = JSON.parse(shopJson);
console.log(shopObject)