import updateIteminDynamo from 'AWS/updateIteminDynamo'

export default async function saveStageinDynamo(key, stagetoSave) {


    // console.log(stagetoSave)

    const {email, projectid} = key

    // console.log(email)
    // console.log(projectid)
    //console.log(activeStep)
//  console.log(projectKey)
//  console.log(states[step])

    const response = await updateIteminDynamo(email,projectid,stagetoSave)

    return response
}
