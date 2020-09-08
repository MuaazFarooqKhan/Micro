import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../models/product';
import { MessengerService } from '../../../../services/messenger.service';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {

  @Input() productItem : Product
  constructor( private _msg : MessengerService ) { }

  ngOnInit(): void {
  }

  handleAddtoCart(){
    this._msg.sendMsg(this.productItem)
  }
}
