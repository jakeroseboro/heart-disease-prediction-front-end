import { Container } from 'react-bootstrap';
import { LoginForm } from './components/loginForm';

export const Login = () =>{
    return(
    <section className="jumbotron landing">
        <Container>
            <LoginForm/>
        </Container>
    </section>
    );
}