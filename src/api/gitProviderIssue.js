import {axios} from '../utils';
import {mapAxiosError} from '../utils/mappedError';

export const getProviderIssue = async () => {
  try {
    const provider = await axios.get('client/my-issues?page=1&limit=20');
    // const provider = await axios.post('auth/signin', {
    //   userName: '+2015513324955',
    //   password: '1234567d',
    //   loginAs: 'USER',
    // });
  } catch (error) {
    throw mapAxiosError(error);
  }
};
