
//  checking for a message in this context > the 'title' attribute is the only "message" that is "shown" when the user inserts invalid input. 
// The test is not specified to show an error or alert message 
const invalidEmail = "karen@invalid.no";
const invalidPassword = "invalid!";

describe('Invalid login', () => {
    it('should fail to login with invalid credentials and show a message', () => {
        // Visit the login page
      cy.visit('./');

      // Delays > minimum of 500ms 
      cy.wait(500);  
      
      // Click the login button (modal footer > login > element> data-auth
      cy.get(".modal-footer button[data-auth='login']").click(); 
      
      cy.wait(500);
      // Wait for the loginform to be visible
      cy.get("#loginForm").should("be.visible");

      // Fill in the login form with registered user
      cy.get('#loginEmail').type(invalidEmail);
      cy.get('#loginPassword').click();
      cy.get('#loginPassword').type(invalidPassword);

      // Submit the form
      cy.get("button[type=submit]").contains("Login").click();
      // message about invalid credentials is displayed 
      cy.wait(2000);
      // Your existing test code...

      cy.get('#loginModal')
      // Find the email input > modal-body
      .find('.modal-body #loginEmail') 
      // if invalid credentials > title attribute will "show" a message
      .should('have.attr', 'title', 'Only Noroff student or teacher emails are valid.'); 

    })
})

