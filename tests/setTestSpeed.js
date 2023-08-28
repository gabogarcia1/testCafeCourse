const { fixture, test, Selector } = require("testcafe");
const nameImput=Selector('#developer-name')

fixture("Set Speed").page("https://devexpress.github.io/testcafe/example")

test("SetSpees",async t=>{
    await t
    .setTestSpeed(0.1) //es mas rapido
    //.setTestSpeed(0.01)
    .typeText(nameImput,'Gabo')
    .typeText(nameImput,'Garcia')
})