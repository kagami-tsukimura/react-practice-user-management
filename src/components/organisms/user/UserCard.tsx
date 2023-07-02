import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { memo, FC, useEffect, useState } from 'react';

interface Props {
  id: number;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
}

export const UserCard: FC<Props> = memo((props) => {
  const { id, userName, fullName, onClick } = props;
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await fetch('https://source.unsplash.com/random');
        setImageUrl(response.url);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching random image:', error);
      }
    };

    const timer = setTimeout(() => {
      fetchRandomImage();
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      w='260px'
      h='260px'
      bg='white'
      borderRadius='10px'
      shadow='md'
      p={4}
      _hover={{ cursor: 'pointer', opacity: '0.8' }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign='center'>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            {imageUrl && (
              <Image
                borderRadius='full'
                boxSize='160px'
                src={imageUrl}
                alt={userName}
                m='auto'
              />
            )}
            <Text fontSize='lg' fontWeight='bold'>
              {userName}
            </Text>
            <Text fontSize='sm' color='gray'>
              {fullName}
            </Text>
          </>
        )}
      </Stack>
    </Box>
  );
});
