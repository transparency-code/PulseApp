//https://material-ui.com/components/steppers/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';



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

export default function HorizontalLinearStepper({steps,storedStep,saveStageFunc}) {


  //console.log(updateKey)
  const classes = useStyles();

 //active step is zero based. 
 //db stores from 1
  const [activeStep, setActiveStep] = React.useState(storedStep - 1);

  const [loading, setLoading] = React.useState(false);
  
//   console.log(storedStep)
// console.log(activeStep)

  function handleNext() {
    setActiveStep((prevActiveStep) => {
    
     return prevActiveStep + 1
    });
  
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSet = async (step) => {
   setLoading(true)
   await saveStageFunc(step)
   setLoading(false)

  }


 //console.log(loading)
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

               {/* spacing is needed for mobile screens between stacking */}
              <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>

              <Grid item xs={12} md={3}>
                  <Button
                  variant="contained"
                    disabled={activeStep === 0 || loading}
                    onClick={handleBack}
                     color="primary"
                  //  className={classes.button}
                  >
                    Back
                  </Button>
                  </Grid>

                  <Grid item xs={12} md={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
               //     className={classes.button}
                    disabled={activeStep === steps.length - 1 || loading}
                  >               
                   Next
                  </Button>
                  </Grid>

                  <Grid item xs={12} md={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    //dbstores from 1, send activestep + 1
                    onClick={() => handleSet(activeStep+1)}
                //    className={classes.button}
                    disabled={activeStep === storedStep - 1 || loading}
                  >               
                Set
                  </Button>
                  </Grid>

                  { loading && <Grid item xs={12} md={3}><CircularProgress color="secondary" /></Grid> }

              </Grid>
               
                
             

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
