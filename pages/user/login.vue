<template>
    <div id="login">
        <h3 class="text-center text-white pt-5">Login form</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Email:</label><br>
                                <input type="text"  v-model="login.email"  class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input type="password"  v-model="login.password" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br>
                                <button  @click="userLogin" class="btn btn-info btn-md">Login</button>
                                <button  @click="userGoogleLogin" class="btn btn-info btn-md">Google</button>
                            </div>
                            <div></div>
                            <div id="register-link" class="text-right">
                                <nuxt-link  to='/user/register' class="text-info">Register here</nuxt-link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    body {
  margin: 0;
  padding: 0;
  background-color: #17a2b8;
  height: 100vh;
}
#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  height: 350px;
  border: 1px solid #9C9C9C;
  background-color: #EAEAEA;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login .container #login-row #login-column #login-box #login-form #register-link {
  margin-top: -85px;
}
</style>


<script>
 export default {
   auth: false,
   name: "userLogin",
      data() {
        return {
        login: {
          email: 'shinas@gmail.com',
          password: '12345'
      }
        }
      },
       mounted: function () {
      },
      methods: {
      async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        this.$router.push('/customer/SearchShop');
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
       async userGoogleLogin() {
      try {
        let response = await this.$auth.loginWith('google')
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },


      },
        head() {
        return {
          title: "Increase your sales",
          meta: [
          {
            hid:"search",
            name:"Make your shop more reachable",
            content:"Search any product anywhere"
          }
        ]
      }
    }
    };
    </script>