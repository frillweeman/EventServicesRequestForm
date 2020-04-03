import { FormControl as MuiFormControl } from "@material-ui/core";
import { styled } from "@material-ui/styles";

const FormControl = styled(MuiFormControl)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: "block",
  width: "100%"
}));

export default FormControl;
