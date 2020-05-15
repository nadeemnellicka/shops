 
<template>
 <div class='form-group row'>
            <label class="typo__label col-sm-2 col-form-label">Select Region</label>
            <div class="col-sm-8">
              <multiselect   :options="regions" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true" @input="updateBranchProductCategoryArr(value)">
              </multiselect>
            </div>
          </div>
</template>

<script>
  import axios from "axios";
  import Multiselect from 'vue-multiselect';

  export default {
    components: { Multiselect},
      name: "region",
      data() {
        return {
          regions: [],
        }
      },
      props: ['formdata'],
      mounted: function () {
        this.regionData();
      },
      methods: {
        async regionData() {
          try {
            const res = await axios.post(`http://iwant.test:8081/api/pincode/regions`);
            debugger;
            this.regions=res.data.regions
          } catch (e) {
            console.error(e);
          }
        },
      },
      updateBranchProductCategoryArr(option){
      	this.formdata.regions=option;
      }
    };
    </script>