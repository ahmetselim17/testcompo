import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-depo',
  templateUrl: './depo.component.html',
  styleUrls: ['./depo.component.scss']
}
)
export class DepoComponent implements OnInit {
  depoTipleri: string[] = ['Ekip Depo', 'Dolu Depo', 'Boş Depo' ];
  depoBirimleri: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware' ];
  depoEkipleri: string[] = ['Eyüpsultan', 'Dere-2', 'Sarıyer', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware' ];
  depoUstleri: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware' ];
  depoYoneticileri: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware' ];
  
  ngOnInit(): void {

  }

  onSecildi(){
    console.info("kemlelrserfse");
  }


 
}