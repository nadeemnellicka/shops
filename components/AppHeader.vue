<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse v-if="$auth.loggedIn" id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><nuxt-link to='/customer/SearchShop'>Search Shop</nuxt-link></b-nav-item>
        <b-nav-item href="#"><nuxt-link to='/shop/create'> Create Shop</nuxt-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>{{$auth.user.name}} </em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="$auth.logout()" href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse> 

      <b-collapse v-else id="nav-collapse1" is-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#"><nuxt-link to='/user/login'>Login</nuxt-link></b-nav-item>
            <b-nav-item href="#"><nuxt-link to='/user/register'>Register</nuxt-link></b-nav-item>
        </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</div>
</template>

<script>
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
            const res = await $this.axios.get(url);
            this.shops=res.data.shops
          } catch (e) {
            console.error(e);
          }
        },
          async logout() {
          try {
            var url = `user/logout`;
            const res = await $this.axios.get(url);
            this.shops=res.data.shops
          } catch (e) {
            console.error(e);
          }
        },
      },

    };
    </script>