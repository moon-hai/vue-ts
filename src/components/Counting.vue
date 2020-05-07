<template>
  <div>
    <button @click="incr">-</button>
    {{ initCount }}
    <button @click="decr">+</button>
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const count = namespace('counter')

@Component
export default class Counting extends Vue {
  @count.Getter
  public initCount!: number

  @count.Action
  public incr!: () => void

  @count.Action
  public decr!: () => void

  // Hook
  mounted () {
    console.log('mounted')
  }
}
</script>
