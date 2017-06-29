/** Angular Dependencies */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
/** Third Party Dependencies */
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
/** Module Level Dependencies */
import { <%- Title %> } from '../store/<%- Component %>.model';
import { BaseService } from '../../../app/core/services/index';

/** Context for service calls */
const CONTEXT = '<%- Component %>';

/** Service Definition */
@Injectable()
export class <%- Title %>Service extends BaseService {

    constructor(public http: Http) {
        super(http,CONTEXT);
    }

}
