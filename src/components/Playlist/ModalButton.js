import { Button } from '@chakra-ui/react';

const ModalButton = ({ handleCreatePlaylist }) => {
  return (
    <a href="https://grooves-app.herokuapp.com/Closing/">
      <Button
        onClick={handleCreatePlaylist}
        size="lg"
        mt="20px"
        colorScheme="green"
      >
        Create
      </Button>
    </a>
  );
};

export default ModalButton;
