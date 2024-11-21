console.log('Hello world!')

// Homework


// Do:

// Now we need to go back and practice some DOM manipulation with JavaScript.The idea is to use the powers of loops and arrays to build our website from a database.The pseudocode for this task would look something like:

// 1. Only write a < ul > element in your HTML document with an id
// 2.Get the < ul > element using getElementById
// 3.Use any type of the for loops you think might work to loop through the database(attached in next slide).
// 4.In each iteration create a < li > element
// 5.Create an < img > element for the product image, and 3 < p > elements for product name, price and category(using createElement).
// 6.Attach these 4 elements to the < li > created before
// 7.Attach the < li > to the < ul > element
// 8.Create a ‘vegetarian’ and ‘meat’ button that filters the products on the page.


const menuDatabase = [
    ["Papadum", 20, "vegetarian", "https://www.shutterstock.com/image-photo/deep-fried-khichiya-papad-traditional-260nw-1076490656.jpg",
    ],
    [
        "Pakora", 50, "meat",
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/vegetable-pakora-recipe.jpg",
    ],
    [
        "Tandoori Chicken", 60, "meat",
        "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg",
    ],
    [
        "Samosa", 50, "vegetarian",
        "http://img.mummum.dk/wp-content/uploads/2022/03/IMG_9814-min.jpg",
    ],
];

// get ul from HTML
const list = document.getElementById("list");

function createMenu(database) {

    // clear previous list
    list.innerHTML = "";

    // 3.Use any type of the for loops you think might work to loop through the database(attached in next slide).
    for (const dish of database) {

        // 4.In each iteration create a < li > element
        const listItem = document.createElement("li");

        // 5.Create an < img > element for the product image, and 3 < p > elements for product name, price and category(using createElement).
        const productImage = document.createElement("img");
        productImage.src = dish[3];
        productImage.style.width = "250px"

        const productName = document.createElement("p");
        productName.textContent = `Name: ${dish[0]}`;

        const productPrice = document.createElement("p");
        productPrice.textContent = `Name: ${dish[1]}`;

        const productCategory = document.createElement("p");
        productCategory.textContent = `Name: ${dish[2]}`;

        // 6.Attach these 4 elements to the < li > created before

        listItem.append(productImage);
        listItem.append(productName);
        listItem.append(productPrice);
        listItem.append(productCategory);
        // 7.Attach the < li > to the < ul > element


        list.append(listItem);

    }

}


// Invoke the createMenu function with an undiltered menuDatabase to display full menu.

createMenu(menuDatabase);


// 8.Create a ‘vegetarian’ and ‘meat’ button that filters the products on the page.

const vegetarianBtn = document.createElement("button");
vegetarianBtn.textContent = "Vegetarian";

const meatBtn = document.createElement("button");
meatBtn.textContent = "Meat";

const allDishesBtn = document.createElement("button");
allDishesBtn.textContent = "All dishes"

function filterMenu(database, category) {
    const filteredDB = database.filter((item) =>
        item[2] === category);
    createMenu(filteredDB);
}

vegetarianBtn.addEventListener("click", () => {
    filterMenu(menuDatabase, "vegetarian");
});
meatBtn.addEventListener("click", () => {
    filterMenu(menuDatabase, "meat");
});

allDishesBtn.addEventListener("click", () => {
    createMenu(menuDatabase);
});

document.body.appendChild(vegetarianBtn);
document.body.appendChild(meatBtn);
document.body.appendChild(allDishesBtn);
