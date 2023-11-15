import { Component,Input,Output,EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrl:'./switch.component.css',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('thirdLineAnimation', [
      state('true', style({
        transform: 'scaleX(3)', 
      })),
      state('false', style({
        transform: 'scaleX(1)',
      })),
      transition('true <=> false', animate('300ms ease-in-out')),
    ]),
    trigger('secondLineAnimation', [
      state('true', style({
        transform: 'scaleX(0.3)', 
      })),
      state('false', style({
        transform: 'scaleX(1)',
      })),
      transition('true <=> false', animate('300ms ease-in-out')),
    ]),
      trigger('secondLineAnimation', [
      state('true', style({
        transform: 'scaleX(0.3)', 
      })),
      state('false', style({
        transform: 'scaleX(1)',
      })),
      transition('true <=> false', animate('300ms ease-in-out')),
    ]),
  ],
})
export class Switch {
  @Input() isSwitched: boolean = false;
  @Output() toggleSwitch = new EventEmitter<void>();

  onSwitchClick() {
    this.toggleSwitch.emit();
  }
}
