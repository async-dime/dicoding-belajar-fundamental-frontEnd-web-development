class DrinkItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set drink(drink) {
        this._drink = drink;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }        
            .cocktail-img {
                width: 100%;
                max-height: 150px;
                object-fit: cover;
                object-position: center;
            }        
            cocktail-info {
                padding: 24px;
            }        
            cocktail-info>h4 {
                font-weight: lighter;
            }        
            cocktail-info>p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10;
                /* number of lines to show */
            }
        </style>
        <img class="cocktail-img" src="${this._drink.strDrinkThumb}" alt="Photo of cocktail">
        <div class="cocktail-info">
            <h3>${this._drink.strDrink}</h3>
            <h4>${this._drink.strAlcoholic}</h4>
            <h4>${this._drink.strGlass}</h4>
            <p>${this._drink.strInstructions}</p>
        </div>
        `;
    }
}

customElements.define("drink-item", DrinkItem);