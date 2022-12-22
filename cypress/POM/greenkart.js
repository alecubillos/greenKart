/// <reference types="cypress" />

export class GreenKart {
    elements = {
        getProducts:(product) => cy.get('div.product').contains(product),
        getCartSummary: () => cy.get('.cart-info td'),
        getShoppingCartBtn:() => cy.get('a.cart-icon'),
        getRemoveProductBtn: () => cy.get('div.cart-preview a.product-remove'),
        getCartPreviewProduct: (product) => cy.get('div.cart-preview li').contains(product),
        getEmptyCartMsg:()=> cy.get('div.cart-preview div.empty-cart')
    }
    
    addProductToCart(product){
        this.elements.getProducts(product).parent().contains('ADD TO CART').click();
    }

    getTotalCartItems(){
        return this.elements.getCartSummary()  
        .siblings().eq(2)       
    }

    clickPreviewCart(){
        this.elements.getShoppingCartBtn().click();
    }

    removeProductFromCartByName(product){
        this.clickPreviewCart();
        this.elements.getCartPreviewProduct(product).parent()
        .siblings().eq(2)
        .click();
    }

}

export const greenkart = new GreenKart();
