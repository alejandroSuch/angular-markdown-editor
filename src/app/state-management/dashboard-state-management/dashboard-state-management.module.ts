import * as fromDashboard from './reducers';
import { FEATURE_NAME } from './feature-name';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_NAME, fromDashboard.reducers)],
  declarations: []
})
export class DashboardStateManagementModule {}
