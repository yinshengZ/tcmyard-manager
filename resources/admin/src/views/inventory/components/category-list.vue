<template>
  <div>
    <el-row>
      <el-table :data="category_list" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180">
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Category" width="180">
        <template slot-scope="{ row }">
          <span>{{ row.categories }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Added At" width="180">
        <template slot-scope="{ row }">
          <span>{{ convert_date(row.created_at) }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Operations" width="220">
        <template slot-scope="{ row }">
          <el-button type="primary" @click="show_update_form(row.id)">
            Update
          </el-button>

          <el-button type="danger" @click="confirm_delete(row.id)">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    </el-row>
    

    <el-row>
      <el-button
                class="add_category_button"
                style="float: left"
                icon="el-icon-plus"
                type="primary"
                @click="show_add_category_form">New
                </el-button>

    </el-row>
    
    <el-dialog
    title="Add New Category: "
    :visible.sync="add_category_form_visible"
    width = "30%"
    :before-close="get_categories">

    <add-category></add-category>
    </el-dialog>

    <el-dialog
      title="Update Category: "
      :visible.sync="update_form_visible"
      width="30%"
      :before-close="get_categories"
    >
      <update-category-form
        :key="key"
        :category_id="category_id"
      ></update-category-form>
    </el-dialog>
  </div>
</template>

<script>
import { getAll } from "@/api/category";
import UpdateCategoryForm from "./update-category-form.vue";
import AddCategory from './add-category';

export default {
  components: { UpdateCategoryForm, AddCategory},
  data() {
    return {
      category_list: [],
      update_form_visible: false,
      add_category_form_visible:false,
      category_id: "",
      key: 0,
    };
  },
  mounted() {
    this.get_categories();
  },

  methods: {
    get_categories() {
      getAll().then((response) => {
        this.category_list = response;
      });

      this.category_id = "";
      this.update_form_visible = false;
      this.add_category_form_visible =false;
    },

    show_update_form(id) {
      this.category_id = id;
      this.update_form_visible = true;      
      this.key += 1;
    },

    show_add_category_form(){
      this.add_category_form_visible=true;
    },
    confirm_delete(id) {},

    convert_date(value) {
      var date = new Date(value).toLocaleDateString("en-gb");
      return date;
    },
  },
};
</script>

<style scoped>
</style>