import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  title: string = 'This loaded dynamically';
  imageUrl: string = 'https://www.bax-shop.co.uk/templates/baxshop/img/logo_21jaar_en.svg';
  altImageUrl: string = 'Bax Music established 21 years';
  isButtonDisabled: boolean = false;
  isButtonActive: boolean = true;
  buttonDisable: string = 'true';
  userName: string =  'Joe Smith'
  textValue: string = 'One Way'

  buttonClick() {
    console.log('Button Clicked')
  }

  keyEnter(event:any){
    console.log(event.keyCode)
    if (event.keyCode == 13) {
      console.log('enter')
      console.log(this.userName)
    }
  }
  keyUpFiltering() {
    console.log('key up enter')
  }
  keyUserFiltering(user: HTMLInputElement) {
    console.log(user.value)
  }
  updateUserName(userName: HTMLInputElement) {
    console.log(userName.value)
    } 
}
