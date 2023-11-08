import { Injectable } from "@angular/core";

// Injectable sayesinde ilgili servisin constructor içerisinden başka bir classı inject edebilmesi özelliğini
//  kazandırmış oluruz. Aksi halde servisi provider kısmına eklerken Injectable bir class olmadığı için hata verecektir.
@Injectable()
export class ProductService {
  constructor(private loggerService: LoggerService) {}
  getProducts(): Product[] {
    return [
      { name: "Keyboard", quantity: 10 },
      { name: "Mouse", quantity: 10 },
      { name: "Monitor", quantity: 10 },
      { name: "Microphone", quantity: 10 },
      { name: "Webcam", quantity: 10 },
    ];
  }
}
export class Product {
  public name: string;
  public quantity: number;
}

//Root olarak seçmek o servisin her yerden provide edilebileceği anlamına gelir.
//Kullanılmadığı takdirde ilgili servisin kullanılacak modüle içerisinde provide edilmesi-eklenmesi gerekir.
// "root" kullanmamız durumunda nesne singelton olarak provide edilecektir.
// "any" şeklinde kullanmamız durumunda ise her çağrıldığında başka bir instance oluşturarak gönderecektir.

@Injectable({ providedIn: "root" })
export class LoggerService {
  constructor() {
    console.log("Log...");
  }
}
