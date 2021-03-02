import { Component, OnInit } from '@angular/core';

interface Componentes{
icon: string;
name:string;
redirectTo:string;

}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componentes[]=[

    {
      icon:'american-football-outline',
      name:'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon:'alert-circle-outline',
      name:'Alert',
      redirectTo: '/alert'
    },
    {
      icon:'beaker-outline',
      name:'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon:'radio-button-off-sharp',
      name:'Button',
      redirectTo: '/button'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
