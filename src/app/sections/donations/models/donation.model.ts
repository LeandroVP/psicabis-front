export interface Donation extends NewDonation {
  date: Date
  id: string;
}

export interface NewDonation {
  amount: number;
  documentNumber: string;
  email: string;
  lastName: string;
  firstName: string;
}
