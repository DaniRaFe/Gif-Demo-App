
import { useState } from "react"
import Categories from "./Components/Categories"
import GifsExpo from "./Components/GifsExpo"
function App() {
  const [categories, setCategories] = useState(["Robotech","Mazinger Z"])
  return (
    <div className="m-5">
      <h3>Gif Demo App</h3>
      <hr/>
        <Categories
        categories={categories}
        setCategories={setCategories}
        />
      <hr/>
      <GifsExpo 
      categories={categories}
      setCategories={setCategories}
      />
    </div>
  )
}
export default App
