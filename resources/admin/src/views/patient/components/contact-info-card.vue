<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <span>Contact Info</span>
      </div>
      <div class="patient_contact_info">
        <p>
          <span class="contact_info_heading">Email: </span>
          <span class="text-muted">{{ contact_info.email }}</span>
        </p>

        <p>
          <span class="contact_info_heading">Telephone: </span>
          <span class="text-muted">{{ contact_info.telephone }}</span>
        </p>

        <p>
          <span class="contact_info_heading">Postcode: </span>
          <span class="text-muted">{{ contact_info.postcode }}</span>
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ["contact_info"],
};
</script>

<style scoped>
</style>