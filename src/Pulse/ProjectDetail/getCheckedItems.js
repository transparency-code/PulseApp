import {forEach,has} from 'lodash'

/**
 * @param {object} data
 * @param {Array} chkedItemsWithLabels
 */
export default function getCheckedItems(data, chkedItemsWithLabels) {
//   console.log(data);
//   console.log(chkedItemsWithLabels);

  // console.log(chkedItemsInDynamo)
  let checkBoxLabels = [];

  //use forEach as map expects a return statement
  forEach(chkedItemsWithLabels,(chkedItem) => {
    //         //const labelArr = chkedItemsWithLabels.filter((anItemWithLabel) => anItemWithLabel.id === chkedItemFromdynamo )

    //chkedItem is an object with id and label
    const { id, label } = chkedItem;

    checkBoxLabels = has(data,id) ? [...checkBoxLabels, label] : checkBoxLabels;
  });

  return checkBoxLabels;
}
