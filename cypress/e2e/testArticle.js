import { When, Then, Given,And } from 'cypress-cucumber-preprocessor/steps'
const data = require('../fixtures/testData.json')



Given('the user is on the article page', () => {
    
cy.visit('/')
})

When('the user clicks on "Get a day pass", yellow button, inside the article', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    cy.getIframeBody()
    .find('.submit-button').eq(1).should('have.text', 'Get a day pass').click()
    cy.xpath('//*[@class="global-submitButton"]').click()
    })

And('the user fills in a random email address', () => {
    
 cy.xpath('//*[@id="email"]').type(`${Date.now()}`+ data.email)
})

And('the user selects "UK" as the country and enters a valid UK postcode', () => {
       
    cy.get("#country").select(data.country)
    cy.get("#postcode").type(data.postCode)
    })
And('the user selects a random preference for marketing preferences', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    cy.get('#publisher_marketing_news').check('true')
    cy.get('#publisher_marketing_offers').check('true')
    cy.get('#axate_marketing').check('true')
    })
        
And('the user clicks "Continue"', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })   
    cy.xpath('//button[@type="submit"]').click({force: true})
  
 })
 And('the user selects any payment amount', () => {
       
    cy.xpath('//*[contains(text(),"£1.00")]').click()
    cy.xpath('//button[@type="submit"]').click()
 })

 And('the user selects Voucher', () => {
    
    cy.xpath('//*[contains(@class,"voucher card")]').click()
   
 })

 And('the user fills in "QA2024"', () => {
       
    cy.get('#voucher').type(data.voucher)
  
 })

 Then('the user should see confirmation "You are ready to read your first article"', () => {
    cy.getIframeBody()
    .find('#iframe__popup_notices').click() 
    cy.get('.notice_title__1klDs').should('have.text', 'You are ready to read your first article.')
  
 })