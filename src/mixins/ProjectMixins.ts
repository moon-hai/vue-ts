import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ProjectMixin extends Vue {
  public projName = 'My Project'

  public setProjectName (newVal: string): void {
    this.projName = newVal
  }
}
