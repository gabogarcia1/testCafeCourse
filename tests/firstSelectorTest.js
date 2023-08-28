const { fixture, test,Selector } = require("testcafe");
const developerName = Selector("#developer-name");
const osOption = Selector("#macos")
const submitButton = Selector("#submit-button")

fixture("First test").page("https://devexpress.github.io/testcafe/example")

test("First test",async t=>{
    await t.typeText(developerName,"TAU").click(osOption).click(submitButton)
})