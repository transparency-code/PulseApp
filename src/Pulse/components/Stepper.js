//https://material-ui.com/components/steppers/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    // button: {
    //   marginTop: theme.spacing(1),
    //   marginRight: theme.spacing(1),
    // },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));


 // HorizontalLinearStepper is re rendered when step changes
 // Do cant set storedStep to activeStep, as stored state will replace acive state every time

export default function HorizontalLinearStepper({steps,storedStep,saveStageFunc,updateKey}) {


  //console.log(updateKey)
  const classes = useStyles();


  const [activeStep, setActiveStep] = React.useState(storedStep);

 //console.log(activeStep)

  function handleNext() {
    setActiveStep((prevActiveStep) => {
    
     return prevActiveStep + 1
    });
  
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


 
//active step needs to be number
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">

        {steps.map((label) => {
          return (
            <Step key={label} >
              <StepLabel>{label}</StepLabel>
              <StepContent>
              <div className={classes.actionsContainer}>
              <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={activeStep === steps.length - 1}
                  >               
                   Next
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => saveStageFunc(updateKey,activeStep)}
                    className={classes.button}
                  >               
                   Set Here
                  </Button>
              </div>
              </div>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>

{/* 
      <button type="button" className="btn btn-primary" onClick={() => saveStageFunc(updateKey , activeStep)}>Save Stage</button> */}
    

          </div>

  );
}
