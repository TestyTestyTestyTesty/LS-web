import type { Schema, Attribute } from "@strapi/strapi"

export interface ModulesMegaMenu extends Schema.Component {
	collectionName: "components_modules_mega_menus"
	info: {
		displayName: "megaMenu"
	}
	attributes: {
		lightAccent: Attribute.String & Attribute.CustomField<"plugin::color-picker.color">
		darkAccent: Attribute.String & Attribute.CustomField<"plugin::color-picker.color">
		highlightSection: Attribute.Component<"modules.mega-menu-highlight">
		listsType1: Attribute.Component<"modules.list-type1", true> &
			Attribute.SetMinMax<
				{
					min: 2
					max: 2
				},
				number
			>
		listType2: Attribute.Component<"modules.list-type2">
		bottomSection: Attribute.Component<"modules.mega-menu-bottom-section">
	}
}

export interface ModulesMegaMenuHighlight extends Schema.Component {
	collectionName: "components_modules_mega_menu_highlights"
	info: {
		displayName: "megaMenuHighlight"
		description: ""
	}
	attributes: {
		tag: Attribute.Component<"atom.tag">
		title: Attribute.String
		subtitle: Attribute.String
		link: Attribute.Component<"atom.link">
		image: Attribute.Media<"images">
	}
}

export interface ModulesMegaMenuBottomSection extends Schema.Component {
	collectionName: "components_modules_mega_menu_bottom_sections"
	info: {
		displayName: "MegaMenuBottomSection"
	}
	attributes: {
		title: Attribute.String
		subtitle: Attribute.String
		link: Attribute.Component<"atom.link">
	}
}

export interface ModulesLogos extends Schema.Component {
	collectionName: "components_modules_logos"
	info: {
		displayName: "Logos"
	}
	attributes: {
		title: Attribute.String & Attribute.Required
		logos: Attribute.Media<"images", true> & Attribute.Required
	}
}

export interface ModulesListType2 extends Schema.Component {
	collectionName: "components_modules_list_type2s"
	info: {
		displayName: "listType2"
		description: ""
	}
	attributes: {
		title: Attribute.String
		listitems: Attribute.Component<"atom.list-item-type2", true>
	}
}

export interface ModulesListType1 extends Schema.Component {
	collectionName: "components_modules_list_type1s"
	info: {
		displayName: "listType1"
		description: ""
	}
	attributes: {
		title: Attribute.String
		listItems: Attribute.Component<"atom.list-item-type1", true>
		link: Attribute.Component<"atom.link">
	}
}

export interface ModulesInfographic extends Schema.Component {
	collectionName: "components_modules_infographics"
	info: {
		displayName: "Infographic"
		description: ""
	}
	attributes: {
		subheading: Attribute.RichText &
			Attribute.CustomField<
				"plugin::ckeditor5.CKEditor",
				{
					preset: "default"
				}
			>
		subtitle: Attribute.String
		infographicPoint: Attribute.Component<"atom.infographic-point", true> &
			Attribute.Required &
			Attribute.SetMinMax<
				{
					min: 5
					max: 5
				},
				number
			>
	}
}

export interface ModulesHero extends Schema.Component {
	collectionName: "components_modules_heroes"
	info: {
		displayName: "Hero"
		description: ""
	}
	attributes: {
		subheading: Attribute.RichText &
			Attribute.CustomField<
				"plugin::ckeditor5.CKEditor",
				{
					preset: "default"
				}
			>
		heading: Attribute.RichText &
			Attribute.CustomField<
				"plugin::ckeditor5.CKEditor",
				{
					preset: "default"
				}
			>
		subtitle: Attribute.RichText &
			Attribute.CustomField<
				"plugin::ckeditor5.CKEditor",
				{
					preset: "default"
				}
			>
		button: Attribute.Component<"atom.button", true> &
			Attribute.SetMinMax<
				{
					min: 2
					max: 2
				},
				number
			>
		background: Attribute.Media<"images"> & Attribute.Required
		videoButton: Attribute.Component<"atom.video-button">
	}
}

export interface ModulesCta extends Schema.Component {
	collectionName: "components_modules_ctas"
	info: {
		displayName: "Cta"
		description: ""
	}
	attributes: {
		subtitle: Attribute.String
		title: Attribute.RichText &
			Attribute.CustomField<
				"plugin::ckeditor5.CKEditor",
				{
					preset: "default"
				}
			>
		buttons: Attribute.Component<"atom.button", true> &
			Attribute.SetMinMax<
				{
					min: 0
					max: 2
				},
				number
			>
		icons: Attribute.Media<"images", true> & Attribute.Required
		labelIcons: Attribute.Component<"atom.label-icons", true>
	}
}

