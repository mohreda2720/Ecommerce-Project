import { AdsService } from './../../Services/ads.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
   subscription! : Subscription;
   printedData:any

  constructor(private ads:AdsService) { }

  ngOnInit() {
    let observer = {
      next:(data:string)=>{
        this.printedData=data
        console.log(data)
      },
      error:(err:string)=>{
        console.log(err)
      },
      complete:()=>{
        console.log("Ads Finished!")
      }
    }
    this.subscription = this.ads.getScheduledAds(3).subscribe(observer)

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
