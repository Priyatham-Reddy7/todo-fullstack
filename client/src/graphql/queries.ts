import { gql } from "@apollo/client";

export const GET_TODOS = gql`
    query GetTodos {
        getTodos {
            id
            name
            status
        }
    }
`;

export const GET_TODO_ID = gql`
    query GetTodoById($id: ID) {
        getTodoById(id: $id) {
            id
            name
            status
        }
    }
`