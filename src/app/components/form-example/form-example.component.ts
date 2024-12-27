import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  imports: [FormsModule],
  template: `
<!-- component -->
<div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div class="container max-w-screen-lg mx-auto">
    <div>
      <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>
          <form #userForm="ngForm" (submit)="formSubmit(userForm)">
            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div class="md:col-span-5">
                  <label for="full_name">Full Name</label>
                  <input type="text"
                    name="full_name"
                    placeholder="Full name"
                    id="full_name"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value=""
                    ngModel
                    (change)="getValue(full_name)"
                    required="true"
                  />
                </div>
                @if(full_name.invalid) {
                  <div class="bg-red lg:col-span-2">Full Name INVALID</div>
                }@else {
                  <div class="bg-red lg:col-span-2">Full Name is OK</div>
                }

                <div class="md:col-span-5">
                  <label for="email">Email Address</label>
                  <input type="text"
                    name="email"
                    id="email"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value=""
                    placeholder="email@domain.com"
                    ngModel
                    required="true"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                </div>

                <div class="md:col-span-5 text-right">
                  <div class="inline-flex items-end">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                  </div>
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  styleUrl: './form-example.component.css'
})
export class FormExampleComponent {
  full_name: any;
  getValue(fullName: any) {
    console.log('fullName');
  }
  formSubmit(event: any) {
    console.log('Form submitted');
    console.log(event);
  }

}
