<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
      </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import variables from '@/sass/element/variables.scss'

export default {
  components: { Logo },
  computed: {
    ...mapGetters([
      'permission_routes',
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
