/* eslint-disable max-len */
import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  model = [
    {
      category: 'Cocer',
      title: 'Te enseño a cocer si me enseñas a usar mi celular',
      image:
        'https://thumbs.dreamstime.com/b/buen-sastre-joven-que-trabaja-en-la-m%C3%A1quina-de-coser-mano-hace-ropa-el-interior-del-hogar-mujer-cauc%C3%A1sica-rizado-se-sienta-210721840.jpg',
    },
    {
      category: 'Cocer',
      title: 'Te enseño a cocer si me enseñas a cocinar',
      image:
        'https://media.istockphoto.com/id/1301201223/es/foto/una-mujer-sastre-trabaja-en-la-m%C3%A1quina-de-coser-cosiendo-reutiliza-tela-de-ropa-vieja-de.jpg?s=612x612&w=0&k=20&c=HAnvaxH3z2mHiPigscOUEUP77FMA74XXcebjzucBNSQ=',
    },
    {
      category: 'Cocer',
      title: 'Te enseño a cocer si me enseñas a editar',
      image:
        'https://img.freepik.com/fotos-premium/proceso-costura-primer-plano-reparar-ropa-coser-maquina-coser-concepto-reparacion-ropa-hobby-o-ganar-dinero-cosiendo-ropa_295890-2563.jpg?w=2000',
    },
    {
      category: 'Cocer',
      title: 'Te enseño a cocer si me enseñas a redactar',
      image:
        'https://lanotapositiva.com/wp-content/uploads/2019/08/shutterstock_1026935038.jpg',
    },
    {
      category: 'Cocina',
      title: 'Te enseño a cocinar si me enseñas a andar en moto',
      image:
        'https://www.formulamoto.es/wp-content/uploads/2020/06/consejosmoto1-1.jpg.webp',
    },
    {
      category: 'Matematicas',
      title: 'Te enseño a integrar si me enseñas a tomar fotos',
      image:
        'https://capturetheatlas.com/wp-content/uploads/2020/04/Landscape-photography-gear.jpg',
    },
  ];
  constructor() {}

  async openLink() {
    const url =
      'https://docs.google.com/forms/d/e/1FAIpQLSda2E6MkXyrC0a_ptBmn7ZXEytzgiZARiA3AEib4eAW4VESSw/viewform';
    await Browser.open({ url });
  }
}
