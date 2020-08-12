import updateIteminDynamo from 'AWS/updateIteminDynamo'

export default async function saveStageinDynamo(key, stagetoSave) {

    const {email, projectid} = key

    const response = await updateIteminDynamo(email,projectid,stagetoSave)

    return response
}
