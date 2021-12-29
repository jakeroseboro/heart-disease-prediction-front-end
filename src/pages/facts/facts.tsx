import { Container } from 'react-bootstrap';
import { FactChart } from './components/chart'

export const Facts = () =>{
    return(
    <section className="jumbotron">
        <Container>
            <FactChart/>
        </Container>
    </section>
    );
}