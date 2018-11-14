import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.css']
})
export class PostlistitemComponent implements OnInit {

  nbreLoveIt = 1;
  nbreDontLoveIt = 1;
  @Input()
  title: string;
  @Input()
  content: string;
  @Input()
  loveIts: number;
  @Input()
  created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    this.nbreLoveIt++ ;
  }
  onDontLoveIt() {
    this.nbreDontLoveIt++ ;
  }

}
