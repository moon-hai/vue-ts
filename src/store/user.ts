import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({
  namespaced: true,
  name: 'user'
})
class User extends VuexModule {
  public name = ''

  get nameUpperCase (): string {
    return this.name.toUpperCase()
  }

  @Mutation
  public setName (newName: string): void {
    console.log(newName)
    this.name = newName
  }

  @Action({ commit: 'setName' })
  updateName (newName: string): string {
    return newName
  }
}

export default User
