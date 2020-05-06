//https://yuvaleros.github.io/material-ui-dropzone/
import React from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
 
export default function DropzoneDialogWithText ({buttonText,buttonClass,buttonVariant,handleFilesChange,files,setFiles}) {

    //files, setfiles . state and statemutater from HOC

    const [state, setState] = React.useState({
        open: false,
        files
    })
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         open: false,
    //         files: []
    //     };
    // }
 
    function handleClose() {
        setState({
            open: false
        });
    }
 
    function handleSave(files) {

        //console.log(files)

        //change files in HOC using state mutater
        handleFilesChange(files)
        //Saving files to state for further use and closing Modal.

        //set open state of Dialog to False
        setState({
            files: files,
            open: false
        });
    }
 
    function handleOpen() {
        setState({
            open: true,
        });
    }
 

        return (
            <div>

                <Button onClick={handleOpen}
                 className={buttonClass}
                 variant={buttonVariant}>
                  {buttonText}
                </Button>

                <DropzoneDialog
                    open={state.open}
                    onSave={(files) => handleSave(files)}
                    //https://react-dropzone.js.org/#section-accepting-specific-file-types
                    //https://stackoverflow.com/questions/312230/proper-mime-media-type-for-pdf-files
                    acceptedFiles={['application/pdf']}
                    showPreviews={true}
                    maxFileSize={10485760}
                    onClose={handleClose}
                    dropzoneText={"Drag and drop pdf files here or click"}
                    clearOnUnmount={false}
                />
            </div>
        );

}