import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector:'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls:['./post-create.component.css']
})
export class PostCreateComponent {
  constructor() {

  }
  onSubmit(postForm:NgForm){
    console.log(postForm);
  }

}
