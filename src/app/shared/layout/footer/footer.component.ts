import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit, OnDestroy {
  currentYear = new Date().getFullYear();

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}

}
