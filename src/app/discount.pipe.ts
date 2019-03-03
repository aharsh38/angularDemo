import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "discount"
})
export class DiscountPipe implements PipeTransform{
    transform(data){
        data = 0.8 * data;
        return data
    }
}