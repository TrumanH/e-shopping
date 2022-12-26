import { Link } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({category}) => {
    const { title, imgUrl} = category;
    return (
        <div className='directory-item-container'>
            <div className='background-image' style={{backgroundImage: `url(${imgUrl})`}}/>
            <div className='body'>
                <Link className='title' to={`shop/${title.toLowerCase()}`}>
                    <h2>{title}</h2>
                </Link>
                <p>shop now</p>
            </div>
        </div> 
    )
}

export default DirectoryItem;