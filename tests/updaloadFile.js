import { Selector } from "testcafe";

const fileUpload=Selector('input#file-upload');
const uploadFileButton = Selector('input#file-submit.button')

fixture('File Upload Fixture').page('https://the-internet.herokuapp.com/upload')

test('File Upload test',async t => {
    await t.setFilesToUpload(fileUpload,'../upload/imagen.png')
    .clearUpload(fileUpload)
    .setFilesToUpload(fileUpload,'../upload/imagen.png')
    .click(uploadFileButton)

})
