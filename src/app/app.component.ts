import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Posts';

  posts = [
    {
      title: 'First Post',
      content: 'Ceci est le paragraphe du premier post. Rien de bien compliquer. Bon allez au suivant',
      loveIts: 12,
      created_at: new Date()
    },
    {
      title: 'Second Post',
      content: 'Ceci est le paragraphe du deuxiéme post. Rien de bien compliquer. Bon allez au suivant',
      loveIts: 12,
      created_at: new Date()
    },
    {
      title: 'Third Post',
      content: 'Ceci est le paragraphe du troisiéme post. Rien de bien compliquer. Bon allez au suivant',
      loveIts: 12,
      created_at: new Date()
    },
    {
      title: 'Fourth Post',
      content: 'Ceci est le paragraphe du quatriéme post. Rien de bien compliquer. Bon allez au suivant',
      loveIts: 12,
      created_at: new Date()
    }
  ];
}
