import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lowerupper-pipe',
    template: `<div>
    <label>Name: </label><input #name (keyup)="change(name.value)" type="text">
    <p>In lowercase: <pre>'{{value | lowercase}}'</pre>
    <p>In uppercase: <pre>'{{value | uppercase}}'</pre>
  </div>`
})
export class LowerUpperPipeComponentComponent{

  value = '';
  change(value: string) {
    this.value = value;
  }
}
