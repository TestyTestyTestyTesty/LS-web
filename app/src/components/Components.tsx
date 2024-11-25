"use client"
import {
	Banner,
	CaseStudies,
	Challenges,
	Cta,
	Features,
	Footer,
	Hero,
	Infographic,
	Logos,
	NavBar,
	ScrollSection,
	Stats,
} from "@components"
import {
	bannerMock,
	caseStudiesMock,
	ctaMock,
	featuresMock,
	footerMock,
	heroMock,
	infographicMock,
	logosMock,
	navbarMock,
	scrollSectionMock,
	statsSectionMock,
	challengesMock,
} from "@mocks"

export const Components = () => {
	const { buttonLabel, title, lead, tiles, description } = statsSectionMock
	return (
		<div>
			<NavBar links={navbarMock.links} buttons={navbarMock.buttons} />
			<main>
				<Hero
					subheading={heroMock.subheading}
					heading={heroMock.heading}
					subtitle={heroMock.subtitle}
					buttons={heroMock.buttons}
					playButton={heroMock.playButton}
					labelIcons={heroMock.labelIcons}
					backgroundImage={heroMock.backgroundImage}
				/>

				<Logos title={logosMock.title} icons={logosMock.icons} />
				<Challenges
					heading={challengesMock.heading}
					challenges={challengesMock.challenges}
					subheading={challengesMock.subheading}
				/>
				<Infographic
					title={infographicMock.title}
					subtitle={infographicMock.subtitle}
					points={infographicMock.points}
				/>
				<Stats
					title={title}
					lead={lead}
					tiles={tiles}
					buttonLabel={buttonLabel}
					description={description}
				/>
				<Features
					heading={featuresMock.heading}
					subheading={featuresMock.subheading}
					features={featuresMock.features}
					button={featuresMock.button}
				/>
				<ScrollSection {...scrollSectionMock} />
				<CaseStudies
					subheading={caseStudiesMock.subheading}
					heading={caseStudiesMock.heading}
					caseStudies={caseStudiesMock.caseStudies}
				/>
				<Cta
					subheading={ctaMock.subheading}
					heading={ctaMock.heading}
					buttons={ctaMock.buttons}
					labelIcons={ctaMock.labelIcons}
					icons={ctaMock.icons}
				/>
				<Banner
					caption={bannerMock.caption}
					subheading={bannerMock.subheading}
					heading={bannerMock.heading}
					button={bannerMock.button}
					participants={bannerMock.participants}
					backgroundCards={bannerMock.backgroundCards}
				/>
			</main>
			<Footer top={footerMock.top} middle={footerMock.middle} bottom={footerMock.bottom} />
		</div>
	)
}
