import getItemFromDynamo from "AWS/getItemFromDynamo"

export default getProjectDetails(email,projectid,setData) {

   const tablePrimaryKey = [process.env.REACT_APP_DYNAMO_TESTTABLE_PRIMARYKEY ]
   const tableSortId = [process.env.REACT_APP_DYNAMO_TESTTABLE_SORTID]

        [process.env.REACT_APP_DYNAMO_TESTTABLE_SORTID ]: projectid
}