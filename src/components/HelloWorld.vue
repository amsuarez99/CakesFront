<template>
<div class="masthead container-fluid bg-dark text-white py-5 mb-4">
  <!-- Masthead -->
    <span class="logo mx-auto rounded-circle mb-4"></span>
    <h1 class="display-6">Repostería casera desde el 1998</h1>
    <div class="w-75 mx-auto">
      <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in, dolores accusantium sed eaque provident eos blanditiis beatae. Odio nihil perspiciatis quia. Praesentium ipsa, dicta explicabo quam molestiae eveniet debitis.</p>
      <hr class="my-4">
      <div class="d-flex row justify-content-md-center mb-5">
        <div class="col-md mb-3 mb-md-0">
          <a class="masthead-cta btn" href="#" role="button">Lorem Ipsum</a>
        </div>
        <div class="col-md">
          <a class="masthead-cta btn mr-4" href="#" role="button">Lorem Ipsum</a>
        </div>
      </div>
      <div class="d-flex socials justify-content-center justify-content-md-end">
        <span class="media rounded-circle">
        </span>
        <span class="media rounded-circle">
        </span>
        <span class="media rounded-circle">
        </span>
      </div>
    </div>
</div>
  
  <!-- Intro -->
  <div class="container-fluid intro">
    <div class="row">
      <div class="col-md-4 photo-container">
        <span class="photo rounded-circle"></span>
      </div>
      <div class="col-md-7 intro"> 
        <h1 class="display-6">Repostería casera desde el 1998</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
      </div>
    </div>
  </div>



  <!-- Catalog -->

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 767px) {
  .photo-container {
    border-bottom: 3px solid lightgray;
  }
}


.masthead {
  background-color: #4F4A4A;
}

.media {
  display: block;
  width: 3rem;
  height: 3rem;
  background-color:coral;
  margin-left: 1rem;
}

.photo {
  display: block;
  width: 15em;
  height: 15em;
  background-color: aqua;
}

.photo-container {
  border-right: 3px solid lightgray;
}

.intro>* {
  text-align: left;
}

.logo {
  display: block;
  width: 15rem;
  height: 15rem;
  background-color: #4E4E4E;
}

.masthead-cta {
  width: 15rem;
  border-radius: 5rem;
  padding: 1rem;
  background-color: #C4C4C4;
  color: black;
  font-weight: 500;
} 

.media {
  background-color: #4E4E4E;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
