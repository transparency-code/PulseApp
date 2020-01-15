//https://material-ui.com/components/tabs/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import GroupWorkOutlinedIcon from '@material-ui/icons/GroupWorkOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';

//https://css-tricks.com/almanac/properties/f/flex-grow/
//if all items have flex-grow set to 1, every child will set to an equal size inside the container
//https://gedd.ski/post/the-difference-between-width-and-flex-basis/
//https://material-ui.com/system/sizing/
//// Numbers are converted to pixel values.

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 1000
  }
});

export default function IconTabs({companyUser=true}) {

    // console.log(companyUser)
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  //event _proto_ is a class
  //newVlaue is 0,1,2,3
  const handleChange = (event, newValue) => {
    //   console.log(event)
    setValue(newValue);
  };


  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
      >
        <Tab icon={<ContactSupportOutlinedIcon />} aria-label="request" />
        <Tab icon={<ReceiptOutlinedIcon />} aria-label="response" />
        <Tab icon={<QuestionAnswerOutlinedIcon />} aria-label="chat" />
        {companyUser && <Tab icon={<GroupWorkOutlinedIcon />} aria-label="team" />}
        <Tab icon={<AttachFileOutlinedIcon />} aria-label="files" />
      </Tabs>
    </Paper>
  );
}
