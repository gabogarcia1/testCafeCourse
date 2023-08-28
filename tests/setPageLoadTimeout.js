fixture('Set page timeout').page('https://devexpress.github.io/testcafe/example')

test('set page timeout test',async t=>{
    await t
    .setPageLoadTimeout(0)
    .navigateTo('https://devexpress.github.io/testcafe/')

})