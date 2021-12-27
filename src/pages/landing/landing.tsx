import { Container } from 'react-bootstrap';
import { Cards } from './components/cards';
import './landing.scss'

export const Landing = () =>{
    return(
    <section className="jumbotron landing">
        <Container>
            <Cards />
        </Container>
    </section>
    );
}