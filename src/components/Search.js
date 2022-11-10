import { MdSearch } from "react-icons/md"
import { useDispatch } from "react-redux"
import searchSlice from "../redux/reducer/searchSlice"

function Search() {
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(searchSlice.actions.setFilterText(e.target.value.trim()))
    }

    return (
        <div className = 'search'>
            <MdSearch size = '1.3em'/>
            <input type = 'text' placeholder = 'type to search...' onChange = {handleChange}/>
        </div>
    )
}

export default Search