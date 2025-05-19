import { gql } from "@apollo/client";

export const CREATE_TODO = gql`
    mutation CreateTodo($name: String!, $status: String!) {
        createTodo(name: $name, status: $status) {
            id
            name
            status
        }
    }
`;

export const DELETE_TODO = gql`
    mutation DeleteTodo($id: ID) {
        deleteTodo(id: $id)
    }
`;