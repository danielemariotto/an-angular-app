import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-great-world',
  standalone: true,
  imports: [MatSlideToggleModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './great-world.component.html',
  styleUrl: './great-world.component.css'
})
export class GreatWorldComponent implements OnDestroy, OnInit {
  constructor(){
    console.log('constructor')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
  ngOnInit(): void {
    console.log('ngOnInit')
    // setInterval(()=> {this.buttonDisable = !this.buttonDisable}, 3000)
  }
  saluto = 'Hi'
  buttonDisable = false

  toggleChange(){

  }
  buttonClick(){
    if (this.saluto == 'Hi'){

      this.saluto = 'hola'
    } else {
      this.saluto = 'Hi'
    }
  }
  onInput(e: Event){
    console.log((<HTMLInputElement>e.target).value)
  }

}
