import { Selector } from "testcafe";

const triedCheckBox= Selector('label').withText('I have tried TestCafe')
const slider=Selector('#slider')

fixture('Drag Test').page('https://devexpress.github.io/testcafe/example')
test('drag test case',async t=>{
    await t
    .setTestSpeed(0.01)
    .click(triedCheckBox)
    .drag(slider,360,0,{offsetX:10, offsetY:10})
})