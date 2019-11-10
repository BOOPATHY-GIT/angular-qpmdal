import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-record-update',
  templateUrl: './record-update.component.html',
  styleUrls: ['./record-update.component.scss']
})
export class RecordUpdateComponent implements OnInit {

  @Input() recordData = { prod_name: '', prod_desc: '', prod_price:0 };

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.rest.getARecord(this.route.snapshot.params['id']).subscribe((record: any) => {
      this.recordData = record;
    }, err => {
      console.log(err);
    })
  }

  public updateRecord () {
    this.rest.updateARecord(this.route.snapshot.params['id'], this.recordData).subscribe(record => {
      this.router.navigate(['/record-detail/'+record.id]);;
    }, err => {
      console.log(err);
    })

  }

}
