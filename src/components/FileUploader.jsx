import React from "react";
import {
  FormLabel,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

function FileUploader({ multiple, onChange, files, fieldName }) {
  return (
    <>
      <FormLabel>Layout File Upload</FormLabel>
      <input
        type="file"
        multiple={multiple}
        onChange={e => {
          onChange(fieldName, Array.from(e.target.files));
        }}
      />
      <List dense="dense">
        {files.map(file => (
          <ListItem key={file.name} style={{ paddingLeft: 0 }}>
            <ListItemText>{file.name}</ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon
                  onClick={onChange.bind(
                    this,
                    fieldName,
                    files.filter(el => el.name !== file.name)
                  )}
                />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default FileUploader;
