// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	tutorialsSidebar: [
		'index',
		{
			Guides: [
				{ Customization: [
					{
						type: 'autogenerated',
						dirName: 'customization',
					},
				] },
			],
		},
		{
			'Framework Integrations': [
				{ React: [
					{
						type: 'autogenerated',
						dirName: 'react',
					},
				] },
				{
					type: 'doc',
					id: 'vuejs/wrapper',
					label: 'Vue.js',
				},
				{
					type: 'doc',
					id: 'webcomponents/custom-element',
					label: 'Web Components',
				},
			],
		},
		{
			'How To / Examples': [
				{
					type: 'autogenerated',
					dirName: 'how_to',
				},
			],
		},
	],
};

module.exports = sidebars;
