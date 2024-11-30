import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string = 'This loaded dynamically';
  imageUrl: string = 'https://www.bax-shop.co.uk/templates/baxshop/img/logo_21jaar_en.svg';
  altImageUrl: string = 'Bax Music established 21 years';
  isButtonDisabled: boolean = false;
  isButtonActive: boolean = true;
  buttonDisable: string = 'true'
}
