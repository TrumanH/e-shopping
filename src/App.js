import './components/category-item/category-item.styles.scss'
import Directory from './components/directory/directory.component'

const App = ()=> {
  const categories = [
    {id: 1, title:"Hats", imgUrl:"https://pic.ntimg.cn/20110908/6097712_102746637123_2.jpg"},
    {id:2, title:"Jackets", imgUrl:""},
    {id:3, title:"Sneakers", imgUrl:""},
    {id:4, title:"Womens", imgUrl:""},
    {id:5, title:"Mens", imgUrl:""},
  ]
  return (
    <div className="App">
      <Directory className='categories-container' categories={categories}/>
    </div>
  );
}

export default App;
