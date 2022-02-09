import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, HostListener, NgZone, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  private readonly SHRINK_TOP_SCROLL_POSITION = 50;
  shrinkToolbar = false;


  constructor(private scrollDispatcher: ScrollDispatcher, private ngZone: NgZone) { }

  ngOnInit(): void {

    this.scrollDispatcher.scrolled()
      .pipe(
        map((event: CdkScrollable) => event?.getElementRef().nativeElement.scrollTop)
      )
      .subscribe((scrollTop) => { this.runOnScroll(); this.ngZone.run(() => this.shrinkToolbar = scrollTop > this.SHRINK_TOP_SCROLL_POSITION ? true : false) });
  }

  runOnScroll() {
    var element = document.getElementsByTagName('nav');
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
      element[0].classList.add('shrink')
    } else {
      element[0].classList.remove('shrink')
    }
  };

}
