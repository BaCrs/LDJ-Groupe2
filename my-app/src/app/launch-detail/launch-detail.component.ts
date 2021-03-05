import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Launch } from '../launch';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.css']
})

export class LaunchDetailComponent implements OnInit {

  launch: Launch;

  constructor(
    private route: ActivatedRoute,
    private launchService: LaunchService,
    private location: Location) {}

  ngOnInit(): void {
    this.getLaunch();
  }
  
  getLaunch(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.launchService.getLaunch(id)
      .subscribe(launch => this.launch = launch);
  }

  goBack(): void {
    this.location.back();
  }
}