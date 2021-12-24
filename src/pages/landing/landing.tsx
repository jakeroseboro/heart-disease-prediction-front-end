import { Container } from 'react-bootstrap';
import { Cards } from './components/cards';
import Heart from '../../assets/heart.png';

export const Landing = () =>{
    return(
    <section className="jumbotron">
        <Container>
            <img src={Heart}></img>
            <Cards />
        </Container>
    </section>
    );
}