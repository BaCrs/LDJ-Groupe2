import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Capsule } from '../capsule';
import { CapsuleService } from '../capsule.service';

@Component({
  selector: 'app-capsule-detail',
  templateUrl: './capsule-detail.component.html',
  styleUrls: ['./capsule-detail.component.css']
})

export class CapsuleDetailComponent implements OnInit {

  capsule: Capsule;

  constructor(
    private route: ActivatedRoute,
    private capsuleService: CapsuleService,
    private location: Location) {}

  ngOnInit(): void {
    this.getCapsule();
  }
  
  getCapsule(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.capsuleService.getCapsule(id).subscribe(capsule => {
      this.capsule = capsule;
      this.capsuleService.convertDateCapsule(this.capsule);
    })
  }

  goBack(): void {
    this.location.back();
  }
}