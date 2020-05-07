<template>
  <div>
    <button @click="decerment">-</button>
    {{ count }}
    <button @click="increment">+</button>
    <br />
    <br />

    <counting-form />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import CountingForm from './CountingForm.vue'

@Component({
  components: {
    CountingForm
  }
})
export default class Counting extends Vue {
  // Hook
  mounted () {
    console.log('mounted')
  }

  count = 0

  decerment () {
    this.count--
  }

  increment () {
    this.count++
  }
}
</script>
