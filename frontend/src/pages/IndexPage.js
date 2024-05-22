import { useEffect } from "react"
import Recipe from "../Recipe"

export default function IndexPage() {

    const [recipes, setRecipes] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:4000/post').then(response => {
            response.json().then(recipes => {
                setRecipes(recipes)
            })
        })
    }, [])

    return (
        <>
            {recipes.length > 0 && recipes.map(recipe => (
                <Recipe {...recipe} />
            ))}
        </>
    )
}