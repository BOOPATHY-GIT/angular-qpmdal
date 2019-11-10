import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-record-add',
  templateUrl: './record-add.component.html',
  styleUrls: ['./record-add.component.scss']
})
export class RecordAddComponent implements OnInit {
  @Input() recordData = { prod_name:'', prod_desc: '', prod_price: 0 };
  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addRecord () {
    this.rest.addARecord(this.recordData).subscribe(res => {
      console.log('record added');
      this.router.navigate(['']);
    }, err => {
      console.log(err);
    });
  }

}
