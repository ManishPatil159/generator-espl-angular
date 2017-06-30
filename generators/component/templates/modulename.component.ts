import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { <%- Title %> } from '../store/<%- Component %>.model';
import { <%- CapsComponent %>_ACTIONS } from '../store/<%- Component %>.actions';
@Component({
  moduleId: module.id,
  selector: 'app-<%- Component %>',
  templateUrl: '<%- Component %>.component.html',
})
export class <%- Title %>Component implements OnInit {
  <%- Component %>: <%- Title %>[];
  constructor(private store: Store <<%- Title %>>) { }
  ngOnInit() {
    this.store.dispatch({ type: <%- CapsComponent %>_ACTIONS.GET_<%- CapsComponent %>_LIST });
    this.store.dispatch({ type: <%- CapsComponent %>_ACTIONS.ADD_<%- CapsComponent %> });

    this.store.select('<%- Component %>').subscribe((res: any) => {

      this.<%- Component %> = res;
    });

  }
}




// import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';
// @Component({
//   moduleId: module.id,
//   selector: 'app-<%- Component %>',
//   templateUrl: '<%- Component %>.component.html',
// })
// export class <%- Title %>Component implements OnInit {
 
// }
