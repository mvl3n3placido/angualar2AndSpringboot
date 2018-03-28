import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
  
})

export class AppComponent implements OnInit {
  customers: Customer[];
  selectedCustomer: Customer;

  constructor(private dataService: DataService) {}

//  getCustomers() {
//    return [
//      new Customer(1, 'Mary', 'Taylor', 24),
//      new Customer(2, 'Peter', 'Smith', 18),
//      new Customer(3, 'Lauren', 'Taylor', 31),
//    ];
//  }
 getCustomers() {
     return this.dataService.getCustomers().then(customers => this.customers = customers);
  }
  
  
  ngOnInit(): void {
//     this.customers = this.getCustomers();
    this.getCustomers();
  }

  onSelect(cust: Customer): void {
    this.selectedCustomer = cust;
  }
}
