import { LightbulbOutlined } from '@mui/icons-material';
import { Typography, Box, styled } from '@mui/material';

const Light = styled(LightbulbOutlined)`
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

const Empty = () => {
    return (
        <Container>
            <Light />
            <Text>Notes you add appear here.</Text>
        </Container>
    )
}

export default Empty;