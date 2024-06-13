import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Message = {
  __typename?: 'Message';
  created_at: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage: Message;
  updateMessage: Message;
};


export type MutationCreateMessageArgs = {
  input: NewMessage;
};


export type MutationUpdateMessageArgs = {
  userId: Scalars['String']['input'];
};

export type NewMessage = {
  text: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getMessages: Array<Message>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type CreateMessageMutationVariables = Exact<{
  input: NewMessage;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', id: string, text: string, created_at: string, updated_at: string, user: { __typename?: 'User', id: string, name: string, email: string } } };

export type UpdateMessageMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type UpdateMessageMutation = { __typename?: 'Mutation', updateMessage: { __typename?: 'Message', id: string, text: string, created_at: string, updated_at: string, user: { __typename?: 'User', id: string, name: string, email: string } } };

export type GetMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMessagesQuery = { __typename?: 'Query', getMessages: Array<{ __typename?: 'Message', id: string, text: string, created_at: string, updated_at: string, user: { __typename?: 'User', id: string, name: string, email: string } }> };


export const CreateMessageDocument = gql`
    mutation CreateMessage($input: NewMessage!) {
  createMessage(input: $input) {
    id
    text
    user {
      id
      name
      email
    }
    created_at
    updated_at
  }
}
    `;
export const UpdateMessageDocument = gql`
    mutation UpdateMessage($userId: String!) {
  updateMessage(userId: $userId) {
    id
    text
    user {
      id
      name
      email
    }
    created_at
    updated_at
  }
}
    `;
export const GetMessagesDocument = gql`
    query GetMessages {
  getMessages {
    id
    text
    user {
      id
      name
      email
    }
    created_at
    updated_at
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateMessage(variables: CreateMessageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateMessageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateMessageMutation>(CreateMessageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateMessage', 'mutation', variables);
    },
    UpdateMessage(variables: UpdateMessageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateMessageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateMessageMutation>(UpdateMessageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateMessage', 'mutation', variables);
    },
    GetMessages(variables?: GetMessagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMessagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMessagesQuery>(GetMessagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMessages', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;