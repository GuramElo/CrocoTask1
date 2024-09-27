import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {RouterLinkActive} from "@angular/router";
import {Router} from "express";
import {ApiService} from "../../../shared/api.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-providers',
  standalone: true,
    imports: [
        CommonModule,
        RouterLinkActive
    ],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.scss'
})
export class ProvidersComponent implements OnInit, OnDestroy {
  providersSubscription!: Subscription;
  providers!: any;
  gamesCount: number = 14;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.providersSubscription = this.apiService.getData('https://cms.crocobet.com/integrations?type=slot&platform=desktop').subscribe(api => {
      this.providers = api.data.filter((data: any, i: number) => {
        return i < this.gamesCount
      });

      console.log(this.providers)
    })


  }

  gameIncrease () {
    this.gamesCount += 50;
    console.log(this.gamesCount);
  }

  ngOnDestroy() {
    this.providersSubscription.unsubscribe();
  }
}
