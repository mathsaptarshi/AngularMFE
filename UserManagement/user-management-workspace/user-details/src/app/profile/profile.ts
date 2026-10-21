import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, OnInit, output, Output } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-profile',
  styleUrl: './profile.scss',
  templateUrl: './profile.html',
})
export class Profile implements OnInit{
  @Input() loadComponent:any;
  @Output() sendData = new EventEmitter<any>();

  userProfile = input.required<any>();
  messageEvent = output<any>();

  childData = {
    test: "My Child Data"
  }

  constructor(){
  }

  ngOnInit(): void {
    console.log("userProfile:",this.loadComponent,this.userProfile())
  }

  sendDatatoParent(){
    this.sendData.emit(this.childData)
    this.messageEvent.emit(this.childData);
  }
}
