<template>
  <ul>
    <h1>{{ msg }}</h1>
    <h3>{{ title }}</h3>
    <li
      v-for="user in users"
      :key="user.name">
      <p>{{ user.name }}</p>
      <p>{{ user.age }}</p>
    </li>

    <button @click="clickMe">CLICK ME</button>
    <br>
    <br>
    <button @click="addNum(10, 20)">ADD NUM</button>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { User } from '../interface/user'

@Component
export default class UserList extends Vue {
  @Prop({ default: 'Welcome' }) readonly msg: string
  @Prop({ required: true }) readonly users: User

  get title (): string {
    return 'Welcome Title'
  }

  @Emit()
  public clickMe () {
    console.log('')
  }

  public addNum (n1: number, n2: number): void {
    console.log(n1 + n2)
  }
}
</script>
