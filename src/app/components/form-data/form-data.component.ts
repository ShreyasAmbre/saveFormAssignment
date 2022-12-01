import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  some_text = "Click Here";
  inside = false;
  @HostListener("click")
  clicked() {
    this.inside = true;
  }
  @HostListener("document:click")
  clickedo() {
    this.some_text = this.inside
      ? "Event Triggered"
      : "Event Triggered Outside Component";
    this.inside = false;
  }
  username:string | undefined;
  msg:string = ''

  constructor() { }

  ngOnInit(): void {
  }


  onClickSubmit(result:any) {
    this.msg = "Form Submited"
    console.log("You have entered : " + result.username); 
 }

}
