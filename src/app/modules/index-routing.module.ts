import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarsListComponent } from "./cars/cars-list/cars-list.component";
import { CarDetailsComponent } from "./cars/car-details/car-details.component";
import { ContractDetailsComponent } from "./contract/contract-details/contract-details.component";
import { CustomersListComponent } from "./customers/customers-list/customers-list.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "cars/car-details",
        component: CarDetailsComponent,
      },
      {
        path:"cars/cars-list",
        component: CarsListComponent
      },
      {
        path:"customers/customers-list",
        component:CustomersListComponent
      },
      {
        path:"contracts/contract-details",
        component: ContractDetailsComponent
      }

      
    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
