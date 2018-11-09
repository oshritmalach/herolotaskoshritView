import { Component } from '@angular/core';

@Component({
selector: 'app-header', 
template: `
<div class="container-fluid">
  <div class="row header-container">
    <div class="col-md-12">

      <ngb-carousel *ngIf="images">

        <ng-template ngbSlide>
          <img [src]="images[0]" alt="Random first slide">
          <div class="carousel-caption">
            <h1>Cinema-Herolo</h1>
          </div>
        </ng-template>

        <ng-template ngbSlide>
          <img [src]="images[1]" alt="Random second slide">
          <div class="carousel-caption">
            <h1>Cinema-Herolo</h1>
          </div>
        </ng-template>

        <ng-template ngbSlide>
          <img [src]="images[2]" alt="Random third slide">
          <div class="carousel-caption">
            <h1>Cinema-Herolo</h1>
          </div>
        </ng-template>
        
      </ngb-carousel>
    </div>

    <div class="row add-btn">
      <div class="col-md-12">
        <div class="undercarousel">
          <div class="row justify-content-center">
            <button mat-raised-button class="buttons" routerLink="/movie/new">
            Add a new movie!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`,
styles: [`
.container-fluid {
  padding: 0;
}
.header-container {
  width:100%;
  padding: 0 15px;
  margin: 0;
}
.col-md-12 {
  padding: 0;
}
img {
  widht:100%;
}
h1 {
  color:white;
}
.add-btn {
  display:flex;
  width:100%;
  height:100px;
  background-color:#b5e0e6;
  margin: 0 auto;
}
.buttons {
  margin-top:30px;
}
`]})

export class NgbdCarouselBasic {
  images = ["./assets/1השתלטות מהירה - באנר אתר.jpg", "./assets/2באנר אתר -לצוד את האויב.jpg", "./assets/באנר אתר - סיפור אחר(1).jpg"]
}