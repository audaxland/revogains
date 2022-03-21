import {Alert, Paper} from "@mui/material";
import ExchangeGrid from "../grids/ExchangeGrid";

const ExchangePage = ({files}) => {
    const { exchanges} = files;
    return (
        <Paper sx={{padding: '1em', marginBottom: '1em', flex: 1, display: 'flex', flexDirection: 'column'}}>
            {(!exchanges.length) && <Alert severity='info'>No files yet!</Alert>}
            {(!!exchanges.length) && <ExchangeGrid exchanges={exchanges} />}
        </Paper>
    );
};

export default ExchangePage;