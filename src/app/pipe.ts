import { Pipe,PipeTransform } from  '@angular/core'; 


@Pipe({ name:'double' })
export  class doubleclass implements PipeTransform{
      transform(arg1:number,arg2:number){
        return Math.pow(arg1, isNaN(arg2) ? 1 : arg2);
      }
}