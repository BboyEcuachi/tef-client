import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Receiver } from 'src/app/services/interfaces/receiver.interface';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.sass']
})
export class TransferFormComponent {
  receivers: Receiver[] = [];
  transferForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.transferForm = this.formBuilder.group({
      amount: [null, Validators.required],
      receiver: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.apiService.getReceivers().pipe(first()).subscribe(data => this.receivers = data);
  }

  onSubmit() {
    const data = this.transferForm.getRawValue();
    data.receiver = this.receivers.filter((r) => data.receiver == r.account)[0];    
    this.apiService.sendTransfer(data).pipe(first()).subscribe(data => {
      //console.log(data);
    });;
  }
}
