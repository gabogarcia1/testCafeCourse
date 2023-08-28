fixture("First test").page("https://devexpress.github.io/testcafe/")
.beforeEach(async t=>{
await t.maximizeWindow()
    .setTestSpeed(0.1)
    .setPageLoadTimeout(0)
})

test
.page('https://devexpress.github.io/testcafe/example')("First test",async t=>{
    await t.typeText("#developer-name","TAU").click("#macos")
})
test.page('https://devexpress.github.io/testcafe/example')("second test",async t=>{
    await t.typeText("#developer-name","TAU").click("#macos")
})

