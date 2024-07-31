// Test Case ID: TSF-01
describe('Home Page', () => {
  beforeEach(() => {
    cy.viewport(1024, 1024)
    cy.visit('https://josephyap9.wixsite.com/qaetestsite')
  })
  it('displays the website content', () => {
    cy.visit('https://josephyap9.wixsite.com/qaetestsite')
    
    // Checks the home button
    cy.get('#comp-l46gptpv0label').should('contain', 'Home')
    cy.get('#comp-l46gptpv0label').click()
    cy.wait(500)
    // The header should contain the page title
    cy.get('#SITE_HEADER > .U4Bvut > .CJF7A2').should('contain', 'QAE TEST SITE')
    // The testing form should be visible
    cy.get('#bgLayers_comp-l46hcg841 > [data-testid="colorUnderlay"]').should('be.visible')
    cy.wait(2000)
  })
})

describe('Testing Form', () => {
  beforeEach(() => {
    cy.viewport(1024, 1024)
    cy.visit('https://josephyap9.wixsite.com/qaetestsite')
  })   
  it('ensures that required fields have appropriate validations', () => {
    
    // Click the submit button without filling out the required fields
    cy.scrollTo('bottom')
    cy.wait(2000)
    cy.get('#comp-l46hciae3 > button').click()
    cy.pause()

    // Check the required fields
    cy.scrollTo('top')
    cy.wait(2000)

  })
})

// Test Case ID: TSF-02
describe('Testing Form Submission', () => {
  beforeEach(() => {
    cy.viewport(1024, 1024)
    cy.visit('https://josephyap9.wixsite.com/qaetestsite')
  })

  it('checks that the form is submitted successfully', () => {
    // Input valid name
    cy.get('#comp-l46hci9f1 > .wPeA6j').should('be.visible').and('contain', 'Name')
    cy.get('#comp-l46hci9f1').type('John Doe')
    cy.wait(1000)
    // Input valid email
    cy.get('#comp-l46hci9k2 > .wPeA6j').should('be.visible').and('contain', 'Email')
    cy.get('#comp-l46hci9k2').type('johndoe@example.com')
    cy.wait(1000)
      
    // Click to open the custom dropdown
    cy.get('.psSgWb').should('be.visible').and('contain', 'Desired Position')
    cy.get('[data-testid="select-trigger"]').select('QAE')
    cy.wait(1000)

    // Input phone number
    cy.get('#comp-l46hci9w > .wPeA6j').should('be.visible').and('contain', 'Phone')
    cy.get('#input_comp-l46hci9w').type('0912345678')
    // Scrolls to the vertical middle of the page
    cy.window().scrollTo(0, Cypress.config('viewportHeight') / 2)
    cy.wait(1000)

    // Select date of availability
    cy.get('#date-picker-label-comp-l46hci9y2').should('be.visible').and('contain', 'Date Of Availability')
    cy.get('.EYZRr3').click()
    cy.get('[data-testid="nextMonth"]').click()
    cy.get(':nth-child(3) > :nth-child(4) > button > .XQYxZO').click()
    cy.wait(1000)

    // Input expected salary
    cy.get('#comp-l46hcia3 > .wPeA6j').should('be.visible').and('contain', 'Expected Salary')
    cy.get('#input_comp-l46hcia3').type('50,000')
    cy.wait(1000)

    // Select years of experience
    cy.get('[data-testid="groupLabel"]').should('be.visible').and('contain', 'Years of Experience')
    cy.get('[data-testid="radioGroup"] > :nth-child(1) > [data-testid="label"]').click()
    cy.wait(1000)

    // Select Skills
    cy.get('.lHtHtC > [data-testid="label"]').should('be.visible').and('contain', 'Skills')
    cy.get('[data-testid="items"]').contains('Manual Testing').click()
    cy.get('[data-testid="items"]').contains('API Testing').click()
    cy.get('[data-testid="items"]').contains('Automated Testing').click()
    cy.get('[data-testid="items"]').contains('Extra cheese').click()
    cy.wait(1000)

    // Check the last box
    cy.get('#comp-l46hciac1').click()
  
    // Trigger the submit button
    cy.get('[data-testid="buttonElement"]').click()
  })
})

// Test Case ID: TSF-03
describe('Testing Form Submission for non-required fields', () => {
  beforeEach(() => {
    cy.viewport(1024, 1024)
    cy.visit('https://josephyap9.wixsite.com/qaetestsite')
  })

  it('checks that the form is submitted successfully without filling out the non-required fields', () => {
    // Input valid name
    cy.get('#comp-l46hci9f1 > .wPeA6j').should('be.visible').and('contain', 'Name')
    cy.get('#comp-l46hci9f1').type('John Doe')
    cy.wait(1000)
    // Input valid email
    cy.get('#comp-l46hci9k2 > .wPeA6j').should('be.visible').and('contain', 'Email')
    cy.get('#comp-l46hci9k2').type('johndoe@example.com')
    cy.wait(1000)
      
    // Click to open the custom dropdown
    cy.get('.psSgWb').should('be.visible').and('contain', 'Desired Position')
    cy.get('[data-testid="select-trigger"]').select('SQAE')
    cy.wait(1000)

    // Leave the phone number field empty
    cy.get('#comp-l46hci9w > .wPeA6j').should('be.visible').and('contain', 'Phone')
    cy.get('#input_comp-l46hci9w').click()
    // Scrolls to the vertical middle of the page
    cy.window().scrollTo(0, Cypress.config('viewportHeight') / 2)
    cy.wait(1000)

    // Select date of availability
    cy.get('#date-picker-label-comp-l46hci9y2').should('be.visible').and('contain', 'Date Of Availability')
    cy.get('.EYZRr3').click()
    cy.get('[data-testid="nextMonth"]').click()
    cy.get(':nth-child(5) > :nth-child(6) > button > .XQYxZO').click()
    cy.wait(1000)

    // Input the expected salary then clear
    cy.get('#comp-l46hcia3 > .wPeA6j').should('be.visible').and('contain', 'Expected Salary')
    cy.get('#input_comp-l46hcia3').type('100200300').clear()
    cy.wait(1000)

    // Do not select from years of experience
    cy.get('[data-testid="groupLabel"]').should('be.visible').and('contain', 'Years of Experience')
    cy.wait(1000)

    // Select Skills
    cy.get('.lHtHtC > [data-testid="label"]').should('be.visible').and('contain', 'Skills')
    cy.get('[data-testid="items"]').contains('Manual Testing').click()
    cy.get('[data-testid="items"]').contains('Automated Testing').click()
    cy.wait(1000)

    // Check the last box
    cy.get('#comp-l46hciac1').click()
  
    // Trigger the submit button
    cy.get('[data-testid="buttonElement"]').click()

  })
})

// Test Case ID: TSF-04
describe('Contact Form Submission', () => {
  beforeEach(() => {
    cy.viewport(1024, 1024)
    cy.visit('https://josephyap9.wixsite.com/qaetestsite')
  })

  it('confirms successful redirection to the contact form', () => {
    cy.get('#comp-l46gptpv1label').click()
    cy.pause()

    //Trigger the submit button
    cy.get('[data-testid="buttonElement"]').click()
    cy.wait(1000)
  })

  it('verifies that the contact form is submitted successfully', () => {
    cy.get('#comp-l46gptpv1label').click()
    cy.wait(1000)
 
    // Required fields
    cy.get('#comp-l46hahhy > .wPeA6j').should('be.visible').and('contain', 'Name')
    cy.get('#input_comp-l46hahhy').type('Jane Doe')
    cy.wait(500)
    cy.get('#comp-l46hahi2 > .wPeA6j').should('be.visible').and('contain', 'Email')
    cy.get('#input_comp-l46hahi2').type('janedoe@example.com')
    cy.wait(500)

    // Non-required fields
    cy.get('#comp-l46hahi4 > .wPeA6j').should('be.visible').and('contain', 'Subject')
    cy.get('#input_comp-l46hahi4').type('Test Subject')
    cy.wait(500)
    cy.get('.PSkPrR').should('be.visible').and('contain', 'Message')
    cy.get('#textarea_comp-l46hahi6').type('Test Message')
    cy.wait(500)
    
    //Trigger the submit button
    cy.get('[data-testid="buttonElement"]').click()
  })

  it('verifies that the contact form is submitted successfully without filling out the non-required fields', () => {
    cy.get('#comp-l46gptpv1label').click()
    cy.wait(1000)
 
    // Required fields
    cy.get('#comp-l46hahhy > .wPeA6j').should('be.visible').and('contain', 'Name')
    cy.get('#input_comp-l46hahhy').type('Jane Doe')
    cy.wait(500)
    cy.get('#comp-l46hahi2 > .wPeA6j').should('be.visible').and('contain', 'Email')
    cy.get('#input_comp-l46hahi2').type('janedoe@example.com')
    cy.wait(500)

    // Leave the non-required fields empty
    cy.get('#comp-l46hahi4 > .wPeA6j').should('be.visible').and('contain', 'Subject')
    cy.get('#input_comp-l46hahi4').click()
    cy.wait(500)
    cy.get('.PSkPrR').should('be.visible').and('contain', 'Message')
    cy.get('#textarea_comp-l46hahi6').type('Test Message 123456789').clear()
    cy.wait(1000)
    
    //Trigger the submit button
    cy.get('[data-testid="buttonElement"]').click()
  })
})

// Test Case ID: TSF-05
describe('Responsive Design Tests', () => {
    // Test for mobile viewport
    it('should display correctly on mobile devices', () => {
      // Sample viewport to mobile size (iPhone X)
      cy.viewport(414, 896)
      // Testing form page
      cy.visit('https://josephyap9.wixsite.com/qaetestsite')

      // Assertions for mobile view
      cy.get('#SITE_HEADER > .U4Bvut > .CJF7A2').should('contain', 'QAE TEST SITE')
      cy.get('#comp-l46hci9a').should('be.visible')
      cy.scrollTo('bottom')
      cy.wait(500)

      // Check if the submit button can be triggered
      cy.get('[data-testid="buttonElement"]').click()
      cy.wait(500)
    })
    
    // Test for laptop viewport
    it('should display correctly on laptop devices', () => {
      // Sample viewport to laptop size (macbook-13)
      cy.viewport(1280, 800)
      // Testing form page
      cy.visit('https://josephyap9.wixsite.com/qaetestsite')

      // Assertions for laptop view
      cy.get('#SITE_HEADER > .U4Bvut > .CJF7A2').should('contain', 'QAE TEST SITE')
      cy.get('#comp-l46hci9a').should('be.visible')
      cy.scrollTo('bottom')
      cy.wait(500)

      // Check if the submit button can be triggered
      cy.get('[data-testid="buttonElement"]').click()
      cy.wait(500)

      // Scrolls to the vertical middle of the page
      cy.window().scrollTo(0, Cypress.config('viewportHeight') / 2)
      cy.wait(500)
    })
})