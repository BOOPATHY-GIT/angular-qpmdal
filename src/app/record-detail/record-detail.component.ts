import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.scss']
})
export class RecordDetailComponent implements OnInit {

  record: any;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getARecord(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.record = data;
    })
  }

}
