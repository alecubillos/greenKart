const { greenkart } = require("../POM/greenkart");

    describe('Shopping Cart Scenarios', () => {
      
      beforeEach(()=> {
        cy.visit('');
      })
                     
        it('Add to cart two products', () => {
          greenkart.getTotalCartItems().invoke('text').then((initialTotal)=>{
            greenkart.addProductToCart('Brocolli');
            greenkart.addProductToCart('Beetroot')
            greenkart.getTotalCartItems().invoke('text').then((finalTotal)=>{
                expect(parseInt(finalTotal)).eql(parseInt(initialTotal)+2);
            });
          })    
        })

        it('Remove until one item on cart', ()=> {
          greenkart.addProductToCart('Brocolli');
          greenkart.addProductToCart('Beetroot');
          greenkart.removeProductFromCartByName('Brocolli');
          greenkart.getTotalCartItems().invoke('text').then((finalTotal)=>{
            expect(parseInt(finalTotal)).eql(1);
        });
      })
        
        it('Remove from cart until empty', ()=> {
            greenkart.addProductToCart('Brocolli');
            greenkart.removeProductFromCartByName('Brocolli');
            greenkart.elements.getEmptyCartMsg().should('have.text', 'You cart is empty!');
        })

        it('Fail to remove product from empty cart', ()=>{
            greenkart.clickPreviewCart();
            greenkart.elements.getRemoveProductBtn().should('not.exist');
        })

        it('Fail test when attempting to remove product with empty cart', ()=>{          
            greenkart.clickPreviewCart();
            greenkart.removeProductFromCartByName('Brocollii');
        })
    })
