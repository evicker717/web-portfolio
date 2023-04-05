import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-rsa',
  templateUrl: './rsa.component.html',
  styleUrls: ['./rsa.component.css']
})
export class rsaComponent implements OnInit {
  Encrypt!: FormGroup;
  Decrypt!: FormGroup;

  uftVal: any;
  new: any;
  letter: any;
  statement: any;
  ngOnInit(): void {
    this.buildForm();
    this.uftVal = 0
  }

  constructor(private formBuilder: FormBuilder) {}
//accidentily leaving spaces here will cause them to be processed as the letter "A"
  encrypt(): void {
    const { text } = this.Encrypt.value;
    let statement = ""
    let e = 13;
    let n = 2537;
    for (let i = 0; i < text.length; i++) {
      this.uftVal = text.toUpperCase(i).charCodeAt(i)
      this.uftVal = parseInt(this.uftVal)
      this.new = (this.uftVal-65)**e % n
      console.log(this.new)

      statement = statement.concat(this.new + " ")
      console.log(statement)
    } 
    
    alert(`Original Text: ${text}, Encrypted Text: ${statement} `);
  }
  //for some reason the letters t, r, x, v, and z do not decrypt correctly.
  decrypt(): void {
    const { text2 } = this.Decrypt.value;
    let statement = ""
    let d = 937n
    let n = 2537n;
    let textArr = text2.split(' ')
    console.log(textArr)
    for (let i = 0; i < textArr.length; i++) {
      this.uftVal = textArr[i]
      this.uftVal = BigInt(this.uftVal)
      console.log(this.uftVal)
      this.new = (this.uftVal**d % n) + 65n
      console.log(this.new)
      console.log(String.fromCharCode(Number(this.new)))
      this.letter = String.fromCharCode(Number(this.new))
      statement = statement.concat(this.letter)
      console.log(statement)
    } 
    
    alert(`Original Text: ${text2}, decrypted Text: ${statement} `);
  }
  

  private buildForm(): void {
    this.Encrypt = this.formBuilder.group({
      text: this.formBuilder.control(null),
    });
    this.Decrypt = this.formBuilder.group({
      text2: this.formBuilder.control(null),
    });
  }

}