import { DonationsService } from './services/donations.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Donation } from './models/donation.model';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {

  form: FormGroup;
  donations: Donation[];

  constructor(
    private fb: FormBuilder,
    private donationsService: DonationsService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadDonations();
  }

  initForm() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: [null, Validators.email],
      amount: ['', [Validators.required, Validators.maxLength(50)]],
      documentNumber: ['', Validators.required],
    });
  }

  loadDonations() {
    this.donationsService.getList().subscribe((donations) => {
      this.donations = [...donations];
    })
  }

  onAddElement() {
    this.donationsService.create({ ...this.form.value }
    ).subscribe(() => {
      this.loadDonations();
    })
  }

}
