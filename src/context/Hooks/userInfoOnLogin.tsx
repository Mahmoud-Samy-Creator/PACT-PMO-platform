import { useQuery } from 'react-query';

const useUserInfo = () => {
  return useQuery(['userInfo'], {
    enabled: false,
    staleTime: 1000 * 60 * 10, // data considered fresh for 10 minutes
    cacheTime: 1000 * 60 * 60, // cache stays for 1 hour
    initialData: {
      id: 0,
      username: '',
      email: '',
      first_name: '',
      last_name: '',
      role: '',
      phone: '',
      avatar: '',
    },
  });
};

export default useUserInfo;
