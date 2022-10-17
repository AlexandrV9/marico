import pathProfile1 from "../images/Profile-1.png";
import pathProfile2 from "../images/Profile-2.png";
import pathProfile3 from "../images/Profile-3.png";

import pathTwitter from "../icons/twitter.svg";
import pathYouTube from "../icons/youtube.svg";
import pathWordPress from "../icons/wordpress.svg";
import pathSubstack from "../icons/download.svg";
import pathMedium from "../icons/medium.svg";
import pathSpotify from "../icons/spotify.svg";
import pathAnchor from "../icons/anchor.svg";
import pathApplePodcasts from "../icons/podcast.svg";
import pathInstagram from "../icons/instagram.svg";
import pathLinkedin from "../icons/linkedin.svg";
import pathFackbook from "../icons/facebook.svg";

export interface itemListLoveMarico {
  id: number,
  title: string,
  subtitle: string,
  emoji: string
}

export interface itemSteps {
  id: number,
  numberStep: number,
  title: string,
  subtitle: string,
}

export interface itemListNavFooter {
  id: number,
  title: string,
  link: string,
}


export interface itemListNavHeader {
  id: number,
  title: string,
  link: string,
}

export interface itemListInPlan {
  id: number,
  text: string,
}

export interface itemPlan {
  id: number,
  title: string,
  titleSubtitle: string,
  priceSubtitleOne?: string,
  priceSubtitleTwo?: string,
  textOne: string,
  textTwo: string,
  textThree: string,
  price: string,
  listTitle: string,
  textBtn: string,
  list: Array<itemListInPlan>
}


export const dataListLoveMarico: Array<itemListLoveMarico> = [
  {
    id: 1,
    title: "Reduced Anxiety",
    subtitle: "Never worry about losing your audience.",
    emoji: "smile"
  },
  {
    id: 2,
    title: "Lower Workload",
    subtitle: "Just share one link. We'll handle the rest.",
    emoji: "happy"
  },
  {
    id: 3,
    title: "More Time",
    subtitle: "Spend less time on marketing tools",
    emoji: "party"
  }
];

export const dataSteps: Array<itemSteps> = [
  {
    id: 4,
    numberStep: 1,
    title: "Connect Your Content",
    subtitle: "Bring all of your content together and get a Homepage that automatically updates whenever you create anywhere online.",
  },
  {
    id: 5,
    numberStep: 2,
    title: "Share Your Homepage",
    subtitle: "Share your Wavium homepage link with your followers, and we'll handle the rest.",
  },
  {
    id: 6,
    numberStep: 3,
    title: "Send Emails & Text Messages",
    subtitle: "No more going through a social platform. Reach and engage your audience directly over email and text massage.",
  },
];

export const dataListNavFooter: Array<itemListNavFooter> = [
  {
    title: "About",
    link: "/about",
    id: 7
  },
  {
    title: "Pricing",
    link: "/pricing",
    id: 8
  },
  {
    title: "Blog",
    link: "/blog",
    id: 9
  },
  {
    title: "Sign in",
    link: "/sign-in",
    id: 10
  },
];

export const dataListNavHeader: Array<itemListNavHeader> = [
  {
    title: "Use Cases",
    link: "/use-cases",
    id: 11
  },
  {
    title: "About",
    link: "/about",
    id: 12
  },
  {
    title: "Pricing",
    link: "/pricing",
    id: 13
  },
  {
    title: "Blog",
    link: "/blog",
    id: 14
  },
];

export const dataListPlan:  Array<itemPlan> = [
  {
    id: 15,
    title: 'Starer',
    titleSubtitle: 'Perfect for tying out Wavium',
    price: 'Free',
    textOne: 'Collect Unlimited subscribers',
    textTwo: '500 monthly emails',
    textThree: 'Upgrade to send more emails',
    listTitle: 'Key features',
    textBtn: "Start For Free",
    list: [
      {
        id: 16,
        text: 'Automatic updating home page'
      },
      {
        id: 17,
        text: 'Unlimited sources + posts'
      },
    ]
  },
  {
    id: 18,
    title: 'Basic',
    titleSubtitle: 'Build your online home',
    price: '$14',
    priceSubtitleOne: 'Per month',
    priceSubtitleTwo: 'or $19/mo, billed monthly',
    textOne: 'Collect Unlimited subscribers',
    textTwo: '2,000 free monthl emails',
    textThree: 'Purchase more for $0.002 per email',
    listTitle: 'Everything in starter, plus',
    textBtn: "Start Free 14-day Trial",
    list: [
      {
        id: 19,
        text: 'Remove Wavium branding'
      },
      {
        id: 20,
        text: 'Embed Wavium on your own domain'
      },
    ]
  },
  {
    id: 21,
    title: 'Complete',
    titleSubtitle: 'Enhanced engagement',
    price: '$29',
    priceSubtitleOne: 'Per month',
    priceSubtitleTwo: 'or $34/mo, billed monthly',
    textOne: 'Collect Unlimited subscribers',
    textTwo: '10,000 free monthly emails',
    textThree: 'Purchase more for $0.002 per email',
    listTitle: 'Everything in basic, plus',
    textBtn: "Start Free 14-day Trial",
    list: [
      {
        id: 22,
        text: 'Collect text massage subscribers'
      },
      {
        id: 23,
        text: 'Share posts over text massage'
      },
    ]
  }
]

export interface itemLinksSM {
  id: number,
  nameSM: string,
  linkSM: string
}

export interface itemTeam {
  id: number,
  name: string,
  pathProfile?: string,
  profession: string,
  listLinksSM?: Array<itemLinksSM>
}

export const dataTeam: Array<itemTeam> = [
  {
    id: 24,
    name: "Jacob Mark",
    profession: "CEO & Design",
    pathProfile: pathProfile1,
    listLinksSM: [
      {
        id: 25,
        nameSM: 'Twitter',
        linkSM: "/jacob-mark"
      }
    ]
  },
  {
    id: 26,
    name: "Daniel",
    profession: "CTO & Development",
    pathProfile: pathProfile2,
    listLinksSM: [
      {
        id: 27,
        nameSM: 'Twitter',
        linkSM: "/daniel"
      }
    ]
  },
  {
    id: 28,
    name: "Ryan Trump",
    profession: "COO & Sales",
    pathProfile: pathProfile3,
    listLinksSM: [
      {
        id: 29,
        nameSM: 'Twitter',
        linkSM: "/ryan-trump"
      }
    ]
  },
];

export interface itemContentSources {
  id: number,
  title: string,
  text: string,
  pathImg: string,
  soon: boolean
}

export const dataContentSources: Array<itemContentSources> = [
  {
    id: 30,
    title: "Twitter",
    text: "Connect your Twitter feed to your Marico homepage.",
    pathImg: pathTwitter,
    soon: false,
  },
  {
    id: 31,
    title: "YouTube",
    text: "Connect your YouTube feed to your Marico homepage.",
    pathImg: pathYouTube,
    soon: false,
  },
  {
    id: 32,
    title: "WordPress",
    text: "Connect your WordPress feed to your Marico homepage.",
    pathImg: pathWordPress,
    soon: false,
  },
  {
    id: 33,
    title: "Substack",
    text: "Connect your Substack feed to your Marico homepage.",
    pathImg: pathSubstack,
    soon: false,
  },
  {
    id: 34,
    title: "Medium",
    text: "Connect your Medium feed to your Marico homepage.",
    pathImg: pathMedium,
    soon: false,
  },
  {
    id: 35,
    title: "RSS Feeds",
    text: "Connect your RSS feed to your Marico homepage.",
    pathImg: pathWordPress,
    soon: true,
  },
  {
    id: 36,
    title: "Spotify",
    text: "Connect your Spotify feed to your Marico homepage.",
    pathImg: pathSpotify,
    soon: false,
  },
  {
    id: 37,
    title: "Anchor",
    text: "Connect your Anchor feed to your Marico homepage.",
    pathImg: pathAnchor,
    soon: false,
  },
  {
    id: 38,
    title: "Apple Podcasts",
    text: "Connect your Apple Podcasts feed to your Marico homepage.",
    pathImg: pathApplePodcasts,
    soon: false,
  },
  {
    id: 39,
    title: "Instagram",
    text: "Connect your Instagram feed to your Marico homepage.",
    pathImg: pathInstagram,
    soon: true,
  },
  {
    id: 40,
    title: "Linkedin",
    text: "Connect your Linkedin feed to your Marico homepage.",
    pathImg: pathLinkedin,
    soon: true,
  },
  {
    id: 41,
    title: "Facebook",
    text: "Connect your Facebook feed to your Marico homepage.",
    pathImg: pathFackbook,
    soon: true,
  },
]