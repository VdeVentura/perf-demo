import styled from "styled-components";
import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import SingleColumn from "@components/templates/SingleColumn";
import Card from "@components/atoms/Card";
import Container from "@components/atoms/Container";
import Block from "@components/atoms/Block";
import Title from "@components/atoms/Title";
import TextField from "@components/atoms/TextField";
import Button from "@components/atoms/Button";
import { ROUTES } from "../../routes";

const LoginWrapper = styled(SingleColumn)`
  max-width: 460px;
`;

const LoginCard = styled(Card)`
  margin: auto;
  margin-top: ${({ theme }) => theme.spacing.normal};
  box-shadow: 0 4px 8px 0 rgba(48, 82, 120, 0.16);
`;

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <LoginWrapper fullHeight>
      <LoginCard>
        <Container>
          <Block>
            <Title size="big">Welcome back</Title>
          </Block>

          <Formik initialValues={{ email: "", password: "" }} onSubmit={() => navigate(ROUTES.JOB_SEARCH)}>
            <Form>
              <Container>
                <Block verticalPadding="small">
                  <TextField name="email" label="Email" />
                </Block>

                <Block verticalPadding="small">
                  <TextField type="password" name="password" label="Password" />
                </Block>

                <Block verticalPadding="small">
                  <Button color="primary" full type="submit">
                    Login
                  </Button>
                </Block>
              </Container>
            </Form>
          </Formik>

          <Block verticalPadding="small" textAlign="center">
            <Button color="primary" flat full as={Link} to="/forgot-password">
              Forgot Password?
            </Button>
          </Block>

          <Block verticalPadding="normal">
            <Button color="primary" flat full as={Link} to="/create-account">
              Create an account
            </Button>
          </Block>
        </Container>
      </LoginCard>
    </LoginWrapper>
  );
};

export default LoginPage;
