import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighest]'
})
export class HighestDirective implements OnInit {
  @Input("appHighest") highest: boolean | undefined;

  constructor(private elem: ElementRef) { }
  @HostListener("change") ngOnChanges(){
    if(this.highest){
      this.elem.nativeElement.style.backgroundColor= 'yellow';
      console.log("Done In")

    }else{
      this.elem.nativeElement.style.backgroundColor= 'black';
      console.log("Done")
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}
