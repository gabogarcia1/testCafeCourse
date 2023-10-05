import { ClientFunction } from "testcafe";
import HomePage from "../../pages/HomePage";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import CustomerPage from "../../pages/CustomerPage";

const URL='https://demo.nopcommerce.com/'
const getURL=ClientFunction(()=>window.location.href)
let randomNumber=Math.floor(Math.random()*10000)
let userEmail=`gabo${randomNumber}@gmail.com`

fixture("Registration fixture")
    .page(URL);

test('Assert Home Page Test',async t=>{
    await t
    .expect(getURL()).eql(URL)
    .expect(HomePage.subtitleHeader.exists).ok()
});

test('User Registration and login test',async t=>{
    await t
    .click(HomePage.RegisterLink)
    .expect(getURL()).contains('register')
    .click(RegisterPage.GenderOption)
    .typeText(RegisterPage.FirstName,'Gabo')
    .typeText(RegisterPage.LastName,'garcia')
    await RegisterPage.selectDay('5')
    await RegisterPage.selectMonth('July')
    await RegisterPage.selectYear('1995')
    await t
    .typeText(RegisterPage.Email,userEmail)
    .typeText(RegisterPage.Password,'123456')
    .typeText(RegisterPage.ConfirmPassword,'123456')
    .click(RegisterPage.RegisterButton)
    .expect(RegisterPage.SuccessfullMessage.exists).ok()
    //.click(HomePage.LogoutLink)
    .click(HomePage.LoginLink)
    .expect(LoginPage.accountHeader.exists).ok()
    .typeText(LoginPage.emailInput,userEmail)
    .typeText(LoginPage.passwordInput,'123456')
    .click(LoginPage.submitButton)
    .click(HomePage.MyAccountLink)
    .expect(CustomerPage.ordersLink.exists).ok()
    .click(CustomerPage.ordersLink)
    .expect(CustomerPage.noOrdersLabel.exists).ok()
})












