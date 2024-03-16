module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					alias: {
						"@screens/*": ["app/screens/*"],
						"@routes/*": ["app/routes/*"],
						"@assets/*": ["app/assets/*"],
						"@themes": ["app/themes"],
						"@atoms/*": ["app/components/atoms/*"],
						"@molecules/*": ["app/components/molecules/*"],
						"@organisms/*": ["app/components/organisms/*"],
						"@data": ["app/data"],
						"@context/*": ["app/context/*"],
						"@validation/*": ["app/validation/*"],
					},
				},
			],
		],
	};
};
