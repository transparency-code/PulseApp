import createProjectId from './createProjectId'
import dynamoAddProject from 'AWS/dynamoAddProject'

export default function submitRequest(requestState,email) {


    const uuid = createProjectId()


    dynamoAddProject(uuid,email,requestState)
}
