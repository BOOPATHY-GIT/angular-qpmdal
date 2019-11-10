import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordDeleteComponent } from './record-delete.component';

describe('RecordDeleteComponent', () => {
  let component: RecordDeleteComponent;
  let fixture: ComponentFixture<RecordDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
