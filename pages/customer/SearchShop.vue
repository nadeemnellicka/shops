<template>
    <div id="searchShopApp">
      <form>
        <h1>Search Item</h1>
        <div class="form-group col-sm-10">



           <!-- <region :formdata="formData"  /> -->
            <div class='form-group row'>
            <label class="typo__label col-sm-2 col-form-label">Select Region</label>
            <div class="col-sm-8">
              <multiselect   :options="regions" :multiple="true" v-model="formData.region" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true">
              </multiselect>
            </div>
          </div>



          <div class='form-group row'>
            <label class="typo__label col-sm-2 col-form-label">Select Caregories</label>
            <div class="col-sm-8">
              <multiselect v-model="formData.categories" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true">
              </multiselect>
            </div>
          </div>


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
  export default {
    components: { },
      name: "searchShopApp",
      data() {
        return {
          formData :{},
          options: [],
          regions: [],
        }
      },
      mounted: function () {
        this.categoriesData();
        this.regionData();
      },
      methods: {
         async categoriesData() {
          try {
            const res = await this.$axios.get('masters/category');
            this.options=res.data.data
          } catch (e) {
            console.error(e);
          }
        },
        async regionData() {
          try {
            const res = await this.$axios.get(`masters/region`);
            this.regions=res.data.data
          } catch (e) {
            console.error(e);
          }
        },


        saveShop: function(){
          try {
            this.$axios.post('user/searchProduct',this.formData);
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