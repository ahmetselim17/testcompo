import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personel',
  templateUrl: './personel.component.html',
  styleUrls: ['./personel.component.scss']
})
export class PersonelComponent implements OnInit {
  personelEngeller: string[] = ['Ekip Depo', 'Dolu Depo', 'Boş Depo' ];
  personelKangrublari: string[] = ['Ekip Depo', 'Dolu Depo', 'Boş Depo' ];
  mezuniyetler: string[] = ['Ekip Depo', 'Dolu Depo', 'Boş Depo' ];
  ehliyetSiniflari: string[] = ['Ekip Depo', 'Dolu Depo', 'Boş Depo' ];
  medeniHalleri: string[] = ['Ekip Depo', 'Dolu Depo', 'Boş Depo' ];
  personelZanaatlar: string[] = ['Ekip Depo', 'Dolu Depo', 'Boş Depo' ];

 

  constructor() { }

  ngOnInit(): void {
  }

}
