import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from "@angular/core";

declare var $: any;

@Directive({
  selector: "[appExample]",
  /*
  Eğer selector [] şeklinde kullanılırsa attribute, .appExample şeklinde kullanılırsa class özelliği taşır.
  */
})
export class ExampleDirective implements OnInit {
  constructor(private element: ElementRef) {
    $(this.element.nativeElement).fadeOut(2000).fadeIn(2000);
  }
  ngOnInit(): void {
    this.element.nativeElement.style.color = this.color;
  }
  @Input() color: string;

  @HostListener("click")
  onClick() {
    alert("Element tıklanınca bu tetiklenir");
  }

  //Değer bind etmek için
  @HostBinding("style.fontSize")
  fontSize: string = "20px";
}
