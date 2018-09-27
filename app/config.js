exports.filterValidation = function(req){
	let returnObj = {
		sort: null,
		search: null,
		skip:0,
		limit:0,
		order: 1
	};

	if(req.sort != undefined){
		returnObj.sort = req.sort;
	}

	if(req.order != undefined){
		returnObj.order = req.order;
	}

	if(req.search != undefined){
		returnObj.search = req.search;
	}

	if(req.skip != undefined && req.limit != undefined){
		returnObj.skip = req.skip;
		returnObj.limit = req.limit;
	}

	return returnObj;
}