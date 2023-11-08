describe('Login', () => {
    it('should log in and access the profile', () => {
      // Visit the login page
      cy.visit('https://karenjoo.github.io/social-media-client/');
  
      // Click the login button
      cy.get('button[data-auth="login"]:visible').click();
  
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
    });
  });
  