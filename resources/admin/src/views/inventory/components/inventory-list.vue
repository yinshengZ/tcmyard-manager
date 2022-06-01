<template>
  <div>
      <el-card>
          <div>
              <el-button 
              type="primary"
              @click="load_add_inventory_form">
                New
              </el-button>
          </div>
      
   
    </el-card>

    <el-dialog
    title="Add New Inventory"
    :visible.sync="add_inventory_form_visible"
    :before-close="get_inventories">
    <add-item
    :key="key"></add-item>
    </el-dialog>

    <el-dialog
    title="Update Inventory Details"
    :visible.sync="update_inventory_form_visible"
    :before-close="get_inventories">
    <update-inventory
    :key="key"
    :inventory_id="inventory_id"></update-inventory>
    </el-dialog>



  <el-tabs type="border-card">
    <el-tab-pane>
      <span slot="label"><svg-icon icon-class="herb"></svg-icon> Herbs</span>
      <el-table :data="herbs.filter(data=>!search|| data.name.toLowerCase().includes(search.toLowerCase())||data.eng_name.toLowerCase().includes(search.toLowerCase()))" 
        style="width: 100%">
      <el-table-column label="ID" width="50">
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Name" width="100">
        <template slot-scope="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="English Name" width="130">
        <template slot-scope="{ row }">
          <span>{{ row.eng_name | capitalize }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Stock" width="100">
        <template slot-scope="{ row }">
          <span>{{ row.stock }}</span>
        </template>
      </el-table-column>
      
      <el-table-column
      label="Unit Price"
      width="100"
      align="center">
        <template slot-scope="{row}">
          <span>
            {{row.unit_price}}
          </span>         
        </template>
      </el-table-column>

      <el-table-column label="Expiry Date" width="140">
        <template slot-scope="{ row }">          
          <span v-if="row.expiry_date==null">No Date Set</span>
          <span v-else>{{convert_date(row.expiry_date)}}</span>
        </template>
      </el-table-column>

      <el-table-column label="Last Updated" width="140">
        <template slot-scope="{ row }">
          <span>{{ convert_date(row.updated_at) }}</span>
        </template>
      </el-table-column>

      

      <el-table-column label="Operations" width="220">
        <template slot-scope="{row}">
          <el-button type="primary" @click="load_update_inventory_form(row.id)"> Update </el-button>

          <el-button type="danger"> Delete </el-button>
        </template>
      </el-table-column>   

      <el-table-column type="expand" align="right" label="Description" width="180">
          <template slot="header">
            <el-input
            v-model="search"
            size="mini"
            placeholder="Type to search..">
            </el-input>            
        </template>
        <template slot-scope="{ row }">
          <p><b>Description:</b></p>
          <span>{{ row.description }}</span>
        </template>
      </el-table-column>
      
    </el-table>
    </el-tab-pane>


    <!--retail tab of inventory lists-->
    <el-tab-pane>
      <span slot="label"><svg-icon icon-class="product"></svg-icon> Others</span>
        
        <el-table
        :data="others"
        style="width: 100%">

       <el-table-column label="ID" width="50">
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Name" width="100">
        <template slot-scope="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="English Name" width="130">
        <template slot-scope="{ row }">
          <span>{{ row.eng_name | capitalize }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Stock" width="100">
        <template slot-scope="{ row }">
          <span>{{ row.stock }}</span>
        </template>
      </el-table-column>
      
      <el-table-column
      label="Unit Price"
      width="100"
      align="center">
        <template slot-scope="{row}">
          <span>
            {{row.unit_price}}
          </span>         
        </template>
      </el-table-column>

      <el-table-column label="Expiry Date" width="140">
        <template slot-scope="{ row }">          
          <span v-if="row.expiry_date==null">No Date Set</span>
          <span v-else>{{convert_date(row.expiry_date)}}</span>
        </template>
      </el-table-column>

      <el-table-column label="Last Updated" width="140">
        <template slot-scope="{ row }">
          <span>{{ convert_date(row.updated_at) }}</span>
        </template>
      </el-table-column>

      

      <el-table-column label="Operations" width="220">
        <template slot-scope="{row}">
          <el-button type="primary" @click="load_update_inventory_form(row.id)"> Update </el-button>

          <el-button type="danger"> Delete </el-button>
        </template>
      </el-table-column>   

      <el-table-column type="expand" align="right" label="Description" width="180">
          <template slot="header">
            <el-input
            v-model="search"
            size="mini"
            placeholder="Type to search..">
            </el-input>            
        </template>
        <template slot-scope="{ row }">
          <p><b>Description:</b></p>
          <span>{{ row.description }}</span>
        </template>
      </el-table-column>

        </el-table>


    </el-tab-pane>

<!--get all other products-->
    <el-tab-pane>
      <span slot="label"><svg-icon icon-class="retail"></svg-icon> Retail</span>
        
        <el-table
        :data="retails"
        style="width: 100%">

       <el-table-column label="ID" width="50">
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Name" width="100">
        <template slot-scope="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="English Name" width="130">
        <template slot-scope="{ row }">
          <span>{{ row.eng_name | capitalize }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Stock" width="100">
        <template slot-scope="{ row }">
          <span>{{ row.stock }}</span>
        </template>
      </el-table-column>
      
      <el-table-column
      label="Unit Price"
      width="100"
      align="center">
        <template slot-scope="{row}">
          <span>
            {{row.unit_price}}
          </span>         
        </template>
      </el-table-column>

      <el-table-column label="Expiry Date" width="140">
        <template slot-scope="{ row }">          
          <span v-if="row.expiry_date==null">No Date Set</span>
          <span v-else>{{convert_date(row.expiry_date)}}</span>
        </template>
      </el-table-column>

      <el-table-column label="Last Updated" width="140">
        <template slot-scope="{ row }">
          <span>{{ convert_date(row.updated_at) }}</span>
        </template>
      </el-table-column>     

      <el-table-column label="Operations" width="220">
        <template slot-scope="{row}">
          <el-button type="primary" @click="load_update_inventory_form(row.id)"> Update </el-button>

          <el-button type="danger" @click="delete_inventory(row.id)"> Delete </el-button>
        </template>
      </el-table-column>   

      <el-table-column type="expand" align="right" label="Description" width="180">
          <template slot="header">
            <el-input
            v-model="search"
            size="mini"
            placeholder="Type to search..">
            </el-input>            
        </template>
        <template slot-scope="{ row }">
          <p><b>Description:</b></p>
          <span>{{ row.description }}</span>
        </template>
      </el-table-column>

        </el-table>
    </el-tab-pane>


  </el-tabs>

  </div>
</template>


<script>
import { get_all } from "@/api/inventory";
import { get_herbs } from "@/api/inventory";
import {get_retails} from "@/api/inventory";
import {get_others } from "@/api/inventory";
import {delete_item} from '@/api/inventory';

import AddItem from './add-item';
import UpdateInventory from './update-inventory-form'

export default {
  filters: {
    capitalize: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
components:{AddItem,UpdateInventory},
  data() {
    return {
      herbs:[],
      retails:[],
      others:[],
      inventory_list: [],
      search:'',
      add_inventory_form_visible:false,
      update_inventory_form_visible:false,
      inventory_id:'',
      key:''
    };
  },

  created() {
    this.get_herbs();
    this.get_retails();
    this.get_others();
  },
  methods: {
    get_inventories() {
     this.get_herbs();
     this.get_retails();
     this.get_others();
     
    },

    get_herbs(){
      get_herbs().then((response)=>{
        this.herbs = response;
      })

      this.add_inventory_form_visible=false;
      this.update_inventory_form_visible=false;
    },

    get_retails(){
     get_retails().then((response)=>{
      this.retails = response;
      })
      
    },
    get_others(){
      get_others().then((response)=>{
        this.others = response;
      })
    },

    load_add_inventory_form(){
        this.add_inventory_form_visible =true;
        this.key+=1
    },
    
    load_update_inventory_form(id)
    {
      this.inventory_id=id;
      this.update_inventory_form_visible=true;
      this.key+=1;
    },

    delete_inventory($id){
      var consent = confirm("Are you sure you want to delete this inventory?");
      if(consent){
        delete_item($id).then((response)=>{
          console.log(response)
        })
      }
    },

    convert_date(date) {
      var date = new Date(date).toLocaleDateString("en-gb");
      return date;
    },

  },
};
</script>

<style scoped>
</style>