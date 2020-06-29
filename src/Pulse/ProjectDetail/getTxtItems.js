/**
 * @param {object} data
 * @param {Array} textBoxItems
 */
export default function getTxtItems(data, textBoxItems) {
//   console.log(data);
//   console.log(textBoxItems);

  // console.log(chkedItemsInDynamo)
  let txtItems = [];

  //use forEach as map expects a return statement
  textBoxItems.forEach((txtItem) => {
    //         //const labelArr = chkedItemsWithLabels.filter((anItemWithLabel) => anItemWithLabel.id === chkedItemFromdynamo )

    //txtItem is an object with id , lable and type
    const { id, label } = txtItem;
 

    //this returns an array with value
   // console.log([data[id]][0])

    txtItems = id in data ? [...txtItems, { label, value : [data[id]][0] }] : txtItems;
  });

  return txtItems;
}
