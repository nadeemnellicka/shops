<template>
    <div id="CreateShopApp">
      <AppHeader />
      <form><h1>Create Shop</h1>
        <div class="form-group col-sm-10">
          <div class='form-group row'>
              <label  class="col-sm-2 col-form-label">Name*</label>
              <div class="col-sm-8">
              <input  type="text" class="form-control" v-model="formData.name" placeholder="Eg.Medi-Store" />
              <!-- <input  type="text" class="form-control" v-model.trim="$v.name.$model" :class="{'is-invalid' :$v.name.$error,'isvalid':!$v.name.$invalid}" placeholder="Eg.Medi-Store" /> -->
            </div>
          </div>
          <div class="form-group row">
            <label  class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-8">
                <input type="email" class="form-control" v-model="formData.email"  placeholder="Email">
          </div>
          </div>
          <div class="form-group row">
            <label  class="col-sm-2 col-form-label">Phone</label>
            <div class="col-sm-8">
                <input type="email" class="form-control"  v-model="formData.phone" placeholder="9946122001">
            </div>
          </div>
          <div class='form-group row'>
              <label class="col-sm-2 col-form-label">Address1</label>
              <div class="col-sm-8">
              <input  type="text" class="form-control" v-model="formData.address_1" id="address"  placeholder="Eg.1st Floor,Malabar Plaza" />
            </div>
          </div> 
          <div class='form-group row'>
              <label class="col-sm-2 col-form-label">Address2</label>
              <div class="col-sm-8">
              <input  type="text" class="form-control" v-model="formData.address_2"  placeholder="Eg.Mekkunnu,Chokli" />
            </div>
          </div>
          <div class='form-group row'>
              <label class="col-sm-2 col-form-label">Pincode</label>
              <div class="col-sm-8">
              <input  type="text"  class="form-control" v-model="formData.pincode"  @keyup="getLocation"   placeholder="Eg.670675" />
            </div>
          </div>
           <div class='form-group row'>
              <label class="col-sm-2 col-form-label">Region</label>
              <div class="col-sm-8">
              <input  type="text" class="form-control" readonly="" v-model="formData.division_name"    />
            </div>
          </div> 
          <div class='form-group row'>
              <label class="col-sm-2 col-form-label">State</label>
              <div class="col-sm-8">
              <input  type="text" class="form-control"  readonly="" v-model="formData.state"  />
            </div>
          </div>
          <div class='form-group row'>
              <label class="col-sm-2 col-form-label">Country</label>
              <div class="col-sm-8">
              <input  type="text" class="form-control"  readonly="" v-model="formData.country"  />
            </div>
          </div>
        
         <div class='form-group row'>
            <label class="typo__label col-sm-2 col-form-label">Select Caregories</label>
            <div class="col-sm-8">
              <multiselect v-model="formData.categories" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true">
              </multiselect>
            </div>
          </div>
      </div>
    </form>
    <div class='form-group col-sm-4'>
      <button class="btn btn-success" @click="saveShop">Save</button>
    </div>
  </div>
</template>
<script>


  import Multiselect from 'vue-multiselect';
  import AppHeader from '../../components/AppHeader';
  import helper from "../../helper.js";
  export default {
    components: { Multiselect,AppHeader},
      name: "CreateShopApp",
      data() {
        return {
          formData :{},
          name:'',
          options: []
        }
      },
      mounted: function () {
        this.categoriesData();
      },
      methods: {
         async categoriesData() {
          try {
            var url = `masters/category`;
            const res = await helper.instance.get(url);
            this.options=res.data.data
          } catch (e) {
            console.error(e);
          }
        },
        async getLocation() {
          try {
            const res = await helper.instance.get( `masters/pincodeDetail/` + this.formData.pincode);
            this.formData.division_name = res.data.pincode.division_name;
            this.formData.country = res.data.country.name;
            this.formData.state = res.data.state.name;

          } catch (e) {
            console.error(e);
          }
        },
          async saveShop() {
          try {
            await helper.instance.post('user/addShop',this.formData);
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