import { Typography, Box, styled } from '@mui/material';
import {ArchiveOutlined} from '@mui/icons-material';

const ArchiveIcon = styled(ArchiveOutlined)`
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

const ArchiveEmpty = () => {
    return (
        <Container>
            <ArchiveIcon />
            <Text>Archived notes will be stored here.</Text>
        </Container>
    )
}

export default ArchiveEmpty;
