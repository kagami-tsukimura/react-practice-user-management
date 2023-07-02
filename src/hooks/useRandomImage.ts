/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useMessage } from './useMessage';

export const useRandomImage = () => {
  const { showMessage } = useMessage();
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await fetch('https://source.unsplash.com/random');
        const imageUrl = response.url;
        setImageUrl(imageUrl);
      } catch (error) {
        showMessage({ title: '画像取得に失敗しました', status: 'error' });
      }
    };

    fetchRandomImage();
  }, []);

  return imageUrl;
};
