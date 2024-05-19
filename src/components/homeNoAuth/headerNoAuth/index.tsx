import Link from "next/link";
import { Container, Button } from "reactstrap";
import styles from "./styles.module.scss";

const HeaderNoAuth = function () {
    return (
        <>
            <>
                <div className={styles.ctaSection}>
                    <p>Se cadastre para ter acesso aos cursos</p>
                </div>
                <Container className={styles.nav}>
                    <img
                        src="/logoCurso.png"
                        alt="logocurso"
                        className={styles.imgLogoNav}
                    />
                    <div>
                        <Link href="/login">
                            <Button className={styles.navBtn}>Entrar</Button>
                        </Link>
                        <Link href="/register">
                            <Button className={styles.navBtn}>Quero fazer parte</Button>
                        </Link>
                    </div>
                </Container>
            </>
        </>
    );
};

export default HeaderNoAuth;