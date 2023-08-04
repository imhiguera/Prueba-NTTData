
describe('Flujo de ventas Prueba',function()
{
  before(()=>
  {
      cy.reload() 
      cy.clearCookies()
      cy.visit('https://www.saucedemo.com')
      
         
  })


  it("Validar que se ingresen a la pantalla correcta",function()
  {
      
      cy.contains('Accepted usernames are')
      cy.log('Se muestra la página de inicio correctamente')
           
  })

  it("Validar que se ingresen datos de usuario y contraseña",function()
  {
      
    cy.get('[data-test="login-button"]').click()
    cy.wait(5000)
    cy.contains('Username is required').log('No se ingresaron datos en el login') 
          
  })
  it("Validar ingreso exitoso",function()
  {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
   
  })
  it("validar seleccion del carrito",function()
  {
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Isabel')
    cy.get('[data-test="lastName"]').type('Higuera')
    cy.get('[data-test="postalCode"]').type('170130')
    cy.get('[data-test="continue"]').click()
    cy.contains('FREE PONY EXPRESS DELIVERY!').log('pagina final de la ventas')
    cy.get('[data-test="finish"]').click()
    cy.contains('THANK YOU FOR YOUR ORDER').log('se completo la orden')
   
  })

  


})