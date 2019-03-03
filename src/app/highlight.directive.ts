import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: "[highlight]"
})
export class HighlightDirective implements OnInit{
    @Input() color
    constructor(private element : ElementRef){
        console.log("In Highlight");
    }
    ngOnInit(){
        console.log("color: ",this.color);
        this.element.nativeElement.style["color"] = this.color;
    }
 }