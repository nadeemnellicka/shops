<template>
    <div id="searchShopApp">
  <AppHeader />
      <form>
        <h1>Search Item</h1>
        <div class="form-group col-sm-10">


            <MultiselectUtilities url='masters/region' _label='Select Region' v-model="formData.region"/>
            <MultiselectUtilities url='masters/category' _label='Select Category' v-model="formData.category" />
          
          <div class='form-group row'>
              <label class="col-sm-2 col-form-label">Desciption</label>
              <div class="col-sm-8">
                <textarea class="form-control" v-model="formData.description"  /></textarea>
              </div>
          </div>


       
    <div class='form-group col-sm-4'>
    </div>
      </div>
    </form>
      <button class="btn btn-success" @click="saveShop()">Save</button>
  </div>
</template>
<script>
  // import Multiselect from 'vue-multiselect';
  import MultiselectUtilities from '../../components/utilities/multiselectUtilities';
  import AppHeader from '../../components/AppHeader';
  import helper from "../../helper.js";
  export default {
    components: { AppHeader,MultiselectUtilities},
      name: "searchShopApp",
      data() {
        return {
          formData :{},
          options: [],
          regions: [],
        }
      },
      mounted: function () {
      },
      methods: {
        saveShop: function(){
          try {
            helper.instance.post('user/searchProduct',this.formData);
          } catch (e) {
            console.error(e);
          }
        },
      },
    head() {
    return {
      title: "Search any product anywhere",
      meta: [
        {
          hid:"search",
          name:"Search any product anywhere",
          content:"Search any product anywhere"
        }
      ]
    }
  }
    };
    </script>