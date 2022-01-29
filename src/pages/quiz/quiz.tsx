import { Container } from 'react-bootstrap';
import { Questions } from './components/questions';

export const Quiz = () =>{
    return(
    <section className="jumbotron">
        <Container>
            <Questions />
        </Container>
    </section>
    );
}