import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation RegisterUser($username: String!, $email: String!, $password: String!) {
    registerUser(username: $username, email: $email, password: $password) {
      id
      username
      email
      attempt
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password)
  }
`;
