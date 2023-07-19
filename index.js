
myJson1 = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]

// console.log(findNestedObj(myJson, 'fundRestrictionReasonType', 'ClientRequest'));

// function findNestedObj(entireObj, keyToFind, valToFind) {
//   let foundObj;
//   JSON.stringify(entireObj, (_, nestedValue) => {
//     if (nestedValue && nestedValue[keyToFind] === valToFind) {
//       foundObj = nestedValue;
//     }
//     return nestedValue;
//   });
//   return foundObj;
// };

  findObject = (obj = {}, key, value ) => {
    const result = [];
     recursiveSearch = (obj = {}) => {
       if (!obj || typeof obj !== 'object') { return;
    };
    if (value ? obj[key] === value: obj[key] ){
       result.push(obj);
    };
    Object.keys(obj).forEach(function (k) {
       recursiveSearch(obj[k]);
    });
 } 
 recursiveSearch(obj);
 return result;
 } 
 console.log(findObject(myJson1, 'id'));
 console.log(findObject(myJson1, 'id', "5002"));
 console.log(findObject(myJson1, 'topping'));