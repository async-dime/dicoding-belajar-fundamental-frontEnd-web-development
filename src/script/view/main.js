import "../components/search-bar.js";
import "../components/drink-list.js";
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const drinkListElement = document.querySelector("drink-list");

    const onButtonSearchClicked = async() => {
        try {
            const result = await DataSource.searchDrink(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        drinkListElement.drinks = results;
    };

    const fallbackResult = message => {
        drinkListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;