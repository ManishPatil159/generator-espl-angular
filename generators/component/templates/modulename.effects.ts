import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { empty } from 'rxjs/observable/empty';
import { Observable } from 'rxjs/Observable';
import { <%- Title %>, initialCounter } from './<%- Component %>.model';
import { <%- CapsComponent %>_ACTIONS } from './<%- Component %>.actions';
import { <%- Title %>Service } from '../services/<%- Component %>.service';
import { BaseService } from '../../../app/core/services/index';
import { Http, Headers, RequestOptions } from '@angular/http';

/// Define the appi endpoint here
const CONTEXT = '<%- Component %>';

@Injectable()
export class <%- Title %>Effects extends BaseService {

  @Effect({ dispatch: false })
  private getListEmp$ = this.actions$
    .ofType(<%- CapsComponent %>_ACTIONS.GET_<%- CapsComponent %>_LIST)
   .switchMap(action => 
       this.getList$(CONTEXT)
        .map(res =>{
          this.store.dispatch({ type: <%- CapsComponent %>_ACTIONS.GET_<%- CapsComponent %>_SUCCESS, payload: res })
        })
        .catch(() => Observable.of({ type: <%- CapsComponent %>_ACTIONS.ON_FAILED  }))
      );
  // @Effect({ dispatch: false })
  // private add$ = this.actions$
  //   .ofType(DASHBOARD_ACTIONS.ADD_DASHBOARD)
  //  .switchMap(action => 
  //      this.post$('{"name":"harry"}',false)
  //       .map(res =>{
  //         this.store.dispatch({ type: DASHBOARD_ACTIONS.ADD_DASHBOARD_SUCCESS, payload: res })
  //       })
  //       .catch(() => Observable.of({ type: DASHBOARD_ACTIONS.ON_FAILED  }))
  //     );

  constructor(
    private store: Store<<%- Title %>>,
    private actions$: Actions,
    private <%- Component %>Service: <%- Title %>Service,
    public http: Http
  ) {super(http,CONTEXT); }
}
