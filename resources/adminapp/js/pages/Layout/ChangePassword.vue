<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">add</i>
              </div>
              <h4 class="card-title">
                <strong>Change Password</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                    <div class="form-group bmd-form-group" :class="{ 'has-items': entry.current_password,'is-focused': activeField == 'current_password' }">
                        <label class="bmd-label-floating required">Current Password</label>
                        <input
                        class="form-control"
                        type="password"
                        :value="entry.current_password"
                        @input="updateCurrentPassword"
                        @focus="focusField('current_password')"
                        @blur="clearFocus"
                        required
                        />
                    </div>

                    <div class="form-group bmd-form-group" :class="{ 'has-items': entry.new_password,'is-focused': activeField == 'new_password' }">
                        <label class="bmd-label-floating required">New Password</label>
                            <input
                            class="form-control"
                            type="password"
                            :value="entry.new_password"
                            @input="updateNewPassword"
                            @focus="focusField('new_password')"
                            @blur="clearFocus"
                            required
                            />
                    </div>

                    <div class="form-group bmd-form-group" :class="{ 'has-items': entry.confirm_password,'is-focused': activeField == 'confirm_password' }">
                        <label class="bmd-label-floating required">Cofirm New Password</label>
                            <input
                            class="form-control"
                            type="password"
                            :value="entry.confirm_password"
                            @input="updateConfirmPassword"
                            @focus="focusField('confirm_password')"
                            @blur="clearFocus"
                            required
                            />
                    </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <vue-button-spinner
                class="btn-primary"
                :status="status"
                :isLoading="loading"
                :disabled="loading"
              >
                {{ $t('global.save') }}
              </vue-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('ChangePasswordSingle', ['entry', 'loading'])
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('ChangePasswordSingle', [
      'submitPassword',
      'resetState',
      'setCurrentPassword',
      'setNewPassowrd',
      'setCofirmPassowrd'
    ]),
    updateCurrentPassword(e) {
      this.setCurrentPassword(e.target.value)
    },
    updateNewPassword(e){
      this.setNewPassowrd(e.target.value)
    },
    updateConfirmPassword(e){
      this.setCofirmPassowrd(e.target.value)
    },
    submitForm() {
      this.submitPassword()
        .then(() => {
        //   this.$router.push({ name: 'change_password' })
          this.$eventHub.$emit('create-success')
        })
        .catch(error => {
          this.status = 'failed'
          _.delay(() => {
            this.status = ''
          }, 3000)
        })
    },
    focusField(name) {
      this.activeField = name
    },
    clearFocus() {
      this.activeField = ''
    }
  }
}
</script>
