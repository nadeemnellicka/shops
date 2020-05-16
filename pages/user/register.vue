<template>
    <div id="register">
        <h3 class="text-center text-white pt-5">Register form</h3>
        <div class="container">
            <div id="register-row" class="row justify-content-center align-items-center">
                <div id="register-column" class="col-md-6">
                    <div id="register-box" class="col-md-12">
                            <h3 class="text-center text-info">Register</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Name:</label><br>
                                <input type="text"  v-model="register.name"  class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="username" class="text-info">Email:</label><br>
                                <input type="text"  v-model="register.email"  class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input type="password"  v-model="register.password" class="form-control">
                            </div>
                             <!-- <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input type="password"  v-model="register.confirmPassword" class="form-control">
                            </div> -->
                            <div class="form-group">
                                <button  @click="userRegister" class="btn btn-info btn-md">Register</button>
                            </div>
                            <div id="register-link" class="text-right">
                                <nuxt-link  to='/user/login' class="text-info">Login here</nuxt-link>
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
#register .container #register-row #register-column #register-box {
  margin-top: 120px;
  max-width: 600px;
  height: 400px;
  border: 1px solid #9C9C9C;
  background-color: #EAEAEA;
}
#register .container #register-row #register-column #register-box #register-form {
  padding: 20px;
}
#register .container #register-row #register-column #register-box #register-form #register-link {
  margin-top: -85px;
}
</style>


<script>

 export default {
   auth: false,
   name: "userRegistration",
      data() {
        return {
          register: {
            name: 'shinas kasim',
            email: 'shinas1@gmail.com',
            password: '12345',
            confirmPassword: '12345',
          }
        }
      },
       mounted: function () {
      },
      methods: {
      async userRegister() {
      try {
        let response = await this.$axios.post('user/register',this.register);
        if(response.data.status='success'){
          let response = await this.$auth.loginWith('local', { data: this.register })
           this.$router.push('/customer/SearchShop');
        }
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