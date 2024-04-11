import Button from '@mui/material/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const GameDialogs = ({ settingBoard }) => {
  const [openFirstDialog, setOpenFirstDialog] = useState(false);
  
  const [size, setSize] = useState(10);

  function handleCloseFirstDialog() {
    settingBoard(size);
    setOpenFirstDialog(false);
  }


  return (
    <>
      <button onClick={() => setOpenFirstDialog(true)} className='outlined-btn'>Game Setting</button>
      <Dialog open={openFirstDialog} onClose={() => setOpenFirstDialog(false)}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <label>Want to Change Board Size ? </label>
              <br />
            </div>

            <TextField
              label="board-size"
              variant="outlined"
              onChange={(e) => setSize(e.target.value)}
              value={size}
            />
            <small>Note - For Size take even value</small>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFirstDialog} variant='contained'>Create New Board</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
