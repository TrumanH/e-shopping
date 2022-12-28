import { useNavigate } from 'react-router-dom';
import { DirectoryItemContainer, BackgroundImage, Body } from './directory-item.styles';

const DirectoryItem = ({category}) => {
    const { title, imgUrl, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imgUrl={imgUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>shop now</p>
            </Body>
        </DirectoryItemContainer> 
    )
}

export default DirectoryItem;