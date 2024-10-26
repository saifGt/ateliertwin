import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailes-products',
  templateUrl: './detailes-products.component.html',
  styleUrls: ['./detailes-products.component.css']
})
export class DetailesProductsComponent {
    constructor(private ac:ActivatedRoute){

    }
    ngOnInit(){
      console.log(this.ac.snapshot.params['idt'])
      this.ac.params.subscribe(
        (d)=>{
          console.log(d)
        }
      )
    }
}
