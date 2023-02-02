import { FC } from "react";
import { useNavigate } from 'react-router-dom';
import { DirectoryItemContainer, BackgroundImage, Body } from './directory-item.styles';

interface DirectoryItemProps {
    category: {
        id: number;
        title: string;
        imgUrl: string;
        route: string;
    }
}

const DirectoryItem: FC<DirectoryItemProps> = ({category}) => {
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