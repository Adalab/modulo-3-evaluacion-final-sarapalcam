import title from '../images/title_HP.png';
import '../styles/components/Header.scss';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">Buscador de personajes de </h1>
            <img className="header__title--logo" src={title} alt="Logo de Harry Potter" title="Logo de Harry Potter"/>
        </header>
        
    )
}

export default Header;