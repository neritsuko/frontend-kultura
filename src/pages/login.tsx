import React, { Component, FormEvent } from 'react';
import './login.css';

interface LoginState {
  isRegistering: boolean;
  name: string;
  email: string;
  password: string;
}

class Login extends Component<{}, LoginState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isRegistering: false,
      name: '',
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    console.log('Component is mounted');
  }

  componentDidUpdate(prevProps: {}, prevState: LoginState) {
    console.log('Component is updated');
    if (
      this.state.name !== prevState.name ||
      this.state.email !== prevState.email ||
      this.state.password !== prevState.password
    ) {
      // Do something when state changes
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by componentDidCatch:', error.message, errorInfo.componentStack);
  }

  handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      if (this.state.isRegistering) {
        const response = await fetch('https://register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
          }),
        });
  
        if (response.ok) {
          console.log('Регистрация прошла успешно');
        } else {
          console.error('Ошибка регистрации');
        }
      } else {
        const response = await fetch('https://login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
          }),
        });
  
        if (response.ok) {
          console.log('Вход в систему успешен');
        } else {
          console.error('Ошибка входа');
        }
      }
    } catch (error) {
      this.handleError(error as Error);
    } finally {
      window.location.reload(); 
    }
  };

  toggleRegistration = () => {
    this.setState((prevState) => ({ isRegistering: !prevState.isRegistering }));
  };

  handleError = (error: Error) => {
    console.error('Error caught:', error.message);
  };

  render() {
    return (
      <div className='login'>
        <div className="login-container">
          <h1>{this.state.isRegistering ? 'Зарегистрироваться' : 'Войти'}</h1>
          <form onSubmit={this.handleFormSubmit}>
            {this.state.isRegistering && (
              <div className="login-signup">
                <input type="text" placeholder='Ваше имя' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}/>
              </div>
            )}
            <div className="login-signup">
              <input type="email" placeholder='Ваша электронная почта' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
              <input type="password" placeholder='Ваш пароль' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}/>  
            </div>
            <button className="fw-bold" type="submit">
              {this.state.isRegistering ? 'Продолжить' : 'Войти'}
            </button>
          </form>
          <p className='login-login' onClick={this.toggleRegistration}>
            {this.state.isRegistering ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
          </p>
          <div className="login-agree">
            <input type="checkbox" name='' id='' />
            <p>Продолжая, я соглашаюсь с условиями использования и политикой конфиденциальности</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
