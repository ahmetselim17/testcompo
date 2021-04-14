import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-zimmet',
  templateUrl: './zimmet.component.html',
  styleUrls: ['./zimmet.component.scss']
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