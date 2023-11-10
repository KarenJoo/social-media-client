describe('Login', () => {
    it('should log in and access the profile', () => {
      // Visit the login page
      cy.visit('./');

      // Delays > minimum of 500ms 

      cy.wait(500);      
      
      // Click the login button (modal footer > login > element> data-auth
      cy.get(".modal-footer button[data-auth='login']").click();

      // Fill in the login form with registered user
      cy.wait(500);
      cy.get('#loginEmail').type('karenoroff@noroff.no', { delay: 500 });
      cy.get('#loginPassword').click();
      cy.get('#loginPassword').type('karenoroff', { delay: 500 });

      // Submit the form
      cy.get("#loginModal [data-cy='loginButton']").first().click();

      // User redirects to the profile page 
    cy.get('#profilePagePrivate', { timeout: 20000 }).should('exist');

    });
  });
  