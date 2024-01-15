// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import {Typography} from '@mui/material';
// import Dropzone from "react-dropzone";
// import FlexBetween from "components/FlexBetween";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));

// export default function CustomizedDialogs() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open dialog
//       </Button>
//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//           Edit Profile
//         </DialogTitle>
//         <IconButton
//           aria-label="close"
//           onClick={handleClose}
//           sx={{
//             position: 'absolute',
//             right: 8,
//             top: 8,
//             color: "RED",
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//         <DialogContent dividers>
//           <Box
//             component="form"
//             sx={{
//               '& > :not(style)': { m: 1, width: '25ch' },
//             }}
//             noValidate
//             autoComplete="off"
//           >
//             <TextField
//             id="outlined-basic" 
//             label="First Name" 
//             variant="outlined" 
//             // value={}
//             name="First Name"
//             />

//             <TextField
//             id="outlined-basic" 
//             label="Last Name" 
//             variant="outlined" 
//             // value={}
//             name="Last Name"
//             />

//             <TextField
//             id="outlined-basic" 
//             label="From" 
//             variant="outlined" 
//             // value={}
//             name="From"
//             />

//             <TextField
//             id="outlined-basic" 
//             label="Occupation" 
//             variant="outlined" 
//             // value={}
//             name="Occupation"
//             />

//                   <Box
//                     gridColumn="span 4"
//                     border={`1px solid `}
//                     borderRadius="5px"
//                     p="1rem"
//                   >
//                     <Dropzone
//                       acceptedFiles=".jpg,.jpeg,.png"
//                       multiple={false}
//                       onDrop={(acceptedFiles) =>
//                         setFieldValue("picture", acceptedFiles[0])
//                       }
//                     >
//                       {({ getRootProps, getInputProps }) => (
//                         <Box
//                           {...getRootProps()}
//                           border={`2px dashed`}
//                           p="1rem"
//                           sx={{ "&:hover": { cursor: "pointer" } }}
//                         >
//                           <input {...getInputProps()} />
//                           {!values.picture ? (
//                             <p>Add Picture Here</p>
//                           ) : (
//                             <FlexBetween>
//                               <Typography>{values.picture.name}</Typography>
//                               <EditOutlinedIcon />
//                             </FlexBetween>
//                           )}
//                         </Box>
//                       )}
//                     </Dropzone>
//                   </Box>

//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={handleClose}>
//             Save changes
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>
//     </React.Fragment>
//   );
// }