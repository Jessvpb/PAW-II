import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BukuService } from '../services/buku.service';
import { Buku } from '../models/buku.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrl: './buku.component.css',
})
export class BukuComponent implements OnInit, OnDestroy {
  bukuList: Buku[] = [];
  private getBukuSub: Subscription = new Subscription();
  private messageSub: Subscription = new Subscription();
  messageExecute: string = ' ';

  mode: string = 'Simpan';

  //pagination
  p: number = 1;

  constructor(public bukuService: BukuService) {}
  ngOnInit(): void {
    this.getBukuSub = this.bukuService
      .getBukuListener()
      .subscribe((value: Buku[]) => {
        this.bukuList = value;
      });

    this.messageSub = this.bukuService
      .exexuteBukuListener()
      .subscribe((value: string) => {
        this.messageExecute = value;
      });

    this.bukuService.getBuku();
  }

  ngOnDestroy(): void {}

  tampilData(buku: Buku, form: NgForm) {
    var gen1: boolean = false;
    var gen2: boolean = false;
    var gen3: boolean = false;

    buku.genre.forEach((val) => {
      if (val.toUpperCase() === 'BIOGRAFI') {
        gen1 = true;
      } else if (val.toUpperCase() === 'PENDIDIKAN') {
        gen2 = true;
      } else if (val.toUpperCase() === 'LAINNYA') {
        gen3 = true;
      }
    });

    form.setValue({
      judul: buku.judul,
      penulis: buku.penulis,
      genre1: gen1,
      genre2: gen2,
      genre3: gen3,
    });
  }

  simpanBuku(form: NgForm) {
    if (form.invalid) {
      console.log('Tidak Valid');
      alert('Data tidak valid');
      return;
    }

    let genres: string[] = [];

    if (form.value.genre1 == true) {
      genres.push('Biografi');
    }

    if (form.value.genre2 == true) {
      genres.push('Pendidikan');
    }

    if (form.value.genre3 == true) {
      genres.push('Lainnya');
    }
    console.log('Pengujian Klik');
    console.log(form.value.judul);
    console.log(form.value.penulis);
    console.log(genres);

    this.bukuService.addBuku(form.value.judul, form.value.penulis, genres);
    form.resetForm();
  }

  hapusBuku(buku: Buku) {
    if (confirm('Hapus Data Buku : ' + buku.judul)) {
      this.bukuService.deleteBuku(buku);
    }
  }
}
