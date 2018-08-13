// app/controllers/controllers.js
var config = require('../config');
var request = require('request');

// controllers
exports.doc_message = function(req, res) {
	res.json({message: config.doc_message});
};

exports.patron_lookup = function(req, res) {
		// collect parameters and stop if request is malformed
		if (!config.api_keys.hasOwnProperty(req.query.inst))
			return res.status(400).json({message: 'Unknown institution'})
			//res.status(400).json({message: 'No institution in request. \
			//	Include it in your query string: ?inst=xxxxxx'})
		if (!req.query.uid)
			return res.status(400).json({message: 'No uid in request. \
				Include it in your query string: ?uid=xxxxxx'})
		else
			api_call = [
				config.api_endpiont,
				req.query.uid,
				config.static_params,
				'&apikey=' + config.api_keys[req.query.inst],
				'&format=json'
			].join('')

		request(api_call, function (error, response, body)  {
			// if request fails send 500
			if (error)
				return res.status(500).send(err);
			// if lookup didn't find anyone return 404 needs update
			if (JSON.parse(body).errorsExist == true)
			    return res.status(404).send(body);
			else
				var filtered_attributes = {};
			    var full_json = JSON.parse(body)
			    filtered_attributes.primary_id = full_json.primary_id;
			    filtered_attributes.full_name = full_json.full_name;
			    filtered_attributes.user_group = full_json.user_group;
			    filtered_attributes.user_role = full_json.user_role;
			    filtered_attributes.status = full_json.status;
			    filtered_attributes.user_block = full_json.user_block;
			    return res.status(200).send(filtered_attributes)

		});
};

