fixture("First test").page("https://devexpress.github.io/testcafe/")

test.skip.page('https://devexpress.github.io/testcafe/example')("First test",async t=>{
    await t.typeText("#developer-name","TAU").click("#macos").click('#submit-button')
    
})
test.page('https://devexpress.github.io/testcafe/example')("second test",async t=>{
    await t.typeText("#developer-name","TAU").click("#macos").click('#submit-button')
    
})