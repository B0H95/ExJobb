'use strict';

module.exports = function(Chart) {

	Chart.WindRadar = function(context, config) {
		config.type = 'windRadar';

		return new Chart(context, config);
	};

};
