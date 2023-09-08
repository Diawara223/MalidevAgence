import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  public appPages = [
    { title: 'Dashboard', url: '/folder/dashboard', icon: 'stats-chart' },
    { title: 'Clients', url: '/folder/clients', icon: 'person' },
    { title: 'Comptabilité', url: '/folder/compta', icon: 'calculator' },
    { title: 'Facturation', url: '/folder/facturation', icon: 'today' },
    { title: 'Fournisseurs', url: '/folder/fournisseurs', icon: 'grid' },
    { title: 'Achat', url: '/folder/achat', icon: 'cart' },
    { title: 'Contrats', url: '/folder/contrats', icon: 'clipboard' },
    { title: 'Projets', url: '/folder/projets', icon: 'cube' },
    { title: 'Prospects', url: '/folder/prospects', icon: 'person-circle' },
    { title: 'SMS', url: '/folder/sms', icon: 'mail' },
    { title: 'Support', url: '/folder/support', icon: 'call' },
    { title: 'Base de connaissances', url: '/folder/base-de-connaissances', icon: 'map' },
    { title: 'Commandes', url: '/folder/commande', icon: 'bag' },
    { title: 'Ressources Humaines', url: '/folder/ressources-humain', icon: 'people-circle' },
    { title: 'Documents', url: '/folder/documents', icon: 'folder' },
    { title: 'Taches', url: '/folder/taches', icon: 'list' },
    { title: 'Calendrier', url: '/folder/calendrier', icon: 'calendar-number' },
    { title: 'Produits & Services', url: '/folder/produit-services', icon: 'business' },
    { title: 'Rapports', url: '/folder/rapport', icon: 'bar-chart' },
    { title: 'Outils', url: '/folder/outils', icon: 'settings' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
