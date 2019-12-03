import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-module-a',
  template: `
    <p>
      module-a works!
    </p>
  `,
  styles: []
})
export class ModuleAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
