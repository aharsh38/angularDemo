import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    constructor(private http: HttpClient, private routeObj: Router) {}
    user = {
        email:'',
        name:'',
        password:''
    }
    msg
    submit(){
        let url = "https://learningmeanwithashu.herokuapp.com/api/register"
        console.log("user Details", this.user);
        this.http.post(url, this.user).subscribe((data)=>{
            console.log(data);
            if(data["message"]=="User Registered"){
                this.msg = data["message"];
                this.routeObj.navigate(["login"]);
            }else{
                this.msg = data["message"];
            }
        }, (error)=>{
            console.log(error);
        });
        
    }
    
}