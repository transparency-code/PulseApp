//https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-keyschema.html

A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.
The partition key of an item is also known as its hash attribute.
The sort key of an item is also known as its range attribute
The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.


hashattribute
Primary partition key	client (String)


rangeattribute
Primary sort key	projectid (String)

index
requeststatus String


https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html

Local secondary index — An index that has the same partition key as the base table, 
but a different sort key. A local secondary index is "local" in the sense that every partition of a local secondary index is scoped to a base table partition that has the same partition key value.

To speed up queries on non-key attributes, you can create a global secondary index. A global secondary index contains a selection of attributes from the base table,
but they are organized by a primary key that is different from that of the table
The base table's primary key attributes are always projected into an index, so the UserId attribute is also present.
Every global secondary index must have a partition key, and can have an optional sort key.

global secondary index queries cannot fetch attributes from the base table.

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-sort-keys.html
In an Amazon DynamoDB table, the primary key that uniquely identifies each item in the table can be composed not only of a partition key, but also of a sort key.

//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html
Query returns all items with that partition key value
So, partition key should be state
sort key is id

//https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html
The condition that specifies the key values for items to be retrieved by the Query action.
The condition must perform an equality test on a single partition key value.

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html
Dont use reserved keywords


USe environamnet variables, dont use app speciific key words. for portability