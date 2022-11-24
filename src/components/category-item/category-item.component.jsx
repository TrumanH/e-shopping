
const CategoryCard = ({category}) => {
    const {id, title, imgUrl} = category;
    return (
        <div className='category-container'>
            <div className='category-image' /><p>{imgUrl}</p>
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>shop now</p>
            </div>
        </div> 
    )
}

export default CategoryCard