import {Directive, Input, ElementRef, HostListener} from '@angular/core'

// Атрибутная директива
@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string

  @Input() defaultColor: string

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null)
  }

  constructor(private el: ElementRef) {}

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }

}
