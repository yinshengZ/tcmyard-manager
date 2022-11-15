<template>
  <div>
    <div class="to-do-list">
    <el-card>
      <div slot="header" class="clearfix">
        <span>To Do List</span>
        <div class="new-task-button">
          <el-button icon="el-icon-plus" type="primary" v-on:click="add_todo_form">
          </el-button>
        </div>
      </div>

      
        <el-table :data="todo_list" style="width: 100%">
          <el-table-column
            prop="finish_date"
            label="Deadline"
            width="100"
            class="table-column"
          >
          </el-table-column>
          <el-table-column prop="status" label="Status" width="100">
          </el-table-column>
          <el-table-column prop="content" label="Task" width="180">
          </el-table-column>

          <el-table-column label="Operations" width="180" prop="id">
            <template slot-scope="data">
              <div class="operation-buttons">
              <el-button
                type="success"
                icon="icon-size el-icon-check"              
                circle
                @click="update_todo('completed',todo.user_id)"
              ></el-button>
              <el-button type="warning" circle
              @click="update_todo('suspended',todo.user_id)"
                ><svg-icon icon-class="pause" class="icon-size"></svg-icon
              ></el-button>
              <el-button
                type="danger"
                icon="el-icon-close"
                class="icon-size"
                circle
                @click="delete_todo(data.row.id)"
              ></el-button>
              <span></span>
            </div>
            </template>
            
          </el-table-column>
        </el-table>
      
    </el-card>

    <el-dialog
    title="New Task"
    :visible.sync="todo_form_visibility"
    width="50%"
    :before-close="get_all_todo">

    <el-form :model="todo" label-position="left" label-width="100px">
      <el-form-item label="Task">
        <el-input v-model="todo.task"></el-input>
      </el-form-item>
      <el-form-item label="Deadline">
        <el-date-picker type="date" placeholder="Pick the deadline..." v-model="todo.deadline"></el-date-picker>
      </el-form-item>

    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="add_new_todo" type="success">Add</el-button>
      <el-button  @click="get_all_todo" type="info">Cancel</el-button>
    </span>

  </el-dialog>
  </div>
  </div>
</template>



<script>
import {mapGetters} from "vuex"
import {add_todo, get_todo, update_todo_list, delete_todo_list} from '@/api/todo'

export default {
  data() {
    return {
      todo_list: [
      
      ],
      todo:{},
      todo_form_visibility:false,
    };
  },
  computed:{
    ...mapGetters(["id","name"]),
  },
  created(){
    this.get_user()
    this.get_all_todo()
  },
  methods: {
    get_user(){
      this.todo.user_id = this.id;
      
    },
    add_todo_form(){
      this.todo_form_visibility=true
    },
    add_new_todo(){      
      add_todo(this.todo).then((response=>{
        console.log(response)
      }))

      
    },
    update_todo(status, id){
      alert(status);
      alert(id);
    },
    delete_todo(todo_id){
      delete_todo_list(todo_id).then((response)=>{
        this.get_all_todo()
      })
    },

    get_all_todo(){
      get_todo(this.todo.user_id).then((response=>{
        this.todo_list = response
        console.log(this.todo_list)
      }))
      this.todo_form_visibility=false

    }
  },
};
</script>

<style scoped>
.to-do-list {
  width: 80%;
  margin: auto auto;
  margin-top:1%;
}

.to-do-list ul {
  list-style-type: none;
  padding: 0;
  border: 1px solid #ddd;
}

.to-do-list ul li {
  padding: 8px 16px;
  border-bottom: 1px solid #ddd;
}

.to-do-list ul li:hover {
  background-color: #f2f2f2;
}

.to-do-list ul li:last-child {
  border-bottom: none;
}

.new-task-button {
  float: right;
}

.operation-buttons {
  display: inline;
}

.el-table el-table-column {
  width: 5%;
}

.icon-size {
  font-size: 1rem;
}

.table-column {
  width: 80%;
}
.clearfix {
  margin: auto auto;
}
</style>