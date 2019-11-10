import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';

import { RecordComponent } from './record.component';
import { RestService } from '../rest.service';

fdescribe('RecordComponent', () => {
  let component: RecordComponent;
  let fixture: ComponentFixture<RecordComponent>;
  let rest: RestService;
  const getTestRecords = getMockRecords();

  beforeEach(async(() => {
    const restServiceMock = jasmine.createSpyObj(['getAllRecords']);
    TestBed.configureTestingModule({
      declarations: [ RecordComponent ],
      imports:[ RouterTestingModule],
      providers: [
        { provide: RestService, useValue: restServiceMock }
      ]
    })
    .compileComponents()
    .then (() => {
      fixture = TestBed.createComponent(RecordComponent);
      component = fixture.componentInstance;
      restServiceMock.getAllRecords.and.returnValue(of(getTestRecords));
      fixture.detectChanges();
    });
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(RecordComponent);
  //   component = fixture.componentInstance;
  //   this.restServiceMock.getAllRecords.and.returnValue(of(this.records));
  //   // rest = TestBed.get(RestService);
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should set records property with the items returned from the server (Observable)', () => {
    component.ngOnInit();
    fixture.detectChanges();
    console.log('component.records' + component.records);
    console.log('testRecords' + getTestRecords);
    expect(component.records).toEqual(getTestRecords);
  });

  function getMockRecords () {
    return [
      {
        "id": 1,
        "prod_name": "iPhone X",
        "prod_desc": "smart phone from apple",
        "prod_price": 800
      },
      {
        "id": 2,
        "prod_name": "galaxy s10",
        "prod_desc": "smart phone from Samsung",
        "prod_price": 700
      },
      {
        "id": 3,
        "prod_name": "one Plus 7T",
        "prod_desc": "smart phone from One plus",
        "prod_price": 500
      },
      {
        "id": 4,
        "prod_name": "MI 7pro",
        "prod_desc": "xiami phone",
        "prod_price": "300"
      }
    ]
  }
});
