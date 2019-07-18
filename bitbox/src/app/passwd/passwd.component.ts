import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PasswdService } from './passwd.services';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-passwd',
  templateUrl: './passwd.component.html',
  styleUrls: ['./passwd.component.scss']
})
export class PasswdComponent implements OnInit {
  wordlist: any;
  forms: FormGroup;
  @ViewChild("cript", {static: false}) criptField: ElementRef;

  constructor(private passwdService: PasswdService) { 
    this.forms = new FormGroup({
      'passwd': new FormControl('')
    })
  }

  ngOnInit() {
    this.passwdService.getWordList(response=>{
     this.wordlist = response;

     setInterval(() => this.getFullPasswd(), 400);
    });
  }

  getWord(){
    var pos0 = String(this.getRndInteger(1, 5));
    var pos1 = String(this.getRndInteger(0, 6));
    var pos2 = String(this.getRndInteger(0, 10));
    var pos3 = String(this.getRndInteger(0, 10));

    var number = pos0 + pos1 + pos2 + pos3;
    return number;
  }


  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getFullPasswd(){
  
      var size = 6;
      var i = 0;
      var senha = "";
      while(i < size){
          var gen_number = this.getWord();
          var gen_word =  this.wordlist[gen_number];

          if(gen_word){
              senha += " " + gen_word;
              i += 1;
          }else{
              continue;
          }
      }

      this.forms.controls['passwd'].setValue(senha);
    
  }

  copyPasswd(passwd){
    this.criptField.nativeElement.select();
    document.execCommand('copy');
  }

}
