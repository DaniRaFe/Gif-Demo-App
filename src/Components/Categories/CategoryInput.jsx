import {useState} from "react"
const CategoryInput = ({categories = [], setCategories}) => {
    const [inputValue, setInputValue] = useState ("")
    const handleInputChange = (target) => {
        setInputValue(target.value)
    }
const handleAddCategoryButton = () => {
    setCategories([inputValue, ...categories])
}
return (
    <div>
        <input
        onChange={(e) => handleInputChange(e)}
        placeholder="Write category name"
        type="text"
    />
    
    <button
    className="btn btn-primary btn-sm ms-2 mb-1"
    onClick={handleAddCategoryButton}
    type="button"
    >
        Add
    </button>
    </div>
    )
}
export default CategoryInput