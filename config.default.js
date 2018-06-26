// config
var config = {};

// Delete this line
config.empty = true;

config.doc_message = "WRLC patron lookup service";

config.api_keys = {
	'inst1'		: '<api_key_1>',
	'inst2'		: '<api_key_2>',
};

//change this if you're outside north america
config.api_endpiont = 'https://api-eu.hosted.exlibrisgroup.com/almaws/v1/users/';
//cahnge this to edit what you get back from the api
config.static_params = '?user_id_type=all_unique&view=full&expand=none';

module.exports = config;
