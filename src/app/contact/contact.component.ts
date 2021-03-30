import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  submitted: boolean = false;
  isLoading: boolean = false;
  responseMessage: string;
  constructor(private formBuilder: FormBuilder, private contact: ContactService) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.form.status == "VALID") {
      this.form.disable();
      var formData: any = new FormData();
      formData.append("name", this.form.get("name").value);
      formData.append("email", this.form.get("email").value);
      formData.append("message", this.form.get("message").value);
      this.isLoading = true;
      this.submitted = false;

      this.contact.PostMessage(formData).subscribe(response => {
        this.form.enable();
        this.submitted = true;
        this.isLoading = false;
        this.responseMessage = "Thanks for the message! I'll get back to you soon!";
        console.log(response)
      }, error => {
        this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
        console.warn(error.responseText)
        console.log({ error })
      })
    }
  }
}
