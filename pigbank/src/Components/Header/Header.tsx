import { Container } from "./style";
import logoImg  from '../../Assets/images/logo.png';
import { FaPiggyBank } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <Container>
            <Link to="/">
                <FaPiggyBank/>
                <span>PigBank</span>
            </Link>
        </Container>
    )
}