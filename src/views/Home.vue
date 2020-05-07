<template>
  <div class="home">
    <counting />
    <user-list
      :users="users"
      msg="User List"
      @clickMe="logEvent" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { User } from '../interface/user'
import Counting from '../components/Counting.vue'
import UserList from '../components/UserList.vue'

@Component({
  name: 'Home',

  components: {
    Counting,
    UserList
  }
})
export default class Home extends Vue {
  private users: User[] = [
    {
      name: 'John',
      age: 16
    },
    {
      name: 'Michael',
      age: 20
    }
  ]

  public logEvent () {
    console.log('dasdsa')
  }
}
</script>
