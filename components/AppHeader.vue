<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-item href="#">Link</b-nav-item> -->
        <b-nav-item href="#"><nuxt-link to='/customer/SearchShop'>Search Shop</nuxt-link></b-nav-item>
        <b-nav-item href="#"><nuxt-link to='/shop/create'> Create Shop</nuxt-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       <!--  <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <b-nav-item-dropdown v-if="shops.length >0" text="My Shops" right>
          <b-dropdown-item v-for="shop in shops"  href="#">{{shop.name}}</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>nadddy</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>

  import Multiselect from 'vue-multiselect';
  import helper from "../helper.js";
  export default {
      name: "AppHeader",
      data() {
        return {
          user_name :{},
          shops :[],
        }
      },
      mounted: function () {
        // this.user_name=localStorage.getItem("user_name");
        this.userShops();
      },
      methods: {
          async userShops() {
          try {
            var url = `user/shops`;
            const res = await helper.instance.get(url);
            this.shops=res.data.shops
          } catch (e) {
            console.error(e);
          }
        },
      },

    };
    </script>