import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

const Directory = () => {
  const categories = [
    {id: 1, title:"hats", 
    imgUrl:"https://pic.ntimg.cn/20110908/6097712_102746637123_2.jpg",
    route: "shop/hats",
    },
    {id:2, title:"jackets", 
    imgUrl:"http://img3.99114.com/group1/M00/3F/DC/wKgGTFkXaXaAaLvdAALdVAnpmug589.jpg",
    route: "shop/jackets"},
    {id:3, title:"sneakers", 
    imgUrl:"https://image.peltzshoes.com/images/products/1_748022_ZM.jpg",
    route: "shop/sneakers"},
    {id:4, title:"womens", 
    imgUrl:"https://img.zcool.cn/community/014e4058f588aea8012049efe5dbcf.jpg@1280w_1l_2o_100sh.jpg",
    route: "shop/womens"},
    {id:5, title:"mens", 
    imgUrl:"https://img.zcool.cn/community/0176795a28b781a80120ba38c9fc78.JPG@1280w_1l_2o_100sh.jpg",
    route:"shop/mens"},
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