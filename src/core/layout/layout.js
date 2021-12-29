import './component.css';

function Layout(props) {
    return (
        <div className='root'>
            {props.children}
        </div>
    )
}

export default Layout;