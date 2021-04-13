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
<div class="container-fluid intro my-4">
  <div class="row">
    <div class="col-md-4 photo-container">
      <span class="photo rounded-circle mx-auto mb-4"></span>
    </div>
    <div class="col-md-8 d-flex"> 
      <div class="d-flex flex-row align-items-center">
        <div class="p-5">  
          <h2 class="display-6 d-block">Soy Cecilia Ponce</h2>
          <p class="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Reel -->
<div class="container-fluid reel my-4">
  <div class="row">
    <div class="col-md-6 d-flex"> 
      <div class="d-flex flex-row align-items-center">
        <div class="p-5">  
          <h2 class="display-6 d-block">Un poco de mi cocina</h2>
          <h2 class="display-7 d-block">Horneado Casero</h2>
          <p class="d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus sed fuga delectus dolores laudantium magni laborum doloremque dolore, ab explicabo sint exercitationem iure molestias dignissimos, dolorem quidem eius ad consequatur.</p>
        </div>
      </div>
    </div>
    <div class="col-md-2 d-md-flex align-items-center"><span class="reel-img w-100 h-25 d-block"></span></div>
    <div class="col-md-2 d-md-flex align-items-center"><span class="reel-img w-100 h-25 d-block"></span></div>
    <div class="col-md-2 d-md-flex align-items-center"><span class="reel-img w-100 h-25 d-block"></span></div>
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
  background-color: #4E4E4E;
}

.photo-container {
  border-right: 3px solid lightgray;
}

.intro>* {
  margin-left: 1rem;
  text-align: left;
}

.reel {
  background-color: #D6D6D6;
}

.reel>* {
  text-align: right;
}

.reel-img {
  background-color: #4E4E4E;
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
