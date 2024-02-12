<template>
<div id="all-content">
<h1> wUeRbL </h1>
<div class="container-one">
  <p class="typed-one"><span style="font-size: 2.7rem; color:black"> Scroll down </span> and  discover the <span style=" color:white;opacity:0.8">links </span> your web page is connected to. </p>
</div>
<div class="container-two">
   <p class="typed-two">Links. Web crawler. WWW. HTTPS. Request. Response. HTTP. fetch. web. search. development. </p>
</div>


</div>
</template> 

<script>
export default { 

}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
#all-content{ 
     background-image: url("../assets/header-image.JPG");
     background-repeat: no-repeat;
            background-size: 100%;
              padding-bottom:10vw;;
                  margin:0rem;

}
h1 { 
    text-align:left;
    padding:3.5rem;
    padding-bottom:10rem;
    font-family: 'Anton', sans-serif;
  
  
}
@media only screen and (max-width: 1068px) {
  /* For mobile phones: */
    h1{
      padding:1.1rem; 
    }
  }



.container-one{
  font-family: "arial";
  font-size: 2rem;
   display: grid;
  place-items: center;
  width: 100%;
  font-weight:bold;
  color:gray;
}
.container-two{
  font-family: "arial";
  font-size: 1.4rem;
  display: grid;
  place-items: center;
  width: 100%;
  opacity:0.6;
  font-weight:bold;
}

.typed-one {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid;
  width: 0;
  animation: typing 3s steps(30, end) forwards, blinking 2s infinite;
}
.typed-two {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid;
  width: 0;
  animation: typing 4.5s infinite steps(40, end) forwards, blinking 1s infinite;
}
.typed-three {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid;
  width: 0;
  animation: typing 5s steps(30, end) forwards, blinking 1s infinite;
}
  
@keyframes typing {
  from { width: 0 }
  to { width: 90% }
}

@keyframes blinking {
  0% {border-color: transparent}
  50% {border-color: black}
  100% {border-color: transparent}
}

@media only screen and (max-width: 1000px) {
 .container-two{
  font-size: 0.9rem;
}

}
@media only screen and (max-width: 1000px) {
 .container-one{
  font-size: 1.1rem;
}

}

</style>