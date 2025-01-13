// Task: Create a pipeline on Snaplogic that does the exact same thing as this code does.

const baseURL = "https://fakestoreapi.com";

// This will be your input data
const searchFilter = {
    rating: 4.5,
    numberOfRatings: 900
}

async function getAllProducts() {
    const response = await fetch(`${baseURL}/products`);
    return await response.json();
}

async function getAllProductsBasedOnFilter(baseRating, baseNumberOfRating) {
    const products = await getAllProducts();
    return products.filter((product) => product.rating.rate > baseRating && product.rating.count > baseNumberOfRating);
}

async function main() {
    const productsBasedOnFilter = await getAllProductsBasedOnFilter(searchFilter.rating, searchFilter.numberOfRatings);

    if (productsBasedOnFilter.length > 0) {
        console.log(`Your search returned ${productsBasedOnFilter.length} products.`)
    } else {
        console.log(`No results found for [Rating>${searchFilter.rating}] and [Number of ratings>${searchFilter.numberOfRatings}]`)
    }
}

main()