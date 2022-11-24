import './components/category-item/category-item.styles.scss'
import CategoryCard from './components/category-item/category-item.component'

const App = ()=> {
  const categories = [
    {id: 1, title:"Hats", imgUrl:"1"},
    {id:2, title:"Jackets", imgUrl:"2"},
    {id:3, title:"Sneakers", imgUrl:""},
    {id:4, title:"Womens", imgUrl:""},
    {id:5, title:"Mens", imgUrl:""},
  ]
  return (
    <div className="App">
      <div className='categories-container'>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category}/>
        ))}
      </div>
    </div>
  );
}

export default App;
