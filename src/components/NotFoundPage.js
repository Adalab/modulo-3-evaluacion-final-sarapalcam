import "../styles/components/NotFoundPage.scss";
import NotFoundImg from "../images/not_found.png";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <article className="not-found">
      <h2 className="not-found__title">
        ¡Ooops! Parece que la página que estás buscando no existe
      </h2>
      <img
        className="not-found__img"
        src={NotFoundImg}
        alt="Imagen de una escoba voladora"
        title="Imagen de una escoba voladora"
      />
      <Link to="/">
        <button className="not-found__link">
          Volver a la página de inicio en lo que tardas en decir Quidditch
        </button>
      </Link>
    </article>
  );
};

export default NotFoundPage;
