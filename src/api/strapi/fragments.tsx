import gql from "graphql-tag";

export const OTHER_FRAGMENTS = {
  SINGLE_IMAGE: gql`
    fragment SINGLE_IMAGE on UploadFileEntityResponse {
      __typename
      data {
        ... on UploadFileEntity {
          id
          attributes {
            url
            name
            formats
            alternativeText
          }
        }
      }
    }
  `,
};

export const FRAGMENTS_OF_BLOCKS = {
  PARAGRAPHS: gql`
    fragment PARAGRAPHS on ComponentBlocksParagraph {
      title
      subTitle
      body
      icon
      image {
        ...SINGLE_IMAGE
      }
    }
  `,
  CTA: gql`
    fragment CTA on ComponentBlocksCta {
      type
      isPrimary
    }
  `,
};

export const SHARED_FRAGMENTS = {
  ALIGN: gql`
    fragment ALIGN on ComponentSharedAlign {
      textAlign
    }
  `,
  THEME: gql`
    fragment THEME on ComponentSharedTheme {
      background
    }
  `,
  SEO: gql`
    fragment SEO on ComponentSharedSeo {
      metaTitle
      metaDescription
      keywords
      metaRobots
      structuredData
      metaViewport
      metaImage {
        data {
          attributes {
            url
            name
          }
        }
      }
      twitter {
        site
        handle
        cardType
      }
      openGraph {
        title
        url
        description
        siteName
        imageWidth
        imageHeight
      }
    }
  `,
};

export const FRAGMENTS_OF_SECTIONS = {
  FEATURES_WITH_IMAGE: gql`
    fragment FEATURES_WITH_IMAGE on ComponentSectionsFeaturesWithImage {
      subTitle
      title
      align {
        ...ALIGN
      }
      theme {
        ...THEME
      }
      image {
        ...SINGLE_IMAGE
      }
      paragraphs {
        ...PARAGRAPHS
      }
      CTA {
        ...CTA
      }
    }
  `,
  HERO_FIVE: gql`
    fragment HERO_FIVE on ComponentSectionsHeroFive {
      id
      title
      subTitle
      align {
        ...ALIGN
      }
      theme {
        ...THEME
      }
      image {
        ...SINGLE_IMAGE
      }
      CTA {
        ...CTA
      }
    }
  `,
  WORK_PROCESS_TWO: gql`
    fragment WORK_PROCESS_TWO on ComponentSectionsWorkProcessTwo {
      id
      title
      subTitle
      theme {
        ...THEME
      }
      paragraphs {
        ...PARAGRAPHS
      }
    }
  `,
  TEXT_WITH_IMAGE: gql`
    fragment TEXT_WITH_IMAGE on ComponentSectionsTextWithImage {
      id
      title
      subTitle
      theme {
        ...THEME
      }
      paragraphs {
        ...PARAGRAPHS
      }
      image {
        ...SINGLE_IMAGE
      }
    }
  `,
  WORK_PROCESS_FOUR: gql`
    fragment WORK_PROCESS_FOUR on ComponentSectionsWorkProcessFour {
      id
      title
      subTitle
      theme {
        ...THEME
      }
      paragraphs {
        ...PARAGRAPHS
      }
      image {
        ...SINGLE_IMAGE
      }
    }
  `,
  FOOTER_CTA_FRAGMENT: gql`
    fragment FOOTER_CTA on ComponentSectionsFooterCta {
      id
      title
      subTitle
      align {
        ...ALIGN
      }
      theme {
        ...THEME
      }
      CTA {
        ...CTA
      }
      image {
        ...SINGLE_IMAGE
      }
    }
  `,
  FAQ_ONE_FRAGMENT: gql`
    fragment FAQ_ONE on ComponentSectionsFaqOne {
      id
      title
      subTitle
      theme {
        ...THEME
      }
      paragraphs {
        ...PARAGRAPHS
      }
    }
  `,
  SIMPLE_HEADER: gql`
    fragment SIMPLE_HEADER on ComponentSectionsSimpleHeader {
      id
      title
      subTitle
      theme {
        ...THEME
      }
      paragraphs {
        ...PARAGRAPHS
      }
      align {
        ...ALIGN
      }
    }
  `,
  SIMPLE_TEXT: gql`
    fragment SIMPLE_TEXT on ComponentSectionsSimpleText {
      id
      title
      subTitle
      theme {
        ...THEME
      }
      paragraphs {
        ...PARAGRAPHS
      }
    }
  `,
  TESTIMONIALS_ONE: gql`
    fragment TESTIMONIALS_ONE on ComponentSectionsTestimonialsOne {
      id
      title
      subTitle
      align {
        ...ALIGN
      }
      theme {
        ...THEME
      }
      paragraphs {
        ...PARAGRAPHS
      }
    }
  `,
  INSTALLMENT_CALCULATOR: gql`
    fragment INSTALLMENT_CALCULATOR on ComponentSectionsInstallmentCalculator {
      id
      title
    }
  `,
  FLOATING_CTA: gql`
    fragment FLOATING_CTA on ComponentSectionsFloatingCta {
      id
      CTA {
        ...CTA
      }
    }
  `,
  RICH_TEXT: gql`
    fragment RICH_TEXT on ComponentSectionsRichText {
      id
      title
      content
      theme {
        ...THEME
      }
    }
  `,
};

export const ENTITY_RESPONSE_FRAGMENTS = {
  PAGE: gql`
    fragment PAGE on PageEntityResponse {
      data {
        attributes {
          localizations {
            data {
              attributes {
                locale
                title
                slug
              }
            }
          }
          title
          slug
        }
      }
    }
  `,
  CATEGORY: gql`
    fragment CATEGORY on CategoryEntityResponse {
      data {
        attributes {
          localizations {
            data {
              attributes {
                locale
                title
                slug
              }
            }
          }
          locale
          title
          slug
        }
      }
    }
  `,
};

export const NAVIGATION_FRAGMENTS = {
  PAGE_LINK: gql`
    fragment PAGE_LINK on ComponentNavigationsPageLink {
      page {
        ...PAGE
      }
    }
  `,
  DROPDOWN: gql`
    fragment DROPDOWN on ComponentNavigationsDropdown {
      page {
        ...PAGE
      }
      nestedLinks {
        icon
        variant
        page {
          ...PAGE
        }
        category {
          ...CATEGORY
        }
      }
    }
  `,
  SOCIAL_LINK: gql`
    fragment SOCIAL_LINK on ComponentNavigationsSocialLink {
      url
      icon
    }
  `,
  COOKIE_MODAL_LINK: gql`
    fragment COOKIE_MODAL_LINK on ComponentNavigationsCookieModalLink {
      page {
        ...PAGE
      }
    }
  `,
};
