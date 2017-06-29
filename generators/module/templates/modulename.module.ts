import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { <%- Title %>Routing } from './<%- Component %>.routing';
import { SharedModule } from '../../app/shared/shared.module';
import { <%- Title %>Component } from './components/<%- Component %>.component';
import { <%- Title %>Effects } from './store/<%- Component %>.effects';
import { <%- Title %>Service } from './services/<%- Component %>.service';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    <%- Title %>Routing,
    EffectsModule.run(<%- Title %>Effects)
  ],
  declarations: [
    <%- Title %>Component
  ],
  providers:[<%- Title %>Service]
})
export default class <%- Title %>Module { }
