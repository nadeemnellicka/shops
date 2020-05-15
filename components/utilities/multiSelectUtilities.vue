

<template>
	<div class='form-group row'>
		<label class="typo__label col-sm-2 col-form-label">{{_label}}</label>
		<div class="col-sm-8">
			<div id="mulitSelectUtility" class="col-sm-8">
				<multiselect   :options="region" :multiple="true"  :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true">
				</multiselect>
			</div>
		</div>
	</div>
</template>

<script>
  import Multiselect from 'vue-multiselect';
  import helper from "../../helper.js";

 export default {
    components: { Multiselect },
      name: "mulitSelectUtility",
      props:['url','_label'],
      data() {
        return {
          region: []
        }
      },
      mounted: function () {
        this.categoriesData();
      },

      methods: {
         async categoriesData() {
          try {
            const res = await helper.instance.get(this.url);
            this.region=res.data.data
          } catch (e) {
            console.error(e);
          }
        },
       
      }}
 
  </script>