import gql from "graphql-tag";
import {
  ENTITY_RESPONSE_FRAGMENTS,
  FRAGMENTS_OF_BLOCKS,
  FRAGMENTS_OF_SECTIONS,
  NAVIGATION_FRAGMENTS,
  OTHER_FRAGMENTS,
  SHARED_FRAGMENTS,
} from "./fragments";

export const pageQuery = gql`
  query GetPages($slug: String!, $locale: I18NLocaleCode!) {
    pages(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        id
        attributes {
          seo {
            ...SEO
          }
          locale
          localizations {
            data {
              id
              attributes {
                locale
                slug
              }
            }
          }
          slug
          contentSections {
            __typename
            ...HERO_FIVE
            ...FEATURES_WITH_IMAGE
            ...WORK_PROCESS_TWO
            ...TEXT_WITH_IMAGE
            ...WORK_PROCESS_FOUR
            ...FOOTER_CTA
            ...FAQ_ONE
            ...SIMPLE_HEADER
            ...SIMPLE_TEXT
            ...TESTIMONIALS_ONE
            ...INSTALLMENT_CALCULATOR
            ...FLOATING_CTA
            ...RICH_TEXT
          }
        }
      }
    }
  }

  ${OTHER_FRAGMENTS.SINGLE_IMAGE}

  ${SHARED_FRAGMENTS.THEME}
  ${SHARED_FRAGMENTS.ALIGN}
  ${SHARED_FRAGMENTS.SEO}

  ${FRAGMENTS_OF_BLOCKS.PARAGRAPHS}
  ${FRAGMENTS_OF_BLOCKS.CTA}

  ${FRAGMENTS_OF_SECTIONS.FOOTER_CTA_FRAGMENT}
  ${FRAGMENTS_OF_SECTIONS.FEATURES_WITH_IMAGE}
  ${FRAGMENTS_OF_SECTIONS.HERO_FIVE}
  ${FRAGMENTS_OF_SECTIONS.WORK_PROCESS_FOUR}
  ${FRAGMENTS_OF_SECTIONS.WORK_PROCESS_TWO}
  ${FRAGMENTS_OF_SECTIONS.TEXT_WITH_IMAGE}
  ${FRAGMENTS_OF_SECTIONS.FAQ_ONE_FRAGMENT}
  ${FRAGMENTS_OF_SECTIONS.SIMPLE_HEADER}
  ${FRAGMENTS_OF_SECTIONS.SIMPLE_TEXT}
  ${FRAGMENTS_OF_SECTIONS.TESTIMONIALS_ONE}
  ${FRAGMENTS_OF_SECTIONS.INSTALLMENT_CALCULATOR}
  ${FRAGMENTS_OF_SECTIONS.FLOATING_CTA}
  ${FRAGMENTS_OF_SECTIONS.RICH_TEXT}
`;

export const globalQuery = gql`
  query GetSiteData {
    navbar {
      data {
        id
        attributes {
          links {
            __typename
            ...PAGE_LINK
            ...DROPDOWN
          }
        }
      }
    }
    footer {
      data {
        id
        attributes {
          copyrightText
          links {
            __typename
            ...PAGE_LINK
          }
          socialLinks {
            ...SOCIAL_LINK
          }
        }
      }
    }
    global {
      data {
        id
        attributes {
          languages {
            displayName
            countryCode
            localeId
          }
          logo {
            ...SINGLE_IMAGE
          }
          inverseLogo {
            ...SINGLE_IMAGE
          }
          cookieModalLinks {
            ...COOKIE_MODAL_LINK
          }
        }
      }
    }
  }

  ${OTHER_FRAGMENTS.SINGLE_IMAGE}

  ${ENTITY_RESPONSE_FRAGMENTS.PAGE}
  ${ENTITY_RESPONSE_FRAGMENTS.CATEGORY}

  ${NAVIGATION_FRAGMENTS.PAGE_LINK}
  ${NAVIGATION_FRAGMENTS.DROPDOWN}
  ${NAVIGATION_FRAGMENTS.SOCIAL_LINK}
  ${NAVIGATION_FRAGMENTS.COOKIE_MODAL_LINK}
`;
export const categoryQuery = gql`
  query GetCategory($locale: I18NLocaleCode!, $slug: String!) {
    categories(locale: $locale, filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
          seo {
            ...SEO
          }
          localizations {
            data {
              attributes {
                slug
                locale
                title
              }
            }
          }
          locale
          articles {
            ... on ArticleRelationResponseCollection {
              data {
                attributes {
                  title
                  slug
                  pinned
                  summary
                  image {
                    ...SINGLE_IMAGE
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ${SHARED_FRAGMENTS.SEO}
  ${OTHER_FRAGMENTS.SINGLE_IMAGE}
`;

export const categoriesQuery = gql`
  query GetCategories($locale: I18NLocaleCode!) {
    categories(locale: $locale) {
      data {
        attributes {
          title
          slug
          seo {
            ...SEO
          }
          articles {
            ... on ArticleRelationResponseCollection {
              data {
                attributes {
                  title
                  slug
                  pinned
                  summary
                  image {
                    ...SINGLE_IMAGE
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ${SHARED_FRAGMENTS.SEO}
  ${OTHER_FRAGMENTS.SINGLE_IMAGE}
`;

export const articleQuery = gql`
  query GetArticle(
    $locale: I18NLocaleCode!
    $category: String
    $slug: String!
    $publicationState: PublicationState
  ) {
    articles(
      locale: $locale
      filters: { slug: { eq: $slug }, category: { slug: { eq: $category } } }
      publicationState: $publicationState
    ) {
      data {
        attributes {
          slug
          title
          summary
          category {
            data {
              attributes {
                title
                slug
                seo {
                  ...SEO
                }
                localizations {
                  data {
                    attributes {
                      slug
                      locale
                      title
                    }
                  }
                }
                locale
                articles {
                  ... on ArticleRelationResponseCollection {
                    data {
                      attributes {
                        title
                        slug
                        pinned
                        summary
                        image {
                          ...SINGLE_IMAGE
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          contentSections {
            __typename
            ...HERO_FIVE
            ...FEATURES_WITH_IMAGE
            ...WORK_PROCESS_TWO
            ...TEXT_WITH_IMAGE
            ...WORK_PROCESS_FOUR
            ...FOOTER_CTA
            ...FAQ_ONE
            ...SIMPLE_HEADER
            ...SIMPLE_TEXT
            ...TESTIMONIALS_ONE
            ...INSTALLMENT_CALCULATOR
            ...FLOATING_CTA
            ...RICH_TEXT
          }
          showTOC
          seo {
            ...SEO
          }
          image {
            ...SINGLE_IMAGE
          }
          localizations {
            data {
              attributes {
                slug
                locale
                title
              }
            }
          }
        }
      }
    }
  }
  ${OTHER_FRAGMENTS.SINGLE_IMAGE}

  ${SHARED_FRAGMENTS.THEME}
  ${SHARED_FRAGMENTS.ALIGN}
  ${SHARED_FRAGMENTS.SEO}

  ${FRAGMENTS_OF_BLOCKS.PARAGRAPHS}
  ${FRAGMENTS_OF_BLOCKS.CTA}

  ${FRAGMENTS_OF_SECTIONS.FOOTER_CTA_FRAGMENT}
  ${FRAGMENTS_OF_SECTIONS.FEATURES_WITH_IMAGE}
  ${FRAGMENTS_OF_SECTIONS.HERO_FIVE}
  ${FRAGMENTS_OF_SECTIONS.WORK_PROCESS_FOUR}
  ${FRAGMENTS_OF_SECTIONS.WORK_PROCESS_TWO}
  ${FRAGMENTS_OF_SECTIONS.TEXT_WITH_IMAGE}
  ${FRAGMENTS_OF_SECTIONS.FAQ_ONE_FRAGMENT}
  ${FRAGMENTS_OF_SECTIONS.SIMPLE_HEADER}
  ${FRAGMENTS_OF_SECTIONS.SIMPLE_TEXT}
  ${FRAGMENTS_OF_SECTIONS.TESTIMONIALS_ONE}
  ${FRAGMENTS_OF_SECTIONS.INSTALLMENT_CALCULATOR}
  ${FRAGMENTS_OF_SECTIONS.FLOATING_CTA}
  ${FRAGMENTS_OF_SECTIONS.RICH_TEXT}
`;
