import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @Input() defaultColor = 'white';
  @Input() highlightColor = 'gray';

  @HostBinding('style.backgroundColor') color;

  @HostListener('mouseenter') mouseenter() {
    this.color = this.highlightColor;
  };

  @HostListener('mouseleave') mouseleave(){
    this.color = this.defaultColor;
  }

  // constructor(elRef: ElementRef, renderer: Renderer2) {
  //   // elRef.nativeElement.style.backgroundColor = 'green';
  //   renderer.setProperty(elRef.nativeElement.style,'background-color', 'purple');
  // }

  ngOnInit() {
    setTimeout(() => {
      this.color = 'purple'
      }, 3000)

      this.color = this.defaultColor;
  }

}
