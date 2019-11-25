import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'subject1-page',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.scss']
})
export class Subject1Component implements OnInit {
  isSubject1: boolean;
  isSubject2: boolean;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  initParams() {
    this.activatedRoute.params.subscribe(response => {
      if (response.name) {
        const name: string = response.name.toString();
        if (name.toLowerCase() === 'innovation'.toLowerCase()) {
          this.isSubject1 = true;
          this.isSubject2 = false;
        } else {
          this.isSubject1 = false;
          this.isSubject2 = true;
        }
      } else {
        this.isSubject1 = false;
        this.isSubject2 = false;
      }

    });
  }

  ngOnInit(): void {
    this.initParams();
  }

}
