import React from 'react';

import { useRemindersQuery } from '__gql-gen__';

export const Apollo: React.FC = () => {
  const { loading, data, error } = useRemindersQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <>
      {data?.reminders.map(({ id, name, user: { first_name } }) => (
        <ul key={id}>
          <li>{`${name} - ${first_name}`}</li>
        </ul>
      ))}
    </>
  );
};
