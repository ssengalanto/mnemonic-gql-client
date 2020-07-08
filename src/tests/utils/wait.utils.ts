import { act } from 'react-dom/test-utils';
import { ShallowWrapper, ReactWrapper } from 'enzyme';

export async function wait(wrapper: ReactWrapper | ShallowWrapper, amount = 0): Promise<void> {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, amount));
    wrapper.update();
  });
}
