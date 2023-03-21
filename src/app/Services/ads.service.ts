import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsService { 
  private adsList: string[]
  constructor() {
    this.adsList=["50% Sales","Black Friday","Valentine Day big Sales","Mother's Day Sales"];
   }

   getScheduledAds(intervalInSeconds:number):Observable<string>{
    return new Observable <string> ((observer)=>{
      // observer.next();
      // observer.error();
      // observer.complete();
      let counter=0;
      let adsTimer = setInterval(()=>{
        if(counter==this.adsList.length){
          observer.complete();
        }
        if(this.adsList[counter]==""){
          observer.error("Empty Ad");
        }

        observer.next(this.adsList[counter]);
        counter++;

      },intervalInSeconds*1000);
      // return{
      //   unsubscribe(){
      //     clearInterval(adsTimer)
      //   }
      // }
    });
   }

}
function unsubscribe(): import("rxjs").TeardownLogic {
  throw new Error('Function not implemented.');
}


