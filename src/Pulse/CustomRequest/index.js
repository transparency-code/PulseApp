import React from "react";
import CheckBoxBootstrap from "Pulse/components/CheckBoxBootstrap";
import HorizontalFormGroup from "Pulse/components/HorizontalFormGroup";
import Box from "@material-ui/core/Box";
import {
  textBoxItems,
  chkedItems,
  chkedItemsWithLabels,
  txtinputState,
} from "./CustomRequest.data";
import ReactDropZone from 'Pulse/components/ReactDropZone'
import DisplayFilesWithDeleteOption from "Pulse/components/DisplayFilesWithDeleteOption";
import useNotification from 'Pulse/hooks/useNotification'
import DoneButton from 'Pulse/components/DoneButton'


export default function CustomRequestForm(submitFunc) {
  // console.log(submitRequest)

  //unpackcontextusage
  const {addNotification} = useNotification()


  const [requestState, setState] = React.useState({
    ...chkedItems,
    ...txtinputState,
    fileUploads: []
  });

  const handleChange = (name) => (newValue) => {
    // console.log(name)
    // console.log(newValue);
    setState({ ...requestState, [name]: newValue });
  };

    //file change should add to the array. deletion is done in sm pther place
    function handleFilesChange(fileArray) {

        const current = requestState.fileUploads
    
        //https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/
        const newFileArray = current.concat(fileArray)
         // eslint-disable-next-line
        setState({ ...requestState, ['fileUploads']: newFileArray });
      }

      //fileDelete shuld delete the file at index , non mutating
  function handleFileDelete(index) {

    //console.log(index)
    const toSplice = requestState.fileUploads

   // https://jaketrent.com/post/remove-array-element-without-mutating/
    toSplice.splice(index,1)

    //console.log(toSplice)
    // eslint-disable-next-line
    setState({ ...requestState, ['fileUploads']: toSplice });
  }

  //console.log(requestState);
  return (
    <form>
      {chkedItemsWithLabels.map((chkBoxItem) =>
        CheckBoxBootstrap(
          chkBoxItem.id,
          chkBoxItem.label,
          handleChange(chkBoxItem.id)
        )
      )}

      <Box mt={4}>
        {textBoxItems.map((textBoxItem) =>
          HorizontalFormGroup(
            textBoxItem.id,
            textBoxItem.label,
            textBoxItem.type,
            handleChange(textBoxItem.id)
          )
        )}
      </Box>

      <Box mt={5}>
      <ReactDropZone
            dropZoneText={"Click to select files..."}
            handleFilesChange={handleFilesChange}       
            />
       </Box>

      
{DisplayFilesWithDeleteOption(requestState.fileUploads, handleFileDelete)}

<DoneButton label={"Create"} execFunc={() => submitFunc({ requestState, addNotification }, "sht@der.com")} />
{/* <button type="button" className="my-4 btn btn-secondary"  onClick={() => submitFunc({ requestState, addNotification }, "sht@der.com")}>Create</button> */}

    </form>
  );
}
