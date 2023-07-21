import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user:any={};
  rp:any;
  register()
  {
    if (this.user.email=="" || this.user.fname=="" || this.user.password=="" || this.user.pnum=="")
    {
       alert("you must fill all th columns ");
    }
    if(this.rp!=this.user.password)
    {
      console.log("password does not match each ");
      console.log("ravoi chandamaama");
    }
    console.log(this.user);
  }


}
