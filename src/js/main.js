import '../scss/styles.scss';   //  this is needed for style-loader to inject the
                                //  style tag. All styling can now be handled within
                                //  the js modules.
import 'bootstrap';             //  needed for bootstrap's js.

function renderWebpage() {
    const initTest = document.createElement('div');

    initTest.setAttribute("class", 
        "container-fluid bg-primary text-light h1 d-flex justify-content-center " +
        "py-5"
    );
    initTest.textContent = "Hello Bootstrap, Webpack, and JavaScript!";

    document.body.appendChild(initTest);
}
renderWebpage();