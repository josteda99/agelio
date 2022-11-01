import { Component, ViewChild } from '@angular/core';
import { IonModal, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  @ViewChild(IonModal) modal: IonModal;
  user = {
    nombre: 'Quentin Tarantulino',
    edad: 34,
    ocupacion: 'Estudiante de Cine',
    avatar:
      'https://media.revistagq.com/photos/5d39684e83c91000087972f1/16:9/w_2400,h_1350,c_limit/mejor%20pelicula%20quentin%20tarantino.jpg',
    intereses: ['cocina', 'arte', 'motos'],
    ense: ['fotografia', 'composicion', 'edicion'],
  };

  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  constructor(private toastController: ToastController) {}
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Anuncio creado con exito!',
      duration: 1500,
      position: 'bottom',
      color: 'success',
    });

    await toast.present();
  }
}
