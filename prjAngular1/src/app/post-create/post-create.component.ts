import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
})
export class PostCreateComponent {
  inputPost = '';
  newPost = 'Inialisasi Variabel';
  //String Interpolation{{}}

  onSavePost() {
    alert('Halo Dunia');
    //this.newPost = '';
  }
}
