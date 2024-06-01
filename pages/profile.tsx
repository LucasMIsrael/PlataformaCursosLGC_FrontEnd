import Head from "next/head";
import styles from "../styles/profile.module.scss";
import UserForm from "../src/components/profile/user";
import HeaderAuth from "@/src/components/common/headerAuth";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "@/src/components/common/footer";

const UserInfo = function () {
  return (
    <>
      <Head>
        <title>SkillUp - Meus Dados</title>
        <link rel="shortcut icon" href="/logoCurso.png" type="image/x-icon" />
      </Head>
      <main>
        <div className={styles.header}>
          <HeaderAuth />
        </div>
        <Container className="py-5">
          <p className={styles.title}>Minha Conta</p>
          <Row className="pt-3 pb-5">
            <Col mc={4} className={styles.btnColumn}>
              <Button outline className={styles.renderFormBtn}>
                DADOS PESSOAIS
              </Button>
              <Button outline className={styles.renderFormBtn}>
                SENHA
              </Button>
            </Col>
            <Col md>
              <UserForm />
            </Col>
          </Row>
        </Container>
      </main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default UserInfo;
