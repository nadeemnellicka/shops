<template>
    <div id="login">
        <h3 class="text-center text-white pt-5">Login form</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br>
                                <input type="text"  v-model="formData.email"  class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input type="password"  v-model="formData.password" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></span></label><br>
                                <button  @click="login" class="btn btn-info btn-md">Login</button>
                            </div>
                            <div id="register-link" class="text-right">
                                <a href="#" class="text-info">Register here</a>
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
  height: 320px;
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

  import axios from "axios";
 export default {
   auth: false,
   name: "userLogin",
      data() {
        return {
          formData :{},
        }
      },
       mounted: function () {
      },
      methods: {
        // login: function(){
        //   try {
        //     axios.post('http://127.0.0.1:8000/api/v1/user/login',this.formData);
        //   } catch (e) {
        //     console.error(e);
        //   }
        // },

         async login() {
          try {
            const res = await axios.post('http://127.0.0.1:8000/api/v1/user/login',this.formData);
            if(res.data.status=='success'){
              localStorage.setItem('key', res.data.access_token);
              localStorage.setItem('user_name', res.data.user.name);
              this.$router.push('/customer/SearchShop');
              // window.location.replace("/customer/SearchShop");
            }else{
               alert('eee'); 
            }
            console.log(res);
          } catch (e) {
            console.error(e);
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