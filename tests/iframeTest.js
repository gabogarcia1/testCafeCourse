import { Selector, fixture } from "testcafe";

const iframeName= Selector('iframe[id="mce_0_ifr"]')
const textArea = Selector('body#tinymce.mce-content-body')

fixture('iframe fixture').page('https://the-internet.herokuapp.com/iframe')
test('Iframe test',async t=>{
await t.switchToIframe(iframeName)
.click(textArea)
.pressKey('ctrl+a delete')
.typeText(textArea,'Hello gabo')
.expect(textArea.innerText).contains('Hello')
.switchToMainWindow()
})
