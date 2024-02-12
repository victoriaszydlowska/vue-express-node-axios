
<template>
<html>
<h2>About</h2>
    <p class="description-one">This is a full stack web application that allows user to check all the links 
    connected to the URL provided in the form within the same domain. <br/>  It uses Vue.js as a front-end framework with back-end being Node.js and Express. Axios allow fetching data and sending data between back-end and front-end. It receives data from Express back-end. It sends the URL provided in the form to the back-end, acts on data to then receiving a response that is generated on the web page. The body-parser is a middleware that allows accessing data sent from Axios on the Node.js and Express side and using it in the next stages. Require module allows to fetch HTML content of the provided URL. <br/> Application handles some of the errors. It returns a list of links, sends a message if there aren't any found, handles status responses received or catches an error (try, catch to return an invalid link). <br/> <br/> <span class="learn-more" @click="goto('more')"> Read more -- click here </span></p>
<img src="../assets/https-text.png" alt="graphic with some keywords related to web, http, response" class="https-graphic">
<h2>More</h2>
<p class="description-two" ref="more">The project uses graphic design and picture edited in GIMP. The graphic design is done from the scratch and then animated with the use of CSS animations. Image used in the header as a background is taken by me using Nikon D5300 with Nikon 50mm f1.4 lens, and edited in GIMP. There is no external CSS librabry/framework used. There are some responsiveness and accessibility adjustments although there is still a lot to be fixed. This is not a final product. The project is still lacking some interactivity, UX/UI design and the function that return all links from a given URL. There is yet a for loop to be implemented to return all the links from a domain.</p>
</html> 
</template> 

<script>
export default { 
  methods: {
    goto(refName) {
        var element = this.$refs[refName];
        var top = element.offsetTop;
        window.scrollTo(0, top);
    }
},

}
</script>
<style>
h2{
  font-size:2rem;
}
.description-one, .description-two{ 
    font-size:1.1rem;
    
}

h2, .description-one, .description-two{ 
    padding:0.5rem 4rem 02rem 4rem;
    text-align:left;


}
.learn-more{
    font-weight:bold;
    font-size:1.2rem;


}

.description-two{
    padding-bottom:10rem;
}

.description-one{
    padding-bottom:4rem;
}
img {
    max-width: 100%;

}

@keyframes httpsAnimation{
  0%    { opacity: 0.25; }
  100%  { opacity: 1; }
}

.https-graphic {
  animation: httpsAnimation 2.5s infinite;
  animation-direction: alternate-reverse;
  animation-timing-function: ease-in-out;
}
</style>