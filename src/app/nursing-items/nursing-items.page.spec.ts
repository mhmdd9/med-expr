import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NursingItemsPage } from './nursing-items.page';

describe('NursingItemsPage', () => {
  let component: NursingItemsPage;
  let fixture: ComponentFixture<NursingItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NursingItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NursingItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
