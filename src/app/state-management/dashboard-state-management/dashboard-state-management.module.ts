import * as fromDashboard from './reducers';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [StoreModule.forFeature('dashboard', fromDashboard.reducers)],
  declarations: []
})
export class DashboardStateManagementModule {}
