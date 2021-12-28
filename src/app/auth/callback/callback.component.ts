import { Component, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import {NbAuthResult, NbAuthService} from '@nebular/auth';
import {Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnDestroy {

  private destroy$ = new Subject<void>();

  constructor(private authService: NbAuthService, private router: Router) {
    this.authService.authenticate('google')
      .pipe(takeUntil(this.destroy$))
      .subscribe((authResult: NbAuthResult) => {
        if (authResult.isSuccess()) {

          this.router.navigateByUrl('/pages/profile');
          console.log(authResult);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}