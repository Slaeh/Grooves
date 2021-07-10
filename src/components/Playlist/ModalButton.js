import { Button } from '@chakra-ui/react';

const ModalButton = ({ handleCreatePlaylist }) => {
  return (
    <Button
      onClick={handleCreatePlaylist}
      size="lg"
      mt="20px"
      colorScheme="green"
    >
      Create
    </Button>
  );
};

export default ModalButton;
