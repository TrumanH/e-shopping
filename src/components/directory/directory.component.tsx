import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

const Directory = () => {
  const categories = [
    {id: 1, title:"hats", 
    imgUrl:"img/category-hats.jpg",
    route: "shop/hats",
    },
    {id:2, title:"jackets", 
    imgUrl:"img/category-jackets.jpg",
    route: "shop/jackets"},
    {id:3, title:"sneakers", 
    imgUrl:"img/category-sneakers.jpg",
    route: "shop/sneakers"},
    {id:4, title:"womens", 
    imgUrl:"img/category-womens.jpg",
    route: "shop/womens"},
    {id:5, title:"mens", 
    imgUrl:"img/category-mens.jpg",
    route:"shop/mens"},
    {id:6, title:"electronics", 
    imgUrl: "img/category-electronic.jpg",
    route:"shop/electronics"},
  ]

  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category}/>
      ))}
    </DirectoryContainer>
  )
}

export default Directory;