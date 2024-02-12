### Vue, Node, Express, Axios web application

Please run npm install to setup a project. Open two powershell terminals. And run npm run serve in one of them, and node index.js in another to run both front-end and back-end.

Description has been included in the content of the web application as well.

This is a full stack web application that allows user to check all the links connected to the URL provided in the form within the same domain.
It uses Vue.js as a front-end framework with back-end being Node.js and Express. Axios allow fetching data and sending data between back-end and front-end. It receives data from Express back-end. It sends the URL provided in the form to the back-end, acts on data to then receiving a response that is generated on the web page. The body-parser is a middleware that allows accessing data sent from Axios on the Node.js and Express side and using it in the next stages. Require module allows to fetch HTML content of the provided URL.
Application handles some of the errors. It returns a list of links, sends a message if there aren't any found, handles status responses received or catches an error (try, catch to return an invalid link).

The project uses graphic design and picture edited in GIMP. The graphic design is done from the scratch and then animated with the use of CSS animations. Image used in the header as a background is taken by me using Nikon D5300 with Nikon 50mm f1.4 lens, and edited in GIMP. There is no external CSS library/framework used. There are some responsiveness and accessibility adjustments although there is still a lot to be fixed. This is not a final product. The project is still lacking some interactivity, UX/UI design  and the function that return all links from a given URL. There is yet a for loop to be implemented to return all the links from a domain.


## References: 
https://chat.openai.com/c/0405eed0-9a34-4dd8-a6d9-688b103e2453 <br>
https://www.scaler.com/topics/expressjs-tutorial/integrating-express-with-vue/ <br>
https://www.youtube.com/watch?v=C0pXaNchNTA&t=2835s <br>
https://www.boot.dev/learn/build-link-analyzer <br>
https://reintech.io/blog/getting-started-with-vuejs-and-nodejs?fbclid=IwAR1bgXwD01YgX-2JLcOxx5VcSViVgBia-dmAy2aRziI7Jo8NDmtuDyMmcb4 <br>
https://www.bezkoder.com/serve-vue-app-express/ <br>
https://www.w3schools.com/cssref/pr_background-image.php <br>
https://www.youtube.com/watch?v=gVb1g5PF76Y <br>
https://blog.hubspot.com/website/typing-animation-css#:~:text=How <br>
https://fonts.google.com/specimen/Anton <br>
https://weekendprojects.dev/posts/how-to-create-css-animation-fade-in-with-examples/?utm_content=cmp-true <br>
https://masteringjs.io/tutorials/vue/elements-in-iteration-expect-to-have-v-bind-key <br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from <br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set <br>
https://www.codingbeautydev.com/blog/vue-change-style-on-click <br>
https://stackoverflow.com/questions/61435070/scroll-down-when-clicked-with-vue-js <br>
https://www.w3schools.com/html/html_accessibility.asp <br>
https://formatter.org/ <br>
Help with some of the later stages of the project, logic, fixing errors and help with error and response handling provided by my brother, Adrian Szydlowski (https://pl.linkedin.com/in/adrian-szyd%C5%82owski-30729619b) 

