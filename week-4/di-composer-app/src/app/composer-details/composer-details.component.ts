/*===========================
; Title: Composer Details Component
; Author: George Henderson
; Date: 20 June 2021
; Description: Contains data and methods for the Composer Details Component.
;===========================*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';


@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composer: IComposer | undefined;
  composerId: number;

  constructor(private route: ActivatedRoute, private composerService : ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId') || "");

    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
