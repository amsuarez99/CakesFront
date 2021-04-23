<template>
<div class="masthead container-fluid py-5 mb-3">
  <!-- Masthead -->
    <span class="logo mx-auto rounded-circle mb-4"></span>
    <h1>Repostería casera desde el 1998</h1>
    <div class="w-75 mx-auto">
      <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in, dolores accusantium sed eaque provident eos blanditiis beatae. Odio nihil perspiciatis quia. Praesentium ipsa, dicta explicabo quam molestiae eveniet debitis.</p>
      <hr class="my-4">
      <div class="d-flex row justify-content-md-center mb-5">
        <div class="col-md mb-3 mb-md-0">
          <ButtonComponent href="#" text="Lorem Ipsum"></ButtonComponent>
        </div>
        <div class="col-md">
          <ButtonComponent href="#" text="Lorem Ipsum"></ButtonComponent>
        </div>
      </div>
      <div class="d-flex socials justify-content-center justify-content-md-end">
        <a href="" class="bg-brown rounded-circle mx-1">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a href="" class="bg-brown rounded-circle mx-1">
          <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </a>
        <a href="" class="bg-brown rounded-circle mx-1">
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>
      </div>
    </div>
</div>

<!-- Intro -->
<div class="container-fluid py-5 mb-3 secondary-pink">
  <div class="row">
    <div class="col-md-4 photo-container">
      <!-- photo -->
      <span class="photo rounded-circle mx-auto mb-4"></span>
    </div>
    <div class="col-md-8 d-flex">
      <div class="d-flex flex-row align-items-center">
        <div class="p-5 intro-text">
          <h2 class="display-6">Soy Cecilia Ponce</h2>
          <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Catalog -->
<div class="container catalog py-5 mb-3">
  <div class="row my-5 my-md-0">
    <span class="col-md-6 d-block box-img"></span>
    <div class="col-md-6">
      <div class="d-md-flex align-items-center">
        <div class="py-4">
          <h2 class="my-3">Catálogo <b>Pasteles</b></h2>
          <p class="text-md-justify p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione beatae reprehenderit consequuntur, maxime praesentium laboriosam, doloribus sunt magni illo officia tempora voluptas. Perferendis, voluptatibus! In necessitatibus adipisci consequatur unde libero?</p>
          <ButtonComponent href="#" text="Lorem Ipsum"></ButtonComponent>
        </div>
      </div>
    </div>
  </div>
  <div class="row my-5 my-md-0">
    <div class="col-md-6">
      <div class="d-md-flex align-items-center">
        <div class="py-4">
          <h2 class="my-3">Catálogo <b>Cajas de Desayuno</b></h2>
          <p class="text-md-justify p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione beatae reprehenderit consequuntur, maxime praesentium laboriosam, doloribus sunt magni illo officia tempora voluptas. Perferendis, voluptatibus! In necessitatibus adipisci consequatur unde libero?</p>
          <ButtonComponent href="#" text="Lorem Ipsum"></ButtonComponent>
        </div>
      </div>
    </div>
    <span class="col-md-6 d-block box-img"></span>
  </div>
</div>

<!-- Reel -->
<div class="container-fluid reel secondary-pink py-5">
  <div class="row">
    <div class="col-md-6 d-flex">
      <div class="d-flex flex-row align-items-center">
        <div class="p-5 reel-text">
          <h2 class="d-block">Un poco de mi cocina</h2>
          <h2 class="d-block">Horneado Casero</h2>
          <p class="d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus sed fuga delectus dolores laudantium magni laborum doloremque dolore, ab explicabo sint exercitationem iure molestias dignissimos, dolorem quidem eius ad consequatur.</p>
        </div>
      </div>
    </div>
    <div class="col-md-2 d-md-flex align-items-center"><span class="d-block reel-img mx-auto my-3"></span></div>
    <div class="col-md-2 d-md-flex align-items-center"><span class="d-block reel-img mx-auto my-3"></span></div>
    <div class="col-md-2 d-md-flex align-items-center"><span class="d-block reel-img mx-auto my-3"></span></div>
  </div>
</div>
</template>

<script>
import ButtonComponent from "@/components/Button";
export default {
  name: 'Home',
  components: {
    ButtonComponent
  },
  mounted (){
    (function(d, m){
      var kommunicateSettings = {"appId":"1731a868491b9a64cc451a3f8887e7400","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  line-height: 1.7rem;
}

.reel p {
  font-size: 0.8rem;
}

.reel h2:nth-child(1) {
  font-size: 1.5rem;
  font-weight: bolder;
}
.reel h2:nth-child(2) {
  font-size: 1.2rem;
}
.catalog p {
  font-size: 0.8rem;
}

.box-img {
  min-height: 8rem;
}

.reel-img {
  width: 8rem;
  height: 8rem;
}

.media {
  display: block;
  width: 3rem;
  height: 3rem;
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

.intro-text > * {
  text-align: left;
}

.reel>* {
  text-align: right;
}

.reel-img {
  background-color: #4E4E4E;
}


.logo {
  display: block;
  background-color:#4E4E4E;
  width: 15rem;
  height: 15rem;
}

@media screen and (max-width: 767px) {
  .photo-container {
    border-bottom: 3px solid lightgray;
  }
  .intro-text > p, .intro-text > h2 {
    text-align: center;
  }
  .intro-text > p, .intro-text > h2 {
    text-align: center;
  }
  .reel-text > p, .reel-text > h2 {
    text-align: center;
  }
  .reel-text > p, .reel-text > h2 {
    text-align: center;
  }

  .reel-img {
    width: 15rem;
    height: 15rem;
  }
}

.box-img {
  background-color:#4E4E4E;
}

.socials > a {
  display: flex;
  width: 3rem;
  height: 3rem;
}

svg {
  color: whitesmoke;
  align-self: center;
  display: block;
  margin: 0 auto;
}
</style>