// CKEConfig must have this syntax, otherwise it will fail to compile and work
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const CKEConfig = () => ({
	presets: {
		default: {
			editorConfig: {
				plugins: [
					SH_CKE.Bold,
					SH_CKE.Italic,
					SH_CKE.Essentials,
					SH_CKE.Heading,
					SH_CKE.Image,
					SH_CKE.Font,
					SH_CKE.ImageCaption,
					SH_CKE.ImageStyle,
					SH_CKE.ImageToolbar,
					SH_CKE.Link,
					SH_CKE.List,
					SH_CKE.Paragraph,
					SH_CKE.StrapiMediaLib,
					SH_CKE.StrapiUploadAdapter,
				],
				fontColor: {
					colors: [
						{
							color: "#4FD465",
							label: "livespace green",
						},
					],
				},
				toolbar: ["link", "fontColor", "|", "undo", "redo"],
			},
		},
	},
})
