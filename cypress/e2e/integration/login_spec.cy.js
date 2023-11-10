describe('Login', () => {
    it('should log in and access the profile', () => {
      // Visit the login page
      cy.visit('./');
  
      // Click the login button > .eq(0) to click the first btn 
      cy.get('button[data-auth="login"]:visible').eq(0).click();
  
      // Wait for the modal to exist in the DOM
      cy.get('#loginModal', { timeout: 5000 }).should('exist');
  
      // Wait for the modal to have the 'show' class > modal is visible
      cy.get('#loginModal.show', { timeout: 5000 }).should('exist');
  
      // Use '.within' to fill in the login form within the modal
      cy.get('#loginModal').within(() => {
        
      // Use { force: true } to pass visibility for filling out email 
      cy.get('#loginEmail').type('test@noroff.no', { force: true });
  
      // use { force: true } to pass visibility for filling out password
      cy.get('#loginPassword').type('password', { force: true });
      });
  
      // Submit the form
      cy.get('#loginForm').submit();

      // profile page loads and displays
      cy.get('#profilePagePrivate', { timeout: 10000 }).should('exist');
    });
  });
  