import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buku } from '../models/buku.mode';

@Injectable({
  providedIn: 'root',
})
export class BukuService {
  private url: string = 'http://localhost:3000/buku';

  constructor() {}

  addBuku(judul: string, penulis: string, genres: string[]) {
    const buku: Buku = {
      _id: null,
      judul: judul,
      penulis: penulis,
      genre: genres,
    };
    console.log(buku);

    // this.http.post<{message : string}>(this.url,buku)
    // .subscribe((response)=>{
    //   console.log(response.message)
    // });
  }
}
