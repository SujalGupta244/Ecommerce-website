import notFound from '../assets/img/404-not-found.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <img draggable="false" src={notFound} alt="Page Not Found" />
            <button className='btn'>
                <Link to="/">Back To Home</Link>
            </button>
        </div>
    );
};

export default NotFound;
