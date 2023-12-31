import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { memo, FC } from 'react';

interface Props {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
  onClickTop: () => void;
}

export const MenuDrawer: FC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickUserManagement,
    onClickSetting,
    onClickTop,
  } = props;
  return (
    <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg='gray.100'>
            <Button w='100%' onClick={onClickHome}>
              TOP
            </Button>
            <Button w='100%' onClick={onClickUserManagement}>
              ユーザー一覧
            </Button>
            <Button w='100%' onClick={onClickSetting}>
              設定
            </Button>
            <Button w='100%' onClick={onClickTop}>
              ログアウト
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
