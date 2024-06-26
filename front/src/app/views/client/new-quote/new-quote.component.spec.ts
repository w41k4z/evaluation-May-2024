import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuoteComponent } from './new-quote.component';

describe('NewQuoteComponent', () => {
  let component: NewQuoteComponent;
  let fixture: ComponentFixture<NewQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewQuoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
