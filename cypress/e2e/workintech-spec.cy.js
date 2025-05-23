describe('workintech study', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5174/Login');
    });
    ;

    it('ekranda 1 tane hata mesajı var', () => {
        cy.get('[data-cy="email-input"]').type('wabalaba dub dub');
        cy.get('.invalid-feedback').should('have.length', 1);
        cy.contains('Email is not valid. @ is required.').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
    })

    it('email ve password yanlış', () => {
        cy.get('[data-cy="email-input"]').type('wabalaba dub dub');
        cy.get('[data-cy="password-input"]').type('123');
        cy.get('.invalid-feedback').should('have.length', 2);
    })

    it('email ve password yanlış', () => {
        cy.get('[data-cy="email-input"]').type('workintech@workintech.com');
        cy.get('[data-cy="password-input"]').type('117.!_Workintech');
        cy.get('button[type="submit"]').should('be.disabled');
    })
})