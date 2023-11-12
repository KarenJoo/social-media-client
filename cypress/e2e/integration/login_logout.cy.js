const validEmail = "karenoroff@noroff.no";
const validPassword = "karenoroff";

describe('Login and logout', () => {
    it('should log in and access the profile', () => {
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
      cy.get('#loginEmail').type(validEmail);
      cy.get('#loginPassword').click();
      cy.get('#loginPassword').type(validPassword);

      // Submit the form
      cy.get("button[type=submit]").contains("Login").click();
      cy.wait(2000);

      // User redirects to the profile page 
    cy.get('#profilePagePrivate', { timeout: 20000 }).should('exist');
    cy.wait(2000);
    cy.get('[data-cy=logoutButton]').click();
    });
  });

