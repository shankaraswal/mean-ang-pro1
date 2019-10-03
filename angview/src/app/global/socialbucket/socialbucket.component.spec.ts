import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialbucketComponent } from './socialbucket.component';

describe('SocialbucketComponent', () => {
  let component: SocialbucketComponent;
  let fixture: ComponentFixture<SocialbucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialbucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialbucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
