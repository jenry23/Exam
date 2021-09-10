<template>
  <div
    class="sidebar"
    :data-background-color="backgroundColor"
    :data-image="backgroundImage"
    :data-color="itemColor"
  >
    <div class="logo">
      <a href="/" class="simple-text logo-normal">
        {{ $t(title) }}
      </a>
    </div>
    <div class="sidebar-wrapper">
      <slot name="content"></slot>
      <ul class="nav">
        <slot>
          <template v-for="(item, i) in sidebarLinks">
            <sidebar-item-group
              v-if="item.children && $can(item.gate)"
              :key="`group-${i}`"
              :item="item"
            >
            </sidebar-item-group>

            <sidebar-link v-else :key="`item-${i}`" :item="item"></sidebar-link>
          </template>
        </slot>
      </ul>
    </div>
    <div class="sidebar-background" :style="sidebarStyle"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'panel.site_title'
    },
    backgroundImage: {
      type: String,
      default: '/md/img/sidebar-3.jpg'
    },
    imgLogo: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: 'black',
      validator: value => {
        let acceptedValues = ['', 'white', 'black']
        return acceptedValues.indexOf(value) !== -1
      }
    },
    itemColor: {
      type: String,
      default: 'purple',
      validator: value => {
        let acceptedValues = [
          '',
          'purple',
          'azure',
          'green',
          'orange',
          'rose',
          'danger'
        ]
        return acceptedValues.indexOf(value) !== -1
      }
    },
    sidebarLinks: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  computed: {
    sidebarStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`
      }
    }
  }
}
</script>

<style>
@media screen and (min-width: 991px) {
  .nav-mobile-menu {
    display: none;
  }
}
</style>
