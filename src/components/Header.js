
function Header(props) {
    return (
        <div className = 'header'>
            <h1>Notes App</h1>
            <button onClick = {() => props.handleToggle(prev => !prev)}>Toggle Mode</button>
        </div>
    )
}

export default Header