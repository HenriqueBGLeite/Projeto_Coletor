import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProdutoComponent } from './home-produto.component';

describe('HomeProdutoComponent', () => {
  let component: HomeProdutoComponent;
  let fixture: ComponentFixture<HomeProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
