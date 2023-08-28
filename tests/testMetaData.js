const { fixture, test } = require("testcafe");

fixture.meta('version','1')("First test").page("https://devexpress.github.io/testcafe/")

test.meta('env','prod')
.page('https://devexpress.github.io/testcafe/example')("First test",async t=>{
    await t.typeText("#developer-name","TAU").click("#macos")
})
test.page('https://devexpress.github.io/testcafe/example')("second test",async t=>{
    await t.typeText("#developer-name","TAU").click("#macos")
})

//testcafe chrome tests/testMetaData.js --test-meta env=prod