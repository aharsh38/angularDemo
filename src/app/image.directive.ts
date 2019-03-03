import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: "[imagelarge]"
})
export class ImageDirective{
    constructor(private element : ElementRef){
       console.log("Called image directive", element);
        
    }
    @HostListener("mouseenter") onEnter() {
        this.element.nativeElement.classList.add("product1");
        this.element.nativeElement.classList.remove("product");
    }
    @HostListener("mouseleave") onLeave() {
        this.element.nativeElement.classList.add("product");
        this.element.nativeElement.classList.remove("product1");
    }
 }