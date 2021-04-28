import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Informe um e-mail valido'),
        password: Yup.string().min(6, 'Mínimo de 6 caracteres'),
      });

      await schema.validate(data, {
        abortEarly: false /* Retorna todos os erros e não só o primeiro */,
      });
    } catch (err) {
      console.log(err.errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form
          // initialData={{ email: 'jonathancmpc@gmail.com' }}
          onSubmit={handleSubmit}
        >
          <h1>Faça seu cadastro</h1>

          <Input name="name" placeholder="Nome" icon={FiUser} />
          <Input name="email" type="email" placeholder="E-mail" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <div>
            <FiArrowLeft />
            Voltar para logon
          </div>
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
