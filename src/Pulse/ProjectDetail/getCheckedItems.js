import intersection from "lodash/intersection";

/**
 * @param {object} retrivedFromDynamo 
 * @param {object} listofChecked
 * @param {object} chkedItemsWithLabels
 */
export default function getCheckedItems(data,chkedItems,chkedItemsWithLabels) {

    const chkedItemsInDynamo = intersection(Object.keys(data), Object.keys(chkedItems));

    // console.log(chkedItemsInDynamo)
    let checkBoxLabels = []

    //use forEach as map expects a return statement
    chkedItemsInDynamo.forEach( (chkedItemFromdynamo) => {
            const labelArr = chkedItemsWithLabels.filter((anItemWithLabel) => anItemWithLabel.id === chkedItemFromdynamo )

            // console.log(labelArr)
            //gets the value of first index of Array
            const [chkBoxLabel] = labelArr
            // console.log(chkBoxLabel)
            const {label} = chkBoxLabel
            // console.log(label)
             checkBoxLabels = [...checkBoxLabels, label]
          })

    return checkBoxLabels
}


// /find objects that exists common in retrived and list of booleans
//   const chkedDataArray = intersection(Object.keys(data), Object.keys(chkedState));

//   let checkedTodisplay = []
//   //get label items for the intersected items from array of objects
//   chkBoxItems.map( (item,index) => {
//     const filteredarr = chkBoxItems.filter((chkBoxItem) =>  chkBoxItem.id === item )
//     const [chkBoxItemObj] = filteredarr
//     checkedTodisplay = [...checkedTodisplay, chkBoxItemObj]
//   })

//   console.log(checkedTodisplay)