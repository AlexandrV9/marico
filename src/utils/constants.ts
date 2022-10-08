import { StringMappingType } from "typescript";

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
    link: "/about",
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