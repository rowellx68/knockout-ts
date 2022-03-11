import { observable, Observable } from 'knockout'
import template from './Greeter.html'

class Greeter {
  public name: Observable<string>

  constructor() {
    this.name = observable('Name')
  }
}

export default { viewModel: Greeter, template }