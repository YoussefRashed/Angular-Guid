import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Text Interpolation
  textInterpolationMessege = "Text Interpolation is Amazing";
  iCanUseMath = "I can do mathmatical expressions inside HTML 15+9 = ";
  iCanExecuteFunctions = "I can Call controller functions inside HTML like the result of getMax(7,6) function is : "
  max(a: number, b: number) {
    return a > b ? a : b
  }



  //Property Binding
  imgUrl: string = "./assets/pics/dog.jpeg"
  inputType: string = ''
  changeInputType() {
    let types = [
      "checkbox",
      "tel",
      "email",
      "color",
      "password",
      "date",
      "file",
      "image",
      "number",
      "text"]

    this.inputType = types[parseInt((Math.random() * 10) + "")]
  }


  // Event Binding
  sayHello(): void {
    let name = prompt("What is Your name ?")
    alert(`hello, sir ${name}`)
  }
}
