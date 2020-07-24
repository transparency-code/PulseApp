import states from 'Pulse/Data/ProcessStates'
import updateIteminDynamo from 'AWS/updateIteminDynamo'

export default async function saveStageinDynamo(projectKey,step) {
 console.log(projectKey)
 console.log(states[step])

 await updateIteminDynamo(projectKey.email,projectKey.projectid,step)
}
