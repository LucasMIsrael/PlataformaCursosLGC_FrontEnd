import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = function () {
    return <>
        <Container className={styles.footer}>
            <img src="/Centro-Universitário-Católica-de-SC.png" alt="logoFooter" className={styles.footerLogo} />
            <a href="https://www.catolicasc.org.br/" target={"blank"} className={styles.footerLink}>CATOLICASC.ORG.BR</a>
        </Container>
    </>
};

export default Footer