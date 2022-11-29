import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { BankService } from 'src/app/services/bank.service';
import { Bank } from 'src/app/services/interfaces/bank.interface';

@Component({
  selector: 'app-receiver-form',
  templateUrl: './receiver-form.component.html',
  styleUrls: ['./receiver-form.component.sass']
})
export class ReceiverFormComponent implements OnInit {
  banks: Bank[];
  receiverForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private bankService: BankService,
    private apiService: ApiService
  ) {
    this.banks = [];
    this.receiverForm = this.formBuilder.group({ 
      rut: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required],
      account: [, Validators.required],
      bank: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.bankService.getBanks().pipe(first()).subscribe(data => {
      this.banks = data.Banco;
    });
  }
  

  onSubmit() {
    const data = this.receiverForm.getRawValue();
    this.apiService.registerReceiver(data).pipe(first()).subscribe(data => {
      //console.log(data);
    })
  }
}
