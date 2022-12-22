const { greenkart } = require("../POM/greenkart");

    describe('Booking from scratch', () => {
      
      beforeEach(()=> {
        cy.visit('');
            })
          
              
    
        it('Add to cart', () => {
          greenkart.getTotalCartItems().invoke('text').then((initialTotal)=>{
            greenkart.addProductToCart('Brocolli');
            greenkart.getTotalCartItems().invoke('text').then((finalTotal)=>{
                expect(parseInt(finalTotal)).eql(parseInt(initialTotal)+1);
            });
          })
          
        })
        it('Remove from cart', ()=> {
            greenkart.addProductToCart('Brocolli');
            greenkart.removeProductFromCartByName('Brocolli');
            greenkart.elements.getEmptyCartMsg().should('have.text', 'You cart is empty!');
        })

        it('Fail to remove product from empty cart', ()=>{
            greenkart.clickPreviewCart();
            greenkart.elements.getRemoveProductBtn().should('not.exist');
        })
        })
