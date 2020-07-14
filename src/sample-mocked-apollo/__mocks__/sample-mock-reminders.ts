import faker from 'faker';

import { RemindersQuery } from '__gql-gen__';

type SampleReminders = RemindersQuery['reminders'][number];

const sampleCreateMockReminder = (): SampleReminders => ({
  id: faker.random.uuid(),
  name: faker.random.word(),
  completed: faker.random.boolean(),
  date: faker.date.recent(),
  user: {
    id: faker.random.uuid(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
  },
});

export const SampleRemindersMockData = Array.from({ length: 3 }, () => sampleCreateMockReminder());
