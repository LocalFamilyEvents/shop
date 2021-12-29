import './component.css';

function Footer(props) {
    return (
        <div className='footer'>
            {new Date().getFullYear()}
        </div>
    );
}

export default Footer;