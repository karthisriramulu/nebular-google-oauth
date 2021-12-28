import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <nb-layout>

        <!-- <nb-layout-header fixed>
          </nb-layout-header> -->

        <nb-layout-column>

            <router-outlet></router-outlet>

        </nb-layout-column>

        <!-- <nb-layout-footer fixed>
          </nb-layout-footer> -->

    </nb-layout>
  `,
})
export class PageComponent {
  
}
