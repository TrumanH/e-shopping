// import { Outlet } from 'react-router-dom'
import Directory from '../../components/directory/directory.component'

const Home = ()=> {
  const categories = [
    {id: 1, title:"Hats", imgUrl:"https://pic.ntimg.cn/20110908/6097712_102746637123_2.jpg"},
    {id:2, title:"Jackets", imgUrl:"http://img3.99114.com/group1/M00/3F/DC/wKgGTFkXaXaAaLvdAALdVAnpmug589.jpg"},
    {id:3, title:"Sneakers", imgUrl:"https://image.peltzshoes.com/images/products/1_748022_ZM.jpg"},
    {id:4, title:"Womens", imgUrl:"https://img.zcool.cn/community/014e4058f588aea8012049efe5dbcf.jpg@1280w_1l_2o_100sh.jpg"},
    {id:5, title:"Mens", imgUrl:"https://img.zcool.cn/community/0176795a28b781a80120ba38c9fc78.JPG@1280w_1l_2o_100sh.jpg"},
  ]
  // TODO: settle all images as static resource. 
  return (
    <div className="home">
      <Directory className='categories-container' categories={categories}/>
    </div>
  );
}

export default Home;