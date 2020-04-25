import createProjectId from './createProjectId'
import dynamoAddProject from 'AWS/dynamoAddProject'

export default function submitRequest(requestState,email) {


    const id = createProjectId()


    dynamoAddProject(id,email,requestState)
}
