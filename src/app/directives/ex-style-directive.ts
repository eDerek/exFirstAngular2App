import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({ selector: '[exStyle]' })
export class ExStyleDirective {
    @Input() exStyle: string;
    constructor(private elem: ElementRef, private renderer: Renderer2) {
    }
    ngOnInit() {
        console.log(this.exStyle+"-------------*****-----");
        if(this.exStyle === 'true'){
            this.renderer.setStyle(this.elem.nativeElement, 'box-shadow', '2px 2px 12px hotpink');
        }
    }
}