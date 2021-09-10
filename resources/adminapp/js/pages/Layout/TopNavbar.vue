<template>
  <nav
    class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top"
  >
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="navbar-brand">
          {{ $t($route.meta.title) }}
        </div>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        aria-controls="navigation-index"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleSidebar"
        :class="{ toggled: $sidebar.showSidebar }"
      >
        <span class="sr-only">Toggle navigation</span>
        <span class="navbar-toggler-icon icon-bar"></span>
        <span class="navbar-toggler-icon icon-bar"></span>
        <span class="navbar-toggler-icon icon-bar"></span>
      </button>
      <!-- Collapsable -->
      <div class="collapse navbar-collapse justify-content-end">
        {{username}}
        <ul class="navbar-nav">
          <top-navbar-languages />
          <li class="nav-item dropdown">
          <a class="nav-link" href="javascript:;" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <i class="material-icons">person</i>
            <p class="d-lg-none d-md-block">
              Account
            </p>
          <div class="ripple-container"></div></a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
            <div v-if="status == 1">
              <router-link
                :to="{ name: 'change_password'} "
                class="dropdown-item"
             >  
             Change Password
            </router-link>
            <div class="dropdown-divider"></div>
            </div>
            <a class="dropdown-item" href='#' @click.prevent="logout">Log out</a>
          </div>
        </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return{
        username: '',
        status:''
    }
  },
  mounted(){
    this.getUser();
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    getUser(){
      axios.get('users/getUser').then(response =>{
        this.username = response.data.data.email
        var access = response.data.data.roles
        var checker = 0;
        access.forEach((doc)=>{
          if(doc.id == 2){
            checker = 1
          }else{
            checker = 0;
          }
        });
        console.log(checker);
        this.status = checker
      });
    },
    logout() {
      axios
        .request({ baseURL: '/', url: 'logout', method: 'post' })
        .then(() => location.assign('/'))
    }
  }
}
</script>
