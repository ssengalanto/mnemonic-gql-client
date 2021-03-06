import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  deleted_at?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  active: Scalars['Boolean'];
  reminders: Array<Reminder>;
};

export type Reminder = {
  __typename?: 'Reminder';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  deleted_at?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  completed: Scalars['Boolean'];
  date: Scalars['DateTime'];
  userId: Scalars['Int'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  reminders: Array<Reminder>;
  reminder?: Maybe<Reminder>;
  hello: Scalars['String'];
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryReminderArgs = {
  id: Scalars['String'];
};

export type QueryUserArgs = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteReminder?: Maybe<Reminder>;
  createReminder: Reminder;
  signup: Scalars['String'];
  signin: Scalars['String'];
};

export type MutationDeleteReminderArgs = {
  id: Scalars['String'];
};

export type MutationCreateReminderArgs = {
  payload: CreateReminderInput;
};

export type MutationSignupArgs = {
  payload: CreateUserInput;
};

export type MutationSigninArgs = {
  payload: SigninUserInput;
};

export type CreateReminderInput = {
  name: Scalars['String'];
  completed?: Maybe<Scalars['Boolean']>;
  date: Scalars['DateTime'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  active?: Maybe<Scalars['Boolean']>;
};

export type SigninUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ReminderFieldsFragment = { __typename?: 'Reminder' } & Pick<
  Reminder,
  'id' | 'name' | 'completed' | 'date'
>;

export type UserFieldsFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'first_name' | 'last_name'
>;

export type SigninMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type SigninMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'signin'>;

export type SignupMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
}>;

export type SignupMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'signup'>;

export type ReminderQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type ReminderQuery = { __typename?: 'Query' } & {
  reminder?: Maybe<
    { __typename?: 'Reminder' } & Pick<Reminder, 'id' | 'name' | 'completed'> & {
        user: { __typename?: 'User' } & Pick<User, 'id' | 'first_name' | 'last_name' | 'active'>;
      }
  >;
};

export type RemindersQueryVariables = Exact<{ [key: string]: never }>;

export type RemindersQuery = { __typename?: 'Query' } & {
  reminders: Array<
    { __typename?: 'Reminder' } & Pick<Reminder, 'id' | 'name' | 'completed' | 'date'> & {
        user: { __typename?: 'User' } & Pick<User, 'id' | 'first_name' | 'last_name'>;
      }
  >;
};

export const ReminderFieldsFragmentDoc = gql`
  fragment ReminderFields on Reminder {
    id
    name
    completed
    date
  }
`;
export const UserFieldsFragmentDoc = gql`
  fragment UserFields on User {
    id
    first_name
    last_name
  }
`;
export const SigninDocument = gql`
  mutation Signin($email: String!, $password: String!) {
    signin(payload: { email: $email, password: $password })
  }
`;
export type SigninMutationFn = ApolloReactCommon.MutationFunction<
  SigninMutation,
  SigninMutationVariables
>;

/**
 * __useSigninMutation__
 *
 * To run a mutation, you first call `useSigninMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinMutation, { data, loading, error }] = useSigninMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSigninMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<SigninMutation, SigninMutationVariables>,
) {
  return ApolloReactHooks.useMutation<SigninMutation, SigninMutationVariables>(
    SigninDocument,
    baseOptions,
  );
}
export type SigninMutationHookResult = ReturnType<typeof useSigninMutation>;
export type SigninMutationResult = ApolloReactCommon.MutationResult<SigninMutation>;
export type SigninMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SigninMutation,
  SigninMutationVariables
>;
export const SignupDocument = gql`
  mutation Signup($email: String!, $password: String!, $first_name: String!, $last_name: String!) {
    signup(
      payload: {
        email: $email
        password: $password
        first_name: $first_name
        last_name: $last_name
      }
    )
  }
`;
export type SignupMutationFn = ApolloReactCommon.MutationFunction<
  SignupMutation,
  SignupMutationVariables
>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *   },
 * });
 */
export function useSignupMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>,
) {
  return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    baseOptions,
  );
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
>;
export const ReminderDocument = gql`
  query Reminder($id: String!) {
    reminder(id: $id) {
      id
      name
      completed
      user {
        id
        first_name
        last_name
        active
      }
    }
  }
`;

/**
 * __useReminderQuery__
 *
 * To run a query within a React component, call `useReminderQuery` and pass it any options that fit your needs.
 * When your component renders, `useReminderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReminderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReminderQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ReminderQuery, ReminderQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ReminderQuery, ReminderQueryVariables>(
    ReminderDocument,
    baseOptions,
  );
}
export function useReminderLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ReminderQuery, ReminderQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ReminderQuery, ReminderQueryVariables>(
    ReminderDocument,
    baseOptions,
  );
}
export type ReminderQueryHookResult = ReturnType<typeof useReminderQuery>;
export type ReminderLazyQueryHookResult = ReturnType<typeof useReminderLazyQuery>;
export type ReminderQueryResult = ApolloReactCommon.QueryResult<
  ReminderQuery,
  ReminderQueryVariables
>;
export const RemindersDocument = gql`
  query Reminders {
    reminders {
      id
      name
      completed
      date
      user {
        id
        first_name
        last_name
      }
    }
  }
`;

/**
 * __useRemindersQuery__
 *
 * To run a query within a React component, call `useRemindersQuery` and pass it any options that fit your needs.
 * When your component renders, `useRemindersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRemindersQuery({
 *   variables: {
 *   },
 * });
 */
export function useRemindersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<RemindersQuery, RemindersQueryVariables>,
) {
  return ApolloReactHooks.useQuery<RemindersQuery, RemindersQueryVariables>(
    RemindersDocument,
    baseOptions,
  );
}
export function useRemindersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RemindersQuery, RemindersQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<RemindersQuery, RemindersQueryVariables>(
    RemindersDocument,
    baseOptions,
  );
}
export type RemindersQueryHookResult = ReturnType<typeof useRemindersQuery>;
export type RemindersLazyQueryHookResult = ReturnType<typeof useRemindersLazyQuery>;
export type RemindersQueryResult = ApolloReactCommon.QueryResult<
  RemindersQuery,
  RemindersQueryVariables
>;
