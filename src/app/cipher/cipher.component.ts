import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-cipher',
  templateUrl: './cipher.component.html',
  styleUrls: ['./cipher.component.css']
})
export class CipherComponent implements OnInit {
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

  encrypt(): void {
    const { text, shift } = this.Encrypt.value;
    let statement = ""
    for (let i = 0; i <= text.length; i++) {
      this.uftVal = text.toUpperCase(i).charCodeAt(i)
      this.uftVal = parseInt(this.uftVal)
      this.new = this.uftVal + parseInt(shift)
      if(this.uftVal == 32){
        this.new = 32
      }
      if (this.new > 90) {
        this.new = (this.new - 90) + 64
      }
      console.log(String.fromCharCode(this.new))
      this.letter = String.fromCharCode(this.new)
      statement = statement.concat(this.letter)
      console.log(statement)
    } 
    
    alert(`Original Text: ${text}, Shift Value: ${shift}, Encrypted Text: ${statement} `);
  }
  decrypt(): void {
    let statement = ""
    const { text2, shift2 } = this.Decrypt.value;
    for (let i = 0; i <= text2.length; i++) {
      this.uftVal = text2.toUpperCase(i).charCodeAt(i)
      this.uftVal = parseInt(this.uftVal)
      this.new = this.uftVal - parseInt(shift2)
      if(this.uftVal == 32){
        this.new = 32
      }
      if (this.new < 65 && this.new !=32) {
        this.new = this.new + 26
      }
      console.log(String.fromCharCode(this.new))
      this.letter = String.fromCharCode(this.new)
      statement = statement.concat(this.letter)
      console.log(statement)
    } 
    alert(`Original Text: ${text2}, Shift Value: ${shift2} Decrypted Text: ${statement} `);
  }

  private buildForm(): void {
    this.Encrypt = this.formBuilder.group({
      text: this.formBuilder.control(null),
      shift: this.formBuilder.control(null),
    });
    this.Decrypt = this.formBuilder.group({
      text2: this.formBuilder.control(null),
      shift2: this.formBuilder.control(null),
    });
  }
  

}