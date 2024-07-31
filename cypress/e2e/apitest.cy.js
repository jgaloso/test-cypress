describe('Star Wars API Test', () => {

  // Test API Root Endpoint
  it('should retrieve available resources at the root endpoint', () => {
    cy.request('GET', 'https://swapi.dev/api/')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.all.keys('people', 'planets', 'starships', 'vehicles', 'species', 'films')
      })
  })

  // Get the specific film by ID = 1
  it('should retrieve a specific film by ID', () => {
    cy.request('GET', 'https://swapi.dev/api/films/1/')
      .then((response) => {
        cy.log(JSON.stringify(response.body))

        // Check the status code
        expect(response.status).to.eq(200)

        // Verify the title property in the response body
        expect(response.body).to.have.property('title')
        expect(response.body.title).to.eq('A New Hope')
      })
  })

  // Get any characters by selecting from [1] Luke Walker - [20] Yoda
  it('should retrieve a character name by ID', () => {
    cy.request({
      method: 'GET',
      url: 'https://swapi.dev/api/people/20/',
    })
    // Check the status code
    .then((response) => {
      expect(response.status).to.equal(200)
      cy.log(JSON.stringify(response.body))
    })
  })

  // Test for Invalid Requests
  it('should return 404 for pages beyond available range', () => {
    cy.request({
      method: 'GET', 
      url: 'https://swapi.dev/api/species/?page=100',
      failOnStatusCode: false
    })
    .then((response) => {
      expect(response.status).to.eq(404)
    })
  })
  
  // Checks Invalid Endpoint
  it('should handle invalid endpoint and return a 404', () => {
    cy.request({
      method: 'GET',
      url: 'https://swapi.dev/api/starships/invalid/',
      failOnStatusCode: false
    })
    .then((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.have.property('detail', 'Not found')
    })
  })

})
