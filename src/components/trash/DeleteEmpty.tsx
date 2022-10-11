import {Typography, Box, styled} from '@mui/material';
import {DeleteOutlineOutlined} from '@mui/icons-material';


const DeleteIcon = styled(DeleteOutlineOutlined)`
  font-size: 120px;
  color: #E6E6E6;
  margin-bottom: 20px;
`

const Text = styled(Typography)`
  color: #80868b;
  font-size: 22px
`

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25vh
`

const DeleteEmpty = () => {
    return (
        <Container>
            <DeleteIcon/>
            <Text>Cart is empty.</Text>
        </Container>
    )
}

export default DeleteEmpty;