<template>
<div class="masthead container-fluid py-5 mb-3">
  <!-- Masthead -->
    <span class="logo mx-auto rounded-circle mb-4"></span>
    <h1>Repostería casera desde el 1998</h1>
    <div class="w-75 mx-auto">
      <p class="lead">El sazón de cocina que te recuerda a tu hogar. Más de 20 años de experiencia, seguimos trabajando para darte la mejor calidad y sabor. Te ofrecemos pasteles, cupcakes, desayunos gourmets 100% casero para toda ocasión y más.</p>
      <hr class="my-4">
      <div class="d-flex row justify-content-md-center mb-5">
        <div class="col-md mb-3 mb-md-0">
          <ButtonComponent href="#" text="Ver Pasteles"></ButtonComponent>
        </div>
        <div class="col-md">
          <ButtonComponent href="#" text="Cajas de Desayuno"></ButtonComponent>
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
          <p class="">En 1998 encontre mi pasión en la reposteria, con el apoyo de mi familia y amigos decidí compartir mi pasión con las personas y emprendi Cecy Ponce Cakes. Conforme pasan los años he aprendido nuevas técnicas y mi amor por la cocina sigue creciendo.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Catalog -->
<div class="container catalog py-5 mb-3">
  <div class="row my-5 my-md-0">
    <span class="col-md-6 d-block cake-img"></span>
    <div class="col-md-6">
      <div class="d-md-flex align-items-center">
        <div class="py-4">
          <h2 class="my-3">Catálogo <b>Pasteles</b></h2>
          <p class="text-md-justify p-3">Encuentra el pastel perfecto para toda ocasión. Te ofrecemos una variedad de sabores desde milky way, zanahoria, cheesecake de piña colada, entre otros. Contamos con servicio a domicilio en Monterrey y área metropolitana.</p>
          <ButtonComponent href="#" text="CATÁLOGO PASTELES"></ButtonComponent>
        </div>
      </div>
    </div>
  </div>
  <div class="row my-5 my-md-0">
    <div class="col-md-6">
      <div class="d-md-flex align-items-center">
        <div class="py-4">
          <h2 class="my-3">Catálogo <b>Cajas de Desayuno</b></h2>
          <p class="text-md-justify p-3">La opción perfecta para desayunos, el mejor sabor y una categoria gourmet que estamos seguros, te encantara. Puedes armar tu desayuno con una variedad de opciones, da clic para ver más.</p>
          <ButtonComponent href="#" text="CAJAS DE DESAYUNO"></ButtonComponent>
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
          <p class="d-block">No hay nada mejor que disfrutar de un tiempo cocinando para disfrutar el sazón casero e ir mejorando día con día la calidad de todo lo que les ofrecemos, hecho 100% casero, desde un hogar hasta sus manos.</p>
        </div>
      </div>
    </div>
    <div class="col-md-2 d-md-flex align-items-center"><span class="d-block reel-img mx-auto my-3"></span></div>
    <div class="col-md-2 d-md-flex align-items-center"><span class="d-block reel-img mx-auto my-3"></span></div>
    <div class="col-md-2 d-md-flex align-items-center"><span class="d-block reel-img mx-auto my-3"></span></div>
  </div>
</div>

  <MiniCart/>
</template>

<script>
import ButtonComponent from "@/components/Button";
import MiniCart from '@/components/MiniCart'

export default {
  name: 'Home',
  components: {
    ButtonComponent,
    MiniCart
  },
  mounted (){
    (function(d, m){
      var kommunicateSettings =
          {"appId":"86ca324ffa6929099db80cb40448f7f5","popupWidget":true,"automaticChatOpenOnNavigation":true};
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

.cake-img {
  background-image:url("/img/pastel.jpg");
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
}

.box-img {
  background-image:url("/img/desayuno2.jpg");
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
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
