import styles from './footer.module.css';

function Footer(props) {
    return (
        <div className={styles.root}>
            {new Date().getFullYear()}
        </div>
    );
}

export default Footer;