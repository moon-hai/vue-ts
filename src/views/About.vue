<template>
  <div class="about">
    <h1>{{ projName }}</h1>

    <user />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator'
import ProjectMixins from '../mixins/ProjectMixins'
import User from '../components/User.vue'

@Component({
  components: {
    User
  }
})
export default class About extends Mixins(Vue, ProjectMixins) {
  get projectDetail (): string {
    return this.projName + ' ' + 'Preetish HS'
  }
}
</script>
