import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({
  namespaced: true,
  name: 'counter'
})

class Counter extends VuexModule {
  public count = 0

  get initCount (): number {
    return this.count
  }

  @Mutation
  increment (delta: number) {
    this.count += delta
  }

  @Mutation
  decrement (delta: number) {
    this.count -= delta
  }

  @Action({ commit: 'increment' })
  incr () {
    return 2
  }

  @Action({ commit: 'decrement' })
  decr () {
    return 2
  }
}

export default Counter
