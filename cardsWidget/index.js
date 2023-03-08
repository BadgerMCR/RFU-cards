module.exports = {
	name: "cardsWidget",
	description: "cards widget",
	category: "Basic",
	icon: "user",
	hasEntries: true,
	multipleVisibleEntries: false,
	default: {
		style: {
			//horizontal_position: "left",
			//vertical_position: "bottom",
			//width: "50"
		}
	},
	entry_props: [
		{
			name: "yellowHome",
			description: "yellow card home",
			type: "String"
		},
		{
			name: "redHome",
			description: "red card home",
			type: "String"
		},
		{
			name: "yellowAway",
			description: "yellow card away",
			type: "String"
		},
		{
			name: "redAway",
			description: "red card home",
			type: "String"
		}
	],
	vue_template: renderPug(getFile("template.pug").toString()),
	css: renderStylus(getFile("style.styl").toString())
}
