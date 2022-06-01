<template>
  <div class="container">

    <el-row>
      <el-col :span="22" :offset="1">
        <panel-group />
      </el-col>      
    </el-row>

    

  </div>
</template>

<script>
import PanelGroup from './components/panel-group'
export default {
  components: {
    PanelGroup
  }
}
</script>

<style scoped>
  .container{
    background-color:rgb(240, 242, 245);
  }

</style>