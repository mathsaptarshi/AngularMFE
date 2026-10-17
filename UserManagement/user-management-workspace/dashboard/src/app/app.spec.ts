import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the authenticated user name', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.componentRef.setInput('user', {
      name: 'Saptarshi Biswas',
      email: 'saptarshi@example.com',
    });
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.user-name')?.textContent).toContain('Saptarshi Biswas');
    expect(compiled.querySelector('.active-label')?.textContent).toContain('Active');
  });
});
