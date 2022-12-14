import {LightbulbOutlined} from '@mui/icons-material';
import {Typography, Box, styled} from '@mui/material';


// interface IData {
//     icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {muiName: string}
//     text: string
// }
//
// interface IDataWrap {
//     notes: IData
//     archive: IData
//     trash: IData
// }
// const dataArr = {}

// const dataArr: IDataWrap = {
//     notes: {
//         icon: LightbulbOutlined,
//         text: 'Notes you add appear here.'
//     },
//     archive: {
//         icon: ArchiveOutlined,
//         text: 'Archived notes will be stored here.'
//     },
//     trash: {
//         icon: DeleteOutlineOutlined,
//         text: 'Notes you add appear here.'
//     }
// }

const NotesIcon = styled(LightbulbOutlined)`
  font-size: 120px;
  color: #E6E6E6;
  margin-bottom: 20px;
`

const Text = styled(Typography)`
  color: #80868b;
  font-size: 22px;
`

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25vh;
`

const Empty = () => {
    return (
        <Container>
            <NotesIcon/>
            <Text>Notes you add appear here.</Text>
        </Container>
    )
}

export default Empty;