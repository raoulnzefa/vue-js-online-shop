<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="card col-md-4 blog-sidebar bg-inverse">
          <ul class="admin-menu">
            <!-- Links are to sibling routes -->
            <li><router-link to="/admin">View Products</router-link></li>
            <li><router-link to="/admin/new">New Product</router-link></li>
          </ul>
        </div>
        <!-- Outlet for children routes -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>