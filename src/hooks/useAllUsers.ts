/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useCallback, useState } from 'react';
import { User } from '../types/api/user';
import { useMessage } from './useMessage';
import { useRandomImage } from './useRandomImage';

export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const imageUrl = useRandomImage();

  const getUsers = useCallback(async () => {
    try {
      setLoading(true);

      const usersResponse = axios.get<Array<User>>(
        'https://jsonplaceholder.typicode.com/users'
      );

      const usersRes = await usersResponse;

      setUsers(usersRes.data);
    } catch (error) {
      showMessage({ title: 'ユーザー取得に失敗しました', status: 'error' });
    } finally {
      setLoading(false);
    }
  }, []);

  return { getUsers, loading, users, imageUrl };
};
