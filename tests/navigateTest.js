fixture('navigate example').page('https://devexpress.github.io/testcafe/example')

test('Navigate test',async t=>{
    await t.navigateTo('http://www.google.com')

    //usando esto se va a a google primero entrando en la pagina del fixture, este no hace override del fixture
})