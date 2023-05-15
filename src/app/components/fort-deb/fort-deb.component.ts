import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-fort-deb',
  templateUrl: './fort-deb.component.html',
  styleUrls: ['./fort-deb.component.css']
})
export class FortDebComponent implements OnInit {

  hardSkills:any;
  constructor(private datosPortfolio:PortfolioService){}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      this.hardSkills=data.habilidades
    })
  }

}
