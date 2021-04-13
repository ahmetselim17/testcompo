import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}




@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
}
)
export class TestComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  depoTipleri: any[] = ['Ekip Depo', 'Dolu Depo', 'Boş Depo' ];
  depoBirimleri: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware' ];
  depoEkipleri: string[] = ['Eyüpsultan', 'Dere-2', 'Sarıyer', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware' ];
  depoUstleri: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware' ];
  depoYoneticileri: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware' ];
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  ngOnInit(): void {
 
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  
  

 
}

