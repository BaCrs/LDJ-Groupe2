import { Component, OnInit } from '@angular/core';
import { Launch } from '../launch';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})

export class LaunchComponent implements OnInit {

  launches: Launch[] = [];

  constructor(private launchService: LaunchService) {}

  ngOnInit(): void {
    this.getLaunches();
  }

  getLaunches(): void {
    this.launchService.getLaunches()
      .subscribe(launches => {
        this.launches = launches;
    })
  }
}