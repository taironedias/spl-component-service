import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.scss'],
})
export class NivelComponent implements OnInit {

  niveis = ['1', '2', '3'];
  nivel: string;
  @Input() childMessage: string;

  constructor() { }

  ngOnInit() {
    console.log('Child: ' + this.childMessage);
  }

  valuesReset() {
    this.nivel = '-1';
  }

}