export interface ModulesCaseStudySlide extends Schema.Component {
	collectionName: "components_modules_case_study_slides"
	info: {
		displayName: "CaseStudySlide"
		description: ""
	}
	attributes: {
		industry: Attribute.String
		Goal: Attribute.String
		description: Attribute.String
		logo: Attribute.Media<"images"> & Attribute.Required
		background: Attribute.Media<"images"> & Attribute.Required
		link: Attribute.Component<"atom.link">
		achievements: Attribute.Component<"atom.case-study-achievements", true> &
			Attribute.SetMinMax<
				{
					min: 3
					max: 3
				},
				number
			>
	}
}

export interface ModulesCaseStudies extends Schema.Component {
	collectionName: "components_modules_case_studies"
	info: {
		displayName: "CaseStudies"
		description: ""
	}
	attributes: {
		subtitle: Attribute.String
		title: Attribute.RichText &
			Attribute.CustomField<
				"plugin::ckeditor5.CKEditor",
				{
					preset: "default"
				}
			>
		caseStudySlide: Attribute.Component<"modules.case-study-slide", true>
	}
}

export interface AtomVideoButton extends Schema.Component {
	collectionName: "components_atom_video_buttons"
	info: {
		displayName: "VideoButton"
	}
	attributes: {
		topText: Attribute.String
		showLogo: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>
		duration: Attribute.String
		linkText: Attribute.String
	}
}

export interface AtomTag extends Schema.Component {
	collectionName: "components_atom_tags"
	info: {
		displayName: "tag"
	}
	attributes: {
		text: Attribute.String
		backgroundColor: Attribute.String & Attribute.CustomField<"plugin::color-picker.color">
	}
}

export interface AtomListItemType2 extends Schema.Component {
	collectionName: "components_atom_list_item_type2s"
	info: {
		displayName: "listItemType2"
	}
	attributes: {
		icon: Attribute.Media<"images">
		title: Attribute.String
		subtitle: Attribute.String
		link: Attribute.Component<"atom.link">
	}
}

export interface AtomListItemType1 extends Schema.Component {
	collectionName: "components_atom_list_item_type1s"
	info: {
		displayName: "listItemType1"
		description: ""
	}
	attributes: {
		icon: Attribute.Media<"images">
		title: Attribute.String & Attribute.Required
		link: Attribute.String & Attribute.Required
		subtitle: Attribute.String
	}
}

export interface AtomLink extends Schema.Component {
	collectionName: "components_atom_links"
	info: {
		displayName: "link"
	}
	attributes: {
		text: Attribute.String
		href: Attribute.String
	}
}

export interface AtomLabelIcons extends Schema.Component {
	collectionName: "components_atom_label_icons"
	info: {
		displayName: "LabelIcons"
	}
	attributes: {
		text: Attribute.String
		icon: Attribute.Media<"images"> & Attribute.Required
	}
}

export interface AtomInfographicPoint extends Schema.Component {
	collectionName: "components_atom_infographic_points"
	info: {
		displayName: "InfographicPoint"
	}
	attributes: {
		text: Attribute.String
		Image: Attribute.Media<"images"> & Attribute.Required
	}
}

export interface AtomCaseStudyAchievements extends Schema.Component {
	collectionName: "components_atom_case_study_achievements"
	info: {
		displayName: "CaseStudyAchievements"
	}
	attributes: {
		topText: Attribute.String
		bottomText: Attribute.String
	}
}

export interface AtomButton extends Schema.Component {
	collectionName: "components_atom_buttons"
	info: {
		displayName: "Button"
		description: ""
	}
	attributes: {
		text: Attribute.String
		link: Attribute.String
	}
}

declare module "@strapi/types" {
	export module Shared {
		export interface Components {
			"modules.mega-menu": ModulesMegaMenu
			"modules.mega-menu-highlight": ModulesMegaMenuHighlight
			"modules.mega-menu-bottom-section": ModulesMegaMenuBottomSection
			"modules.logos": ModulesLogos
			"modules.list-type2": ModulesListType2
			"modules.list-type1": ModulesListType1
			"modules.infographic": ModulesInfographic
			"modules.hero": ModulesHero
			"modules.cta": ModulesCta
			"modules.case-study-slide": ModulesCaseStudySlide
			"modules.case-studies": ModulesCaseStudies
			"atom.video-button": AtomVideoButton
			"atom.tag": AtomTag
			"atom.list-item-type2": AtomListItemType2
			"atom.list-item-type1": AtomListItemType1
			"atom.link": AtomLink
			"atom.label-icons": AtomLabelIcons
			"atom.infographic-point": AtomInfographicPoint
			"atom.case-study-achievements": AtomCaseStudyAchievements
			"atom.button": AtomButton
		}
	}
}
