import styles from "./styles.module.scss";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

const PresentationSection = function () {
    return (
        <>
            <Container className="py-4">
                <Row>
                    <Col md className="d-flex flex-column justify-content-center align-items-start">
                        <p className={styles.subTitle}>ACESSO ILIMITADO</p>
                        <p className={styles.tittle}>Tenha acesso aos melhores <br /> tutoriais de Programação.</p>
                        <p className={styles.description}>
                            Estude de onde estiver, a qualquer momento, e continui <br />
                            evoluido como programador.
                        </p>
                        <Link href="/register" className="text-decoration-none">
                            <Button outline className={styles.btnCta}>ACESSE AGORA
                                <img
                                    src="/buttonPlay.png"
                                    alt="buttonImg"
                                    className={styles.btnImg}
                                />
                            </Button>
                        </Link>
                    </Col>
                    <Col md>
                        <img
                            src="/homeNoAuth/imgPresentation.png"
                            alt="imgIndex"
                            className={styles.imgPresentation}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center pt-5">
                        <img
                            src="/homeNoAuth/iconArrowDown.svg"
                            alt="arrowDown"
                            className={styles.arrowDown}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PresentationSection;