import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-pass';

  private source : string = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
  private special : string = "123456!@#$%^7890&*()";
  private wordArray = ['ran','dom',"fuck","you","love","dove","jeck"]
  public password : string = ''
  private randomNumber(number : number) {
    let num = Math.floor(Math.random()*number)
    return num
  }

  // Simpal Way To Create
 public getPass(){
  this.password= '';
     while(this.password.length < 10){
        this.password = this.password.concat(this.source[this.randomNumber(this.source.length)])
        this.password = this.password.concat(this.special[this.randomNumber(this.special.length)])
     }
  }

  // for more complex and custom passwords

//  public getPass(){
//   this.password = '';
//   let pass : string = ''
//   for(let a = 0 ; a < 2 ; a++){
//     pass = this.wordArray[this.randomNumber(this.wordArray.length)]
//     for(let i = 0 ; i < 2 ;i++){
//       pass += this.source[this.randomNumber(this.source.length)]
//       for(let j = 0 ; j < 2 ; j++){
//         pass += this.special[this.randomNumber(this.special.length)]
//       }
//     }
//     this.password += pass;
//   }
//   }

/// To Copy PassWord.....
 public copy(pass : string){
     navigator.clipboard.writeText(pass).then(()=>{
      alert('coppied success..')
     })
  }
}
