const { fixture, test,Selector } = require("testcafe");
const developerName = Selector("#developer-name");
const osOption = Selector("#macos")
const submitButton = Selector("#submit-button")

fixture("First test").page("https://devexpress.github.io/testcafe/example")

test("First test",async t=>{
    await t
    .expect(developerName.value).eql('','input is empty')
    .typeText(developerName,"TAU")
    .expect(developerName.value).eql('TAU','input contains TAU')
    .click(osOption)
    .click(submitButton)
})