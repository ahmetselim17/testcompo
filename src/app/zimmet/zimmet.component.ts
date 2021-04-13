import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-depo',
  templateUrl: './depo.component.html',
  styleUrls: ['./depo.component.scss']
}
)
export class ZimmetComponent implements OnInit {
  stokAdlari: string[] = ['Ekip Depo', 'Dolu Depo', 'Boş Depo' ];
  zimmetDepoAdlari: string[] = ['Ekip Depo', 'Dolu Depo', 'Boş Depo' ];
  alanKisiler: string[] = ['Ekip Depo', 'Dolu Depo', 'Boş Depo' ];

  ngOnInit(): void {

  }

  onSecildi(){
    console.info("kemlelrserfse");
  }


 
}