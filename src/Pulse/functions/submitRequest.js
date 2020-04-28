import createProjectId from './createProjectId'
import dynamoAddProject from 'AWS/dynamoAddProject'
import {removeKeysWithNull} from './misc'

export default function submitRequest(requestState,email) {

    const tableInDynamo = process.env.REACT_APP_DYNAMO_TESTTABLE 

    const id = createProjectId()

    

    //requestState.requestState/ state is inside a key
    // console.log(requestState)

    const requestWithoutNulls = removeKeysWithNull(requestState.requestState)

    //console.log(requestWithoutNulls)

    dynamoAddProject(tableInDynamo,id , email,requestWithoutNulls)
}
