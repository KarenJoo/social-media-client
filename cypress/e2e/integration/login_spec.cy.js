describe('Login', () => {
    it('should log in and access the profile', () => {
     //visit the login page
     cy.visit('https://karenjoo.github.io/social-media-client/');
     cy.get('[data-cy=loginButton]').click();
     
      // Enter valid login credentials
    cy.get('[data-cy=loginEmail]').type('test@noroff.no');
    cy.get('[data-cy=loginPassword]').type('testPassword');



    })
})