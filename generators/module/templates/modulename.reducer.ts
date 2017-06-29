import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { ActionReducer, Action } from '@ngrx/store';
import { <%- Title %>, initialCounter } from './<%- Component %>.model';
import { <%- CapsComponent %>_ACTIONS } from './<%- Component %>.actions';


export function <%- Title %>Reducer(state: <%- Title %>[] = initialCounter, action: Action): <%- Title %>[] {
  switch (action.type) {
    case <%- CapsComponent %>_ACTIONS.GET_<%- CapsComponent %>_SUCCESS:
        return action.payload;
    case <%- CapsComponent %>_ACTIONS.ADD_<%- CapsComponent %>_SUCCESS:
        return action.payload;
    case <%- CapsComponent %>_ACTIONS.ON_FAILED:
        return state;
    default:
        return state;
  }
}
