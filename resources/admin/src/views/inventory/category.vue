<template>
  <div class="body">
    <el-row>
      <el-col :span="14" :offset="1">
        <div class="category">
          <el-card class="category_card">
            <div slot="header" class="clearfix">
              <span>Category List:</span>              
            </div>

            <!--<add-category></add-category>-->
            <category-list></category-list>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
//import AddCategory from "./components/add-category";
import CategoryList from "./components/category-list";
export default {
  components: { CategoryList},
 
};
</script>

<style scoped>
.category {
  margin-top: 5%;
  width: 820px;
}
</style>