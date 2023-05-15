import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  value = 'test';
  change(value: string) {
    this.value = value;
  }
}
