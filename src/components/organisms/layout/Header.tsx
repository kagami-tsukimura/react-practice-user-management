/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import { memo, FC, useCallback } from 'react';
import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';
import { useHistory } from 'react-router-dom';
import { useMessage } from '../../../hooks/useMessage';

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { showMessage } = useMessage();
  const history = useHistory();

  const onClickHome = useCallback(
    () => history.push('/react-practice-user-management/home'),
    []
  );
  const onClickUserManagement = useCallback(
    () => history.push('/react-practice-user-management/home/user-management'),
    []
  );
  const onClickSetting = useCallback(
    () => history.push('/react-practice-user-management/home/setting'),
    []
  );
  const onClickTop = useCallback(() => {
    showMessage({ title: 'ログアウトしました', status: 'success' });
    history.push('/react-practice-user-management');
  }, []);

  return (
    <>
      <Flex
        as='nav'
        bg='teal.500'
        color='gray.50'
        align='center'
        justify='space-between'
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align='center'
          as='a'
          mr={8}
          _hover={{ cursor: 'pointer' }}
          onClick={onClickHome}
        >
          <Heading as='h1' fontSize={{ base: 'md', md: 'lg' }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align='center'
          fontSize='sm'
          flexGrow={2}
          display={{ base: 'none', md: 'flex' }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
          <Spacer />
          <Link onClick={onClickTop}>ログアウト</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
        onClickTop={onClickTop}
      />
    </>
  );
});
