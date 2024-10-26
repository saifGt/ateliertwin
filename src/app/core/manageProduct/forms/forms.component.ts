import { Component } from '@angular/core';
import { product } from 'src/app/model/products';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  product = new product()
    show(f:any){
      console.log(f);
    }
}
