<template>
  <div>
    <p>Your first name: {{ firstName }}</p>
    <p>Your last name: {{ lastName }}</p>

    <input type="text" v-model="name">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'CountingForm'
})
export default class CountingForm extends Vue {
  // computed
  firstName = 'John'
  lastName = 'Michael'

  get name () {
    return `${this.firstName} ${this.lastName}`
  }

  set name (value) {
    const splitted = value.split(' ')
    this.firstName = splitted[0]
    this.lastName = splitted[1]
  }
}
</script>
