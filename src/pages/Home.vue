<!-- ./src/components/Home.vue -->
<template>
  <div class="wrapper">
    <div class="title" style="margin-top: 1.5rem;">
      <h1>{{msg}}</h1>
    </div>
    <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
         <div class="col-md-6 px-0">
          <h1 class="display-4 font-italic">Featured Products</h1>
          <p class="lead my-3">All your favourite products here. </p>
        </div>
    </div>
 <!-- New Product Row -->
<div class="row mb-4">   
   <div class="card-flex mb-4 box-shadow" style="width: 18rem; margin: 0 auto;">
    <img class="card-img-top" src="https://via.placeholder.com/277x180" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Product Name</h5>
       <h6 class="card-subtitle mb-2 text-muted">Product Price</h6>
      <p class="card-text">Product Description.</p>
    <a href="#" class="btn btn-primary">Add To Cart</a>
    </div>
  </div>
  <div class="card-flex mb-4 box-shadow" style="width: 18rem;  margin: 0 auto;">
    <img class="card-img-top" src="https://via.placeholder.com/277x180" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Product Name</h5>
       <h6 class="card-subtitle mb-2 text-muted">Product Price</h6>
      <p class="card-text">Product Description.</p>
    <a href="#" class="btn btn-primary">Add To Cart</a>
    </div>
  </div>
    <div class="card-flex mb-4 box-shadow" style="width: 18rem;  margin: 0 auto;">
    <img class="card-img-top" src="https://via.placeholder.com/277x180" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Product Name</h5>
       <h6 class="card-subtitle mb-2 text-muted">Product Price</h6>
      <p class="card-text">Product Description.</p>
    <a href="#" class="btn btn-primary">Add To Cart</a>
    </div>
  </div>
  <div class="card-flex mb-4 box-shadow" style="width: 18rem;  margin: 0 auto;">
    <img class="card-img-top" src="https://via.placeholder.com/277x180" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Product Name</h5>
       <h6 class="card-subtitle mb-2 text-muted">Product Price</h6>
      <p class="card-text">Product Description.</p>
    <a href="#" class="btn btn-primary">Add To Cart</a>
    </div>
  </div>
   <div class="card-flex mb-4 box-shadow" style="width: 18rem;  margin: 0 auto;">
    <img class="card-img-top" src="https://via.placeholder.com/277x180" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Product Name</h5>
       <h6 class="card-subtitle mb-2 text-muted">Product Price</h6>
      <p class="card-text">Product Description.</p>
    <a href="#" class="btn btn-primary">Add To Cart</a>
    </div>
  </div>
</div>
</div> 
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to Kutloanos Online Shop"
    };
  }
};
</script>
