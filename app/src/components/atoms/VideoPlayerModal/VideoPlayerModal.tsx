import { Dialog } from "@mui/material"
import Script from "next/script"
import type { VideoPlayerModalProps } from "./VideoPlayerModal.types"

export const VideoPlayerModal = ({ open, mediaId, handleClose }: VideoPlayerModalProps) => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			sx={{ zIndex: 1301, width: "100%" }}
			maxWidth="xl"
			PaperProps={{ sx: { borderRadius: 0, margin: "1rem", width: "calc(100% - 1rem)" } }}
			fullWidth
		>
			<div
				className="wistia_responsive_padding"
				style={{ padding: "56.25% 0 0 ", position: "relative" }}
			>
				<div
					className="wistia_responsive_wrapper"
					style={{ height: "100%", left: 0, position: "absolute", top: 0, width: "100%" }}
				>
					<div
						className="wistia_embed wistia_async_59t968wz12 seo=false videoFoam=true"
						style={{ height: "100%", position: "relative", width: "100%" }}
					>
						&nbsp;
					</div>
				</div>
			</div>
			<Script src={`https://fast.wistia.com/embed/medias/${mediaId}.jsonp`} strategy="lazyOnload" />
			<Script src={"https://fast.wistia.com/assets/external/E-v1.js"} />
		</Dialog>
	)
}
