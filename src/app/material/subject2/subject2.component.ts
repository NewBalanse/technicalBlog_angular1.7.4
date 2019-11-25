import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'subject2-page',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.scss']
})
export class Subject2Component implements OnInit {
  isSubject1: boolean;
  isSubject2: boolean;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(response => {
      if (response.name) {
        const name: string = response.name.toString();
        if (name.toLowerCase() === 'technology'.toLowerCase()) {
          this.isSubject1 = true;
          this.isSubject2 = false;
        } else {
          this.isSubject1 = false;
          this.isSubject2 = true;
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
