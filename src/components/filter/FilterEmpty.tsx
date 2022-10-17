import {Box, styled, Typography} from "@mui/material";

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
`

const Text = styled(Typography)`
  color: #202124;
  white-space: nowrap;
  font-size: 14px;
  text-align: center;
  align-items: center;
  width: 70%;
`

const FilterEmpty = () => {
    return (
        <Container>
            <Text>No results found.</Text>
        </Container>
    )
}

export default FilterEmpty;