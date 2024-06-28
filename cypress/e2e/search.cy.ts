describe('search products', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should be able to search for products', () => {
        cy.get('input[name=q]').type('moletom').parent('form').submit()

        cy.location('pathname').should('include', '/search')
        cy.location('search').should('include', 'q=moletom')

        cy.get('a[href^="/product"]').should('exist')
    })
})