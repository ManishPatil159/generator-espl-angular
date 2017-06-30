import { RouterModule, Routes } from '@angular/router';
import { OccurenceBookReducer } from './occurenceBook/store/occurenceBook.reducer';
import { DashboardReducer } from './dashboard/store/dashboard.reducer';
//#===== yeoman reducer import hook (This line is required for our yeoman generator and should not be changed.) =====#

export const routing = [];
//#===== yeoman routing hook (This line is required for our yeoman generator and should not be changed.) =====#

routing.push({ path: 'ob', loadChildren: 'modules/occurenceBook/occurenceBook.module' });
routing.push({ path: 'dashboard', loadChildren: 'modules/dashboard/dashboard.module' });
routing.push({ path: '', redirectTo: 'core', pathMatch: 'full' });
routing.push({ path: '**', redirectTo: '/not-found', pathMatch: 'full' });

export const ApiBase = "http://192.168.100.103:6070/api/";
export const ApiBaseAuthUrl = "auth/token";

export interface RootState {
}


export const moduleReducers = {
  //#===== yeoman module reducer hook (This line is required for our yeoman generator and should not be changed.) =====#
  occurenceBook: OccurenceBookReducer,
  dashboard: DashboardReducer
}
