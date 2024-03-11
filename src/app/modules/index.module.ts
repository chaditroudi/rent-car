import { IndexRoutingModule } from './index-routing.module';
import { NgxPaginationModule } from "ngx-pagination";
import { CarsListComponent } from "./cars/cars-list/cars-list.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CarDetailsComponent } from "./cars/car-details/car-details.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContractDetailsComponent } from './contract/contract-details/contract-details.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';

@NgModule({
  declarations: [CarDetailsComponent, CarsListComponent,ContractDetailsComponent, CustomersListComponent],
  imports: [CommonModule, SharedModule,
    
    NgxPaginationModule,IndexRoutingModule,FormsModule,ReactiveFormsModule],
})
export class IndexModule {}
