<template>
  <div class="container-fluid">
         <div class="row">
          <div v-for="datas in data" :key="datas.id" class="col-lg-4 col-md-6 col-sm-6">
            <div class="card card-stats">
            <center>
              <div class="card-header card-header-info card-header-icon">
                <div class="card-icon">
                    <i class="material-icons">equalizer</i>
                </div>
              </div>
            <div class="card-header ">
              <h3 class="card-title">{{datas.name}}</h3>
              <p>{{datas.description}}</p>
            </div>
            </center>
                <h3 class="pl-2">Total : {{formatPrice(datas.total)}}</h3>
                <div class="card-footer">
                  <div class="stats">
                    <b style="color:black;">{{datas.created_at}}</b>
                  </div>
                </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    }
  },
  mounted(){
    this.getExpense()
  },
  methods: {
    getExpense(){
        axios.get('dashboard').then(response =>{
          this.data = response.data.data;
        });
    },
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
}
</script>
