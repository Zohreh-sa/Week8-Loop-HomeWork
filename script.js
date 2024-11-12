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
        "https://img.mummum.dk/wp-content/uploads/2022/03/IMG_9814-min.jpg",
    ],
];

// get ul from HTML
const menuUl=document.getElementById("ul");

// create li element
for (let i=0; i< menuDatabase.length; i++){
    const li = document.createElement("li");
    
    // creat image element
    const pImage = document.createElement("img");
    pImage.src=menuDatabase[i][3];
    pImage.alt="${menuDatabase[i][0]}";
    pImage.style.width="150px"
    li.appendChild(pImage);

    // create Product name <p>
    const productName=document.createElement("P");
    productName.textContent=menuDatabase[i][0];
    li.appendChild(productName);

    //create price <P>

    const price=document.createElement("p");
    price.textContent=menuDatabase[i][1];
    li.appendChild(price);

    //create category <p>
    const category=document.createElement("p");
    category.textContent=menuDatabase[i][2];
    li.appendChild(category);

    menuUl.appendChild(li);
    }


    //create all dishes ,vegetarian and meat buttons
    
    const main=document.querySelector("main");
     //All dishes button
    const btnAllDishes=document.createElement("button");
    btnAllDishes.style.alignContent = "center";
    btnAllDishes.textContent = "All dishes";


    main.appendChild(btnAllDishes);
   
   // Vegitarian button
    const btnVeg=document.createElement("button");
    btnVeg.style.alignContent="center";
    btnVeg.textContent="Vegetarian";
    btnVeg.addEventListener("click",()=>{
        // const vegeDishes=menuDatabase.filter(element=>element[2]==="vegetarian");
        menuUl.innerHTML="";
        menuUl.innerHTML = menuDatabase.filter(element => element[2] === "vegetarian");
    })
    main.appendChild(btnVeg);

    // Meat button

    const btnMeat = document.createElement("button");
    btnMeat.style.alignContent = "center";
    btnMeat.textContent = "Meat";
    btnMeat.addEventListener("click",()=>{
        menuUl.innerHTML="";
        menuUl.innerHTML = menuDatabase.filter(element => element[2] === "meat");
    })
    main.appendChild(btnMeat);

 