import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIssueComponent } from './item-issue.component';

describe('ItemIssueComponent', () => {
  let component: ItemIssueComponent;
  let fixture: ComponentFixture<ItemIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
