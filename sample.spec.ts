const product_name = "Laptops";
const product1  = [
{
	name: "Windows",
	price: 1000,
	instock: true,
},
{
    name: "Mac",
	price: 3000,
	instock: false,
},
{
    name: "Linux",
    price: 2000,
    instock: true,
}
];
console.log('-------FILTER--------');
const instock = product1.filter((product) => product.instock);
console.log(instock);

console.log('-------MAP--------');
const names = product1.map((product) => product.name + product.price);
console.log(names);

// const prices = product1.map((product) => product.price);
// console.log(prices);

console.log(`product_name = ${product_name}`);
