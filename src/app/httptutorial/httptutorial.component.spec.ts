import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttptutorialComponent } from './httptutorial.component';

describe('HttptutorialComponent', () => {
  let component: HttptutorialComponent;
  let fixture: ComponentFixture<HttptutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttptutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttptutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
