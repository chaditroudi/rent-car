import { Component, OnInit } from "@angular/core";

import carsData from "../../../data/cars";
import { ModalComponent } from "src/app/ui/base/modal/modal.component";
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-car-details",
  templateUrl: "./car-details.component.html",
  styleUrls: ["./car-details.component.scss"],
})
export class CarDetailsComponent implements OnInit {
  
 public carData: any;
  
 totalPages:number;
 pageSize= 1;
 currentPage: number = 1;

 formData =[];

 modal :ModalComponent ;

  ngOnInit(): void {}


  constructor(config:NgbModalConfig,private modalService: NgbModal) {
    this.modal = new ModalComponent(config,modalService);

    this.carData = carsData;
    this.totalPages = Math.ceil(this.carData.length / this.pageSize);  
    this.loadData();
  }


  previousPage() {
    if(this.currentPage> 0) {
      this.currentPage--;
      this.loadData();
    }
  }

  nextPage() {
    if(this.currentPage < this.totalPages  - 1) {
      this.currentPage++;
      this.loadData();
    }
  }


  loadData() {

    const start = this.currentPage * this.pageSize;

    const end = Math.min(start +  this.pageSize, this.carData.length);

    this.formData = this.carData.slice(start, end);
  }

}
