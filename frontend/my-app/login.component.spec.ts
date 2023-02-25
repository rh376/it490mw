import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a username input field', () => {
    const usernameInput = fixture.nativeElement.querySelector('#username');
    expect(usernameInput).toBeTruthy();
  });

  it('should have a password input field', () => {
    const passwordInput = fixture.nativeElement.querySelector('#password');
    expect(passwordInput).toBeTruthy();
  });

  it('should have a login button', () => {
    const loginButton = fixture.nativeElement.querySelector('#login');
    expect(loginButton).toBeTruthy();
  });

  // ... more tests ...
});
