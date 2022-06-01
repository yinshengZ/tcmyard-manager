<template>
  <div>
    <el-card class="box-card" :span="10" :offset="7" shadow="hover">
      <div slot="header" class="clearfix">
        <span>Add Income:</span>
      </div>

      <!--Selection row-->
      <el-row>
        <el-button @click="add_by_services">Add By Services</el-button>
        <el-button @click="add_by_custom">Add Custom Ammount</el-button>
      </el-row>
      <!--Selection row end-->

      <!--form start-->
      <div v-if="form_display" class="income_form">
        <el-form
          class="add_income_form"
          :label-position="left"
          label-width="100px"
        >
          <template v-if="add_by_service">
            <el-row>
              <el-form-item label="Amount">
                <el-input v-model="form_data.amount" :disabled="true" />
              </el-form-item>
              <el-form-item label="Service">
                <el-select v-model="services.id">
                  <el-option
                    :label="services.service_name"
                    :value="services.id"
                  >
                    <span style="float: left">{{ services.service_name }}</span>
                    <span style="float: right">£ {{ services.price }}</span>
                  </el-option>
                </el-select>
              </el-form-item>
            </el-row>

            <el-row>
              <span>Discount</span>
              <div class="block">
                <el-slider
                  v-model="form_data.discount"
                  show-input
                  @change="calculate_amount"
                />
              </div>
            </el-row>
          </template>

          <template v-if="add_by_custom_amount">
            <div if="custom_amount">
              <el-form-item label="Amount">
                <el-input-number
                  v-model="form_data.amount"
                  :precision="2"
                  :step="0.1"
                  :max="999999"
                />
              </el-form-item>
            </div>
          </template>

          <template>
            <el-row>
              <el-input
                v-model="form_data.comment"
                type="textarea"
                :rows="2"
                placeholder="Add description or comment for this transaction here"
              />
            </el-row>
          </template>
        </el-form>
      </div>
      <p>{{ form_data.amount }}</p>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ['patient_id'],
  data() {
    return {
      form_display: false,
      add_by_service: false,
      add_by_custom_amount: false,

      services: {
        id: '1',
        service_name: 'massage',
        price: '35'
      },

      form_data: {
        service_name: 'other',
        discount: '0',
        comment: '',
        amount: ''
      }
    }
  },

  mounted() {

  },

  methods: {
    add_by_services() {
      (this.form_display = true),
      (this.add_by_custom_amount = false),
      (this.add_by_service = true)
    },
    add_by_custom() {
      (this.form_display = true),
      (this.add_by_service = false),
      (this.add_by_custom_amount = true)
    },

    calculate_amount() {
      this.form_data.amount = (this.services.price * (1 - this.form_data.discount / 100)).toPrecision(4)
      console.log(this.form_data.amount)
    },

    retrive_services() {

    }

  }
}
</script>
