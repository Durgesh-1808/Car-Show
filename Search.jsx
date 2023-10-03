import {AiOutlineSearch} from 'react-icons/ai';

const SearchBar = () => {
    return<>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '1rem'}}><input placeholder="Search" style={{border: 'none',
    height: '2rem'}}/>
    <AiOutlineSearch style={{backgroundColor: 'white', height: '2rem'}}/>
    </div>
    </>
}

export default SearchBar;