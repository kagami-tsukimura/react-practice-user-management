import { Button } from '@chakra-ui/react';
import { memo, FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
  onKeyDown?: () => void;
}

export const PrimaryButton: FC<Props> = memo((props) => {
  const {
    children,
    disabled = false,
    loading = false,
    onClick,
    onKeyDown,
  } = props;
  return (
    <Button
      bg='teal.400'
      color='white'
      _hover={{ opacity: 0.8 }}
      isDisabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </Button>
  );
});
