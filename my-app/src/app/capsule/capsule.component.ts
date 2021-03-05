import { Component, OnInit } from '@angular/core';
import { Capsule } from '../capsule';
import { CapsuleService } from '../capsule.service';

@Component({
  selector: 'app-capsule',
  templateUrl: './capsule.component.html',
  styleUrls: ['./capsule.component.css']
})

export class CapsuleComponent implements OnInit {

  capsules: Capsule[] = [];

  constructor(private capsuleService: CapsuleService) {}

    ngOnInit(): void {
    this.getCapsules();
  }

  getCapsules(): void {
    this.capsuleService.getCapsules().subscribe(capsules => {
      this.capsules = capsules;

      // Convert launch_date in a better format.
      for (let i=0; i<this.capsules.length; i++){
        this.capsuleService.convertDateCapsule(this.capsules[i]);
      }
    })
  }
}