import { newArray } from '@angular/compiler/src/util';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardirectives';
  myAge=0;
  technologies='fe';
  nums=0;
  myColor=0;
  dummyArray=new Array(this.nums); // used just for looping
  authArray=new Array(this.nums); // used to save authors
  initializeArray(){
    this.dummyArray=new Array(this.nums);  //3
  }
  showArray(){
    console.log(this.authArray);
  }
  names=['vina','pooja','kj','piu','yash','amar','kavita'];
  cities =['Mumbai','Pune','Solapur','Kolhapur','Ahamadnagar','Satara'];
  ct=this.cities[0];
  bookArray=[
   new Book(234,'java',567,['abc','pooja']), 
   new Book(444,'python',666,['tyu','piyu','sanjeev']),
   new Book(244,'html',236,['kripa','xyz'])
  ];
 
  addBook(bid:string,bname:string,bprice:string):void{
    let bk=new Book(parseInt(bid),bname, parseFloat(bprice),this.authArray);
    this.bookArray.push(bk);
  }
}
class Book{
  bookId:number;
  bookName:string;
  bookPrice:number
  bookAuthors:string[];
  constructor(bookId:number,bookName:string,bookPrice:number,bookAuthors:string[]){
    this.bookId=bookId;
    this.bookName=bookName;
    this.bookPrice=bookPrice;
    this.bookAuthors=bookAuthors;
  }

}