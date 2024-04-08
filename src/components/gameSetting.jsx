import Button from '@mui/material/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const GameDialogs = ({ settingBoard, setValues }) => {
  const [openFirstDialog, setOpenFirstDialog] = useState(false);
  const [openSecondDialog, setOpenSecondDialog] = useState(false);
  const [openThirdDialog, setOpenThirdDialog] = useState(false);

  const [snakes, setSnakes] = useState([{ start: 0, end: 0 }]);
  const [ladder, setLaddar] = useState([{ start: 0, end: 0 }]);

  const [size, setSize] = useState(10);

  function handleCloseFirstDialog() {
    settingBoard(size);
    setOpenFirstDialog(false);
    setOpenSecondDialog(true);
  }

  function handleCloseSecondDialog() {
    setOpenSecondDialog(false);
    setOpenThirdDialog(true);
  }

  function handleCloseThirdDialog() {
    let updateSnakes = snakes.map((item) => ({
      start: parseInt(item.start),
      end: parseInt(item.end),
    }));
    let updateLaddar = ladder.map((item) => ({
      start: parseInt(item.start),
      end: parseInt(item.end),
    }));
    setValues(updateSnakes, updateLaddar);
    setOpenThirdDialog(false);
  }

  function handleSnakeValues(index, key, value) {
    const updateItems = [...snakes];
    updateItems[index] = { ...updateItems[index], [key]: value };
    setSnakes(updateItems);
  }

  function handleLadderValues(index, key, value) {
    const updateItems = [...ladder];
    updateItems[index] = { ...updateItems[index], [key]: value };
    setLaddar(updateItems);
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
      <Dialog
        open={openSecondDialog}
        onClose={() => setOpenSecondDialog(false)}
      >
        <DialogContent>
          <div>
            <div className="dialog-header">
              <h1>Add position between (1 - {size * size})</h1>
              <small>
                Note - For Snake Start value larger and end Value smaller
              </small>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {snakes.map(({ start, end }, index) => {
                return (
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div className="input-field">
                      <label>Start</label>
                      <TextField
                        label="Start"
                        type="number"
                        value={start}
                        onChange={(e) =>
                          handleSnakeValues(index, "start", e.target.value)
                        }
                      />
                    </div>
                    <div className="input-field">
                      <label>End</label>
                      <TextField
                        label="End"
                        type="number"
                        value={end}
                        onChange={(e) =>
                          handleSnakeValues(index, "end", e.target.value)
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSnakes([...snakes, { start: 0, end: 0 }])} variant='outlined'>
            Add More
          </Button>
          <Button onClick={handleCloseSecondDialog} variant='contained'>Next</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openThirdDialog} onClose={() => setOpenThirdDialog(false)}>
        <DialogContent>
          <div>
            <div className="dialog-header">
              <h1>Add position between (1 - {size * size})</h1>
              <small>For Start value smaller and end Larger</small>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {ladder.map(({ start, end }, index) => {
                return (
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div className="input-field">
                      <label>Start</label>
                      <TextField
                        label="start"
                        type="number"
                        value={start}
                        max={size * size}
                        onChange={(e) =>
                          handleLadderValues(index, "start", e.target.value)
                        }
                      />
                    </div>
                    <div className="input-field">
                      <label>End</label>
                      <TextField
                        label="end"
                        type="number"
                        value={end}
                        max={size * size}
                        onChange={(e) =>
                          handleLadderValues(index, "end", e.target.value)
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLaddar([...ladder, { start: 0, end: 0 }])} variant='outlined'>
            Add More
          </Button>
          <Button onClick={handleCloseThirdDialog} variant='contained'>Done</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
