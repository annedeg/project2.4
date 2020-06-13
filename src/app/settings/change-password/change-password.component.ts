import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/validation.service';
import { Router } from '@angular/router';
import { rejects, strict } from 'assert';
import { Key } from 'protractor';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  constructor(private router: Router, private validationService: ValidationService) { }

  oldPassword: string = null;
  newPassword: string = null;
  newPassword2: string = null;
  user_id;
  message: string;

  ngOnInit(): void {}

  async changePassword() {
    
    if(this.newPassword2 === this.newPassword && this.newPassword !== null && this.oldPassword !== "" && this.newPassword !== this.oldPassword) {
      await this.validationService.doGetApiCall("/auth", localStorage.getItem('token'))
      .then((data)=>{
        this.user_id = (Object.values(data)[0][0][0])
      })
      .then(async () => {
        const formData = new FormData();
        formData.append('password', this.oldPassword)
        formData.append('new password', this.newPassword)
        await this.validationService.doPutApiCall("/user/" + this.user_id, formData, localStorage.getItem('token'))
        .then((data)=>console.log(data))
      }).finally(() => {
        this.message = "Wachtwoord veranderd!"
      });



      //this.validationService.doPutApiCall("/user/")
    } else {
      this.message = "Incorrecte gegevens, probeer het opnieuw"
    }

  }
}
