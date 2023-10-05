/*
puedo correr testcafe --list-browsers
y te dice los browser que puedo usar 
despues corro
testcafe firefox,chrome,safari tests/firstTest.js
aca va a abrir tres instancias al mismo tiempo, una con firefox, una con safi y otra con chrome

aveces podemos tener errores con javascript dependiendo del broser
podemos evitar estos errores usando dentro del comando un 
--skip-js-errors

corro, testcafe all tests/firstTest.js --skip-js-errors
aca se corren en todos los brosers tambien

*/

/*
Run tests in parallel with testcafe
Testcafe allows us to execute tests concurrently
in concurrent mode, test cafe invokes multiple instances of each browser

these instances constitu the pool of browser against which tests run concurrently. i.e. each test runs in the first available instance

-> to enable concurrency use the -c (-concurrency) command line
 -> the following command invokes three chrome instances and runs tests concurrently

 testcafe -c 3 chrome tests/test.js

 3 es el numero de concurrencias.

 con multiple browsers hacemos

 testcafe -c 4 safari,firefox test/tests.js 
 "Concurrent tests are not supported in edge"

 lo bueno de las concurrencias, esque en paralelo por ejemplo
 si tengo 2 concurrencias, y 4 tests, se corren 
 2 tests en cada concurencia. el tiempo de testeo se divide a la mitad

 Test cafe Live mode

 Livemode ensures testcafe and the browsers remain active while you work on tests. you can see test results instanly because the tests are restarted when you make changes

 use the -L (-live ) flag to enable live mode from the command line interface

 testcafe chrome tests/test.js -L

cuando corro este tipo de tests en livemode
me da varias opciones , si uso ctrl+s, se para el test
si uso ctrl + r se restartea
si pongo ctrl+w enables/disables watching files
ctrl+c para salir del livemode

cual es la ventaja? no lo cierra a la interfaz, y cuando cambio algo en el codigo y pongo control+s , osea lo guardo , se vuelve a correr el test, esta buenaso

*/

/*
FILTER TESTS BY METADATA
you can also run tests whose metadata contains specific values
use the -test-meta arguments to do this
testcafe chrome ./my-tests/ --test-meta device=mobile,env=production

and to filter fixtures with specific metada use the -fixture-meta argument

testcafe firefox ./my-tests/ --fixture-meta device=mobile,env=production
al test lo puedo escribir asi

fixture.meta('version','1')("first fixture").page("http://devexpress.github.io/testcafe/")

test.meta('env','production').page("https://devexpress.github.io/testcafe/example")("first tests",async t=>{
    await t.typetext("#developer-name","TAU")
    .click("#macos")
    .click("#submit-button")
})

y corro testcafe chrome tests/testMetaScript.js --test-meta env=production


FILTER TESTS AND FIXTURES BY NAME
use the -t(--test)command line argument or runner.filter method to run a test by name
ejemplo

testcafe safari ./tests/sample-fixture.js -t "Click a label"
await runner.browsers("safari").src('./tests/sample.fixture.js).filter(testName=> testName === "Click a label").run()
*/

/*
Run tests in headless mode

Testcafe allows you to run tests in google chrome and mozilla firefox without a visible UI Shell in headless mode (chrome headless, firefox headless)
use the :headless parameter to launch a browser in headless mode
testcafe firefox:headless ./tests/
testcafe "chrome:headless" tests/sample-fixture.js
(no hacen falta las comillas)

con safari y edge no se puede, se abre directamente si le pones el headless

USE CHROMIUM DEVICE EMULATION
you can run tests with chromium's build in device emulator in google chrome, chromium and chromium base microsoft edge with the emulation browser parameter and specifying the target device with the device parameter

testcafe "chrome:emulation:device=iphone x" ./tests/sample-fixture.js
testcafe "chrome:emulation:device=iphone X" tests/firstTest.js
*/

/*
Wait mechanisms with test cafe

test cafe has a built-in automatic waiting mechanims and does not require dedicated API to wait for redirects or page elements to appear
these mechanisms work when testcafe performs test actions evaluates assertions and selectors, sends request and navigates the browser

testcafe automatically waits for the target to become visible when an actions is executed
testcafe tries to evaluate the specified selector multiple times with the timeout. if the element does not appear, the test will fail

when a selector is executed, test cafe waits for the target node to appear in the dom until the selector timeout expires
we can use the timeout option to specify the selector timeout in the code. to set the timeout when you launch tests, pass it to the runner.run API method or the --selector-timeout command line


-> testcafe keeps trying to evaluate the selector until the element apears in the dom or the timeout passes

you can additionally require that test cafe should wait for an element to become visible. use the visibility check selector option for this

----> wais for '#developer-name' to appear in the dom and become visible
const nameInputElement= await nameInput.with({visibilityCheck:true})();



*/

/**
Wait mechanism for assertions 

testcafe assertions use the smartAssertion query mechanism that is activated when you pass a selector property or a client function as an actual value

testcafe keeps recalculating the actual value until it matches the expected value or the assertion timeout passes

Wait mechanism for redirects:
When an action triggers a redirect, testcafe automatically waits for the server to respond
the test continues if the server does not respond with 15 seconds
 */

/*
DEBUGGING
in this mode, test execution is paused before the first action or assertion so that you can invoke the developer tools and debug

when test execution reaches t.debug, it pauses so that you can open the browser's developer tools and check the web page state, DOM element location, their css styles, etc

You can also use the UNLOCK PAGE swith in the footer to unlock the tested page and interact with its elements

DEBUG MODE ON FAIL
we can specify to automatically enter the debug mode when a test fails with this command line parameter -debug-on-fail

testcafe chrome tests/sample-fixture.js --debug-on-fail

if this option is enabled, test cafe pauses the test when it fails. this allows you to view the tested page and determine the cause of the fail
when you're done,click the finish button in the footer to end test execution

 */

/*
Take screenshot

Test cafe allows you to take screenshots of the tested webpage at any moment suring test run, or automatically whenever a test fails

- Screenshots require -NET or newer install on windows machine
you can take screenshots at any moment during test run. use t.takeScreeshot action to take a screenshot of the entire page, or the t.takeElementScreenshot action to capture a particular element


podemos tambien pasarle el comando -s takeOnFails=true en el command line y hace screen cuando falla
*/

/*
VIDEO RECORDING
testcafe allows you to record videos of test rund
- should install the FFmped library to record videos

- do the following if testcafe cannot find the FFmped library:
  - install the @ffmpeg.installer/ffmpeg package from npm
- videos are recorded in mp4 format

use either of the following to enable video recording: 
the -video command line flag

testcafe chrome test.js --video artifacts/videos

podemos activarlo con diferentes opciones
- failedOnly
- singleFile
-ffmpedPath
- pathPattern

*/
/*
test extensions for vs 
primero instalamos
testcafe runenr
test cafe snippets y test latte
ejemplo
si escribo fixture, estan los snippets de testcafe que vienen con la libreria pero tambien hay unos que empiezan con tc- que tienen una flechita que ya te escriben todo el codigo que necesitas
*/

/*
PAGE MODEL

Page model is a test automation pattern that allows you to create an abstraction of the tested page and use ut in test code to refer to page elements

in this model we create a class for each web page in the application
in this class we add the web elements of that web page and also add the methods which perform operations on those elements as shown in the image

why use pom?

if we dont use pom:
if we hace changes in locator names we need to go to each test class to adjust this chance. 

the dupplication of code which created from the repeated functions
unnucessary code increases the cost of maintenance in the whole project

Test scenarios to be covered:
user regitration
user login
change currency
search about product 
add product to cart
checkout with register user
place order



*/