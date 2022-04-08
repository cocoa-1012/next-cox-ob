export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ArticleContentSectionsDynamicZoneInput: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  FooterLinksDynamicZoneInput: any;
  /** A string used to identify an i18n locale */
  I18NLocaleCode: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  NavbarLinksDynamicZoneInput: any;
  PageContentSectionsDynamicZoneInput: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Article = {
  __typename?: "Article";
  author?: Maybe<UsersPermissionsUserEntityResponse>;
  category?: Maybe<CategoryEntityResponse>;
  contentSections?: Maybe<Array<Maybe<ArticleContentSectionsDynamicZone>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  image?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars["String"]>;
  localizations?: Maybe<ArticleRelationResponseCollection>;
  pinned?: Maybe<Scalars["Boolean"]>;
  publish_at?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  seo?: Maybe<ComponentSharedSeo>;
  showTOC?: Maybe<Scalars["Boolean"]>;
  slug?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ArticleLocalizationsArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ArticleContentSectionsDynamicZone =
  | ComponentSectionsFaqOne
  | ComponentSectionsFeaturesWithImage
  | ComponentSectionsFloatingCta
  | ComponentSectionsFooterCta
  | ComponentSectionsHeroFive
  | ComponentSectionsInstallmentCalculator
  | ComponentSectionsRichText
  | ComponentSectionsSimpleHeader
  | ComponentSectionsSimpleText
  | ComponentSectionsTestimonialsOne
  | ComponentSectionsTextWithImage
  | ComponentSectionsWorkProcessFour
  | ComponentSectionsWorkProcessTwo
  | Error;

export type ArticleEntity = {
  __typename?: "ArticleEntity";
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars["ID"]>;
};

export type ArticleEntityResponse = {
  __typename?: "ArticleEntityResponse";
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  __typename?: "ArticleEntityResponseCollection";
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  author?: InputMaybe<UsersPermissionsUserFiltersInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  comment?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ArticleFiltersInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  pinned?: InputMaybe<BooleanFilterInput>;
  publish_at?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  showTOC?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  summary?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticleInput = {
  author?: InputMaybe<Scalars["ID"]>;
  category?: InputMaybe<Scalars["ID"]>;
  comment?: InputMaybe<Scalars["String"]>;
  contentSections?: InputMaybe<
    Array<Scalars["ArticleContentSectionsDynamicZoneInput"]>
  >;
  image?: InputMaybe<Scalars["ID"]>;
  pinned?: InputMaybe<Scalars["Boolean"]>;
  publish_at?: InputMaybe<Scalars["DateTime"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  showTOC?: InputMaybe<Scalars["Boolean"]>;
  slug?: InputMaybe<Scalars["String"]>;
  summary?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ArticleRelationResponseCollection = {
  __typename?: "ArticleRelationResponseCollection";
  data: Array<ArticleEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  contains?: InputMaybe<Scalars["Boolean"]>;
  containsi?: InputMaybe<Scalars["Boolean"]>;
  endsWith?: InputMaybe<Scalars["Boolean"]>;
  eq?: InputMaybe<Scalars["Boolean"]>;
  gt?: InputMaybe<Scalars["Boolean"]>;
  gte?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  lt?: InputMaybe<Scalars["Boolean"]>;
  lte?: InputMaybe<Scalars["Boolean"]>;
  ne?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars["Boolean"]>;
  notContainsi?: InputMaybe<Scalars["Boolean"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  startsWith?: InputMaybe<Scalars["Boolean"]>;
};

export type Category = {
  __typename?: "Category";
  articles?: Maybe<ArticleRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  locale?: Maybe<Scalars["String"]>;
  localizations?: Maybe<CategoryRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CategoryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type CategoryLocalizationsArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type CategoryEntity = {
  __typename?: "CategoryEntity";
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars["ID"]>;
};

export type CategoryEntityResponse = {
  __typename?: "CategoryEntityResponse";
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: "CategoryEntityResponseCollection";
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<CategoryFiltersInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type CategoryRelationResponseCollection = {
  __typename?: "CategoryRelationResponseCollection";
  data: Array<CategoryEntity>;
};

export type ComponentBlocksCta = {
  __typename?: "ComponentBlocksCta";
  id: Scalars["ID"];
  isPrimary?: Maybe<Scalars["Boolean"]>;
  type: Enum_Componentblockscta_Type;
};

export type ComponentBlocksCtaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksCtaFiltersInput>>>;
  isPrimary?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentBlocksCtaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksCtaFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksParagraph = {
  __typename?: "ComponentBlocksParagraph";
  body?: Maybe<Scalars["String"]>;
  icon?: Maybe<Enum_Componentblocksparagraph_Icon>;
  id: Scalars["ID"];
  image?: Maybe<UploadFileEntityResponse>;
  subTitle?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type ComponentBlocksParagraphFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksParagraphFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  icon?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksParagraphFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksParagraphFiltersInput>>>;
  subTitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentNavigationsCategoryLink = {
  __typename?: "ComponentNavigationsCategoryLink";
  category?: Maybe<CategoryEntityResponse>;
  icon?: Maybe<Enum_Componentnavigationscategorylink_Icon>;
  id: Scalars["ID"];
  page?: Maybe<PageEntityResponse>;
  variant?: Maybe<Enum_Componentnavigationscategorylink_Variant>;
};

export type ComponentNavigationsCategoryLinkFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentNavigationsCategoryLinkFiltersInput>>
  >;
  category?: InputMaybe<CategoryFiltersInput>;
  icon?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentNavigationsCategoryLinkFiltersInput>;
  or?: InputMaybe<
    Array<InputMaybe<ComponentNavigationsCategoryLinkFiltersInput>>
  >;
  page?: InputMaybe<PageFiltersInput>;
  variant?: InputMaybe<StringFilterInput>;
};

export type ComponentNavigationsCookieModalLink = {
  __typename?: "ComponentNavigationsCookieModalLink";
  id: Scalars["ID"];
  page?: Maybe<PageEntityResponse>;
};

export type ComponentNavigationsCookieModalLinkFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentNavigationsCookieModalLinkFiltersInput>>
  >;
  not?: InputMaybe<ComponentNavigationsCookieModalLinkFiltersInput>;
  or?: InputMaybe<
    Array<InputMaybe<ComponentNavigationsCookieModalLinkFiltersInput>>
  >;
  page?: InputMaybe<PageFiltersInput>;
};

export type ComponentNavigationsCookieModalLinkInput = {
  id?: InputMaybe<Scalars["ID"]>;
  page?: InputMaybe<Scalars["ID"]>;
};

export type ComponentNavigationsDropdown = {
  __typename?: "ComponentNavigationsDropdown";
  id: Scalars["ID"];
  nestedLinks?: Maybe<Array<Maybe<ComponentNavigationsCategoryLink>>>;
  page?: Maybe<PageEntityResponse>;
};

export type ComponentNavigationsDropdownNestedLinksArgs = {
  filters?: InputMaybe<ComponentNavigationsCategoryLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentNavigationsPageLink = {
  __typename?: "ComponentNavigationsPageLink";
  id: Scalars["ID"];
  page?: Maybe<PageEntityResponse>;
};

export type ComponentNavigationsSocialLink = {
  __typename?: "ComponentNavigationsSocialLink";
  icon?: Maybe<Enum_Componentnavigationssociallink_Icon>;
  id: Scalars["ID"];
  url?: Maybe<Scalars["String"]>;
};

export type ComponentNavigationsSocialLinkFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentNavigationsSocialLinkFiltersInput>>
  >;
  icon?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentNavigationsSocialLinkFiltersInput>;
  or?: InputMaybe<
    Array<InputMaybe<ComponentNavigationsSocialLinkFiltersInput>>
  >;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentNavigationsSocialLinkInput = {
  icon?: InputMaybe<Enum_Componentnavigationssociallink_Icon>;
  id?: InputMaybe<Scalars["ID"]>;
  url?: InputMaybe<Scalars["String"]>;
};

export type ComponentSectionsFaqOne = {
  __typename?: "ComponentSectionsFaqOne";
  id: Scalars["ID"];
  paragraphs?: Maybe<Array<Maybe<ComponentBlocksParagraph>>>;
  subTitle?: Maybe<Scalars["String"]>;
  theme?: Maybe<ComponentSharedTheme>;
  title?: Maybe<Scalars["String"]>;
};

export type ComponentSectionsFaqOneParagraphsArgs = {
  filters?: InputMaybe<ComponentBlocksParagraphFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentSectionsFeaturesWithImage = {
  __typename?: "ComponentSectionsFeaturesWithImage";
  CTA?: Maybe<Array<Maybe<ComponentBlocksCta>>>;
  align?: Maybe<ComponentSharedAlign>;
  id: Scalars["ID"];
  image?: Maybe<UploadFileEntityResponse>;
  paragraphs?: Maybe<Array<Maybe<ComponentBlocksParagraph>>>;
  subTitle?: Maybe<Scalars["String"]>;
  theme?: Maybe<ComponentSharedTheme>;
  title?: Maybe<Scalars["String"]>;
};

export type ComponentSectionsFeaturesWithImageCtaArgs = {
  filters?: InputMaybe<ComponentBlocksCtaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentSectionsFeaturesWithImageParagraphsArgs = {
  filters?: InputMaybe<ComponentBlocksParagraphFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentSectionsFloatingCta = {
  __typename?: "ComponentSectionsFloatingCta";
  CTA?: Maybe<Array<Maybe<ComponentBlocksCta>>>;
  id: Scalars["ID"];
};

export type ComponentSectionsFloatingCtaCtaArgs = {
  filters?: InputMaybe<ComponentBlocksCtaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentSectionsFooterCta = {
  __typename?: "ComponentSectionsFooterCta";
  CTA?: Maybe<Array<Maybe<ComponentBlocksCta>>>;
  align?: Maybe<ComponentSharedAlign>;
  id: Scalars["ID"];
  image?: Maybe<UploadFileEntityResponse>;
  subTitle?: Maybe<Scalars["String"]>;
  theme?: Maybe<ComponentSharedTheme>;
  title?: Maybe<Scalars["String"]>;
};

export type ComponentSectionsFooterCtaCtaArgs = {
  filters?: InputMaybe<ComponentBlocksCtaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentSectionsHeroFive = {
  __typename?: "ComponentSectionsHeroFive";
  CTA?: Maybe<Array<Maybe<ComponentBlocksCta>>>;
  align?: Maybe<ComponentSharedAlign>;
  id: Scalars["ID"];
  image?: Maybe<UploadFileEntityResponse>;
  subTitle?: Maybe<Scalars["String"]>;
  theme?: Maybe<ComponentSharedTheme>;
  title?: Maybe<Scalars["String"]>;
};

export type ComponentSectionsHeroFiveCtaArgs = {
  filters?: InputMaybe<ComponentBlocksCtaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentSectionsInstallmentCalculator = {
  __typename?: "ComponentSectionsInstallmentCalculator";
  id: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
};

export type ComponentSectionsRichText = {
  __typename?: "ComponentSectionsRichText";
  content?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  theme?: Maybe<ComponentSharedTheme>;
  title?: Maybe<Scalars["String"]>;
};

export type ComponentSectionsSimpleHeader = {
  __typename?: "ComponentSectionsSimpleHeader";
  align?: Maybe<ComponentSharedAlign>;
  id: Scalars["ID"];
  paragraphs?: Maybe<Array<Maybe<ComponentBlocksParagraph>>>;
  subTitle?: Maybe<Scalars["String"]>;
  theme?: Maybe<ComponentSharedTheme>;
  title?: Maybe<Scalars["String"]>;
};

export type ComponentSectionsSimpleHeaderParagraphsArgs = {
  filters?: InputMaybe<ComponentBlocksParagraphFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentSectionsSimpleText = {
  __typename?: "ComponentSectionsSimpleText";
  id: Scalars["ID"];
  paragraphs?: Maybe<Array<Maybe<ComponentBlocksParagraph>>>;
  subTitle?: Maybe<Scalars["String"]>;
  theme?: Maybe<ComponentSharedTheme>;
  title?: Maybe<Scalars["String"]>;
};

export type ComponentSectionsSimpleTextParagraphsArgs = {
  filters?: InputMaybe<ComponentBlocksParagraphFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentSectionsTestimonialsOne = {
  __typename?: "ComponentSectionsTestimonialsOne";
  align?: Maybe<ComponentSharedAlign>;
  id: Scalars["ID"];
  paragraphs?: Maybe<Array<Maybe<ComponentBlocksParagraph>>>;
  subTitle?: Maybe<Scalars["String"]>;
  theme?: Maybe<ComponentSharedTheme>;
  title?: Maybe<Scalars["String"]>;
};

export type ComponentSectionsTestimonialsOneParagraphsArgs = {
  filters?: InputMaybe<ComponentBlocksParagraphFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentSectionsTextWithImage = {
  __typename?: "ComponentSectionsTextWithImage";
  id: Scalars["ID"];
  image?: Maybe<UploadFileEntityResponse>;
  paragraphs?: Maybe<Array<Maybe<ComponentBlocksParagraph>>>;
  subTitle?: Maybe<Scalars["String"]>;
  theme?: Maybe<ComponentSharedTheme>;
  title?: Maybe<Scalars["String"]>;
};

export type ComponentSectionsTextWithImageParagraphsArgs = {
  filters?: InputMaybe<ComponentBlocksParagraphFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentSectionsWorkProcessFour = {
  __typename?: "ComponentSectionsWorkProcessFour";
  id: Scalars["ID"];
  image?: Maybe<UploadFileEntityResponse>;
  paragraphs?: Maybe<Array<Maybe<ComponentBlocksParagraph>>>;
  subTitle?: Maybe<Scalars["String"]>;
  theme?: Maybe<ComponentSharedTheme>;
  title?: Maybe<Scalars["String"]>;
};

export type ComponentSectionsWorkProcessFourParagraphsArgs = {
  filters?: InputMaybe<ComponentBlocksParagraphFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentSectionsWorkProcessTwo = {
  __typename?: "ComponentSectionsWorkProcessTwo";
  id: Scalars["ID"];
  paragraphs?: Maybe<Array<Maybe<ComponentBlocksParagraph>>>;
  subTitle?: Maybe<Scalars["String"]>;
  theme?: Maybe<ComponentSharedTheme>;
  title?: Maybe<Scalars["String"]>;
};

export type ComponentSectionsWorkProcessTwoParagraphsArgs = {
  filters?: InputMaybe<ComponentBlocksParagraphFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentSharedAlign = {
  __typename?: "ComponentSharedAlign";
  id: Scalars["ID"];
  textAlign?: Maybe<Enum_Componentsharedalign_Textalign>;
};

export type ComponentSharedLanguages = {
  __typename?: "ComponentSharedLanguages";
  countryCode?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  localeId?: Maybe<Scalars["String"]>;
};

export type ComponentSharedLanguagesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedLanguagesFiltersInput>>>;
  countryCode?: InputMaybe<StringFilterInput>;
  displayName?: InputMaybe<StringFilterInput>;
  localeId?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedLanguagesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedLanguagesFiltersInput>>>;
};

export type ComponentSharedLanguagesInput = {
  countryCode?: InputMaybe<Scalars["String"]>;
  displayName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  localeId?: InputMaybe<Scalars["String"]>;
};

export type ComponentSharedMetaOpenGraph = {
  __typename?: "ComponentSharedMetaOpenGraph";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  imageHeight?: Maybe<Scalars["Int"]>;
  imageWidth?: Maybe<Scalars["Int"]>;
  siteName?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type ComponentSharedMetaOpenGraphInput = {
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  imageHeight?: InputMaybe<Scalars["Int"]>;
  imageWidth?: InputMaybe<Scalars["Int"]>;
  siteName?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
};

export type ComponentSharedMetaTwitter = {
  __typename?: "ComponentSharedMetaTwitter";
  cardType?: Maybe<Scalars["String"]>;
  handle?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  site?: Maybe<Scalars["String"]>;
};

export type ComponentSharedMetaTwitterInput = {
  cardType?: InputMaybe<Scalars["String"]>;
  handle?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  site?: InputMaybe<Scalars["String"]>;
};

export type ComponentSharedSeo = {
  __typename?: "ComponentSharedSeo";
  canonicalURL?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  keywords?: Maybe<Scalars["String"]>;
  metaDescription: Scalars["String"];
  metaImage: UploadFileEntityResponse;
  metaRobots?: Maybe<Scalars["String"]>;
  metaTitle: Scalars["String"];
  metaViewport?: Maybe<Scalars["String"]>;
  openGraph?: Maybe<ComponentSharedMetaOpenGraph>;
  structuredData?: Maybe<Scalars["JSON"]>;
  twitter?: Maybe<ComponentSharedMetaTwitter>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  keywords?: InputMaybe<Scalars["String"]>;
  metaDescription?: InputMaybe<Scalars["String"]>;
  metaImage?: InputMaybe<Scalars["ID"]>;
  metaRobots?: InputMaybe<Scalars["String"]>;
  metaTitle?: InputMaybe<Scalars["String"]>;
  metaViewport?: InputMaybe<Scalars["String"]>;
  openGraph?: InputMaybe<ComponentSharedMetaOpenGraphInput>;
  structuredData?: InputMaybe<Scalars["JSON"]>;
  twitter?: InputMaybe<ComponentSharedMetaTwitterInput>;
};

export type ComponentSharedTheme = {
  __typename?: "ComponentSharedTheme";
  background: Enum_Componentsharedtheme_Background;
  id: Scalars["ID"];
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  contains?: InputMaybe<Scalars["DateTime"]>;
  containsi?: InputMaybe<Scalars["DateTime"]>;
  endsWith?: InputMaybe<Scalars["DateTime"]>;
  eq?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  ne?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars["DateTime"]>;
  notContainsi?: InputMaybe<Scalars["DateTime"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  startsWith?: InputMaybe<Scalars["DateTime"]>;
};

export enum Enum_Componentblockscta_Type {
  CompareRates = "COMPARE_RATES",
  CreateAccount = "CREATE_ACCOUNT",
  LearningCenter = "LEARNING_CENTER",
  Subscribe = "SUBSCRIBE",
}

export enum Enum_Componentblocksparagraph_Icon {
  BookUser = "BOOK_USER",
  Checkmark = "CHECKMARK",
  Comments = "COMMENTS",
  Desktop = "DESKTOP",
  FaceViewfinder = "FACE_VIEWFINDER",
  FileCertificate = "FILE_CERTIFICATE",
  Globe = "GLOBE",
  Hourglass = "HOURGLASS",
  House = "HOUSE",
  HouseHeart = "HOUSE_HEART",
  HouseLaptop = "HOUSE_LAPTOP",
  HouseTwo = "HOUSE_TWO",
  HouseUser = "HOUSE_USER",
  Laptop = "LAPTOP",
  Lightbulb = "LIGHTBULB",
  ListCheck = "LIST_CHECK",
  MagnifyingGlassLocation = "MAGNIFYING_GLASS_LOCATION",
  MoneyBills = "MONEY_BILLS",
  PiggyBank = "PIGGY_BANK",
  Signature = "SIGNATURE",
  SignPost = "SIGN_POST",
  Smile = "SMILE",
  SteeringWheel = "STEERING_WHEEL",
  ThumbsUp = "THUMBS_UP",
  User = "USER",
}

export enum Enum_Componentnavigationscategorylink_Icon {
  BookUser = "BOOK_USER",
  Checkmark = "CHECKMARK",
  Comments = "COMMENTS",
  Desktop = "DESKTOP",
  FaceViewfinder = "FACE_VIEWFINDER",
  FileCertificate = "FILE_CERTIFICATE",
  Globe = "GLOBE",
  Hourglass = "HOURGLASS",
  House = "HOUSE",
  HouseHeart = "HOUSE_HEART",
  HouseLaptop = "HOUSE_LAPTOP",
  HouseTwo = "HOUSE_TWO",
  HouseUser = "HOUSE_USER",
  Laptop = "LAPTOP",
  Lightbulb = "LIGHTBULB",
  ListCheck = "LIST_CHECK",
  MagnifyingGlassLocation = "MAGNIFYING_GLASS_LOCATION",
  MoneyBills = "MONEY_BILLS",
  PiggyBank = "PIGGY_BANK",
  Signature = "SIGNATURE",
  SignPost = "SIGN_POST",
  Smile = "SMILE",
  SteeringWheel = "STEERING_WHEEL",
  ThumbsUp = "THUMBS_UP",
  User = "USER",
}

export enum Enum_Componentnavigationscategorylink_Variant {
  Default = "DEFAULT",
  Primary = "PRIMARY",
  ViewAll = "VIEW_ALL",
}

export enum Enum_Componentnavigationssociallink_Icon {
  Facebook = "FACEBOOK",
  Instagram = "INSTAGRAM",
  Linkedin = "LINKEDIN",
  Twitter = "TWITTER",
  Youtube = "YOUTUBE",
}

export enum Enum_Componentsharedalign_Textalign {
  Center = "CENTER",
  Left = "LEFT",
  Right = "RIGHT",
}

export enum Enum_Componentsharedtheme_Background {
  AlternativeOne = "ALTERNATIVE_ONE",
  AlternativeTwo = "ALTERNATIVE_TWO",
  Dark = "DARK",
  DarkSoft = "DARK_SOFT",
  Light = "LIGHT",
  White = "WHITE",
}

export type Error = {
  __typename?: "Error";
  code: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  contains?: InputMaybe<Scalars["Float"]>;
  containsi?: InputMaybe<Scalars["Float"]>;
  endsWith?: InputMaybe<Scalars["Float"]>;
  eq?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  ne?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars["Float"]>;
  notContainsi?: InputMaybe<Scalars["Float"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  startsWith?: InputMaybe<Scalars["Float"]>;
};

export type Footer = {
  __typename?: "Footer";
  copyrightText?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  links?: Maybe<Array<Maybe<FooterLinksDynamicZone>>>;
  socialLinks?: Maybe<Array<Maybe<ComponentNavigationsSocialLink>>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type FooterSocialLinksArgs = {
  filters?: InputMaybe<ComponentNavigationsSocialLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type FooterEntity = {
  __typename?: "FooterEntity";
  attributes?: Maybe<Footer>;
  id?: Maybe<Scalars["ID"]>;
};

export type FooterEntityResponse = {
  __typename?: "FooterEntityResponse";
  data?: Maybe<FooterEntity>;
};

export type FooterInput = {
  copyrightText?: InputMaybe<Scalars["String"]>;
  links?: InputMaybe<Array<Scalars["FooterLinksDynamicZoneInput"]>>;
  socialLinks?: InputMaybe<
    Array<InputMaybe<ComponentNavigationsSocialLinkInput>>
  >;
};

export type FooterLinksDynamicZone = ComponentNavigationsPageLink | Error;

export type GenericMorph =
  | Article
  | Category
  | ComponentBlocksCta
  | ComponentBlocksParagraph
  | ComponentNavigationsCategoryLink
  | ComponentNavigationsCookieModalLink
  | ComponentNavigationsDropdown
  | ComponentNavigationsPageLink
  | ComponentNavigationsSocialLink
  | ComponentSectionsFaqOne
  | ComponentSectionsFeaturesWithImage
  | ComponentSectionsFloatingCta
  | ComponentSectionsFooterCta
  | ComponentSectionsHeroFive
  | ComponentSectionsInstallmentCalculator
  | ComponentSectionsRichText
  | ComponentSectionsSimpleHeader
  | ComponentSectionsSimpleText
  | ComponentSectionsTestimonialsOne
  | ComponentSectionsTextWithImage
  | ComponentSectionsWorkProcessFour
  | ComponentSectionsWorkProcessTwo
  | ComponentSharedAlign
  | ComponentSharedLanguages
  | ComponentSharedMetaOpenGraph
  | ComponentSharedMetaTwitter
  | ComponentSharedSeo
  | ComponentSharedTheme
  | Footer
  | Global
  | I18NLocale
  | Navbar
  | Page
  | UploadFile
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

export type Global = {
  __typename?: "Global";
  cookieModalLinks?: Maybe<Array<Maybe<ComponentNavigationsCookieModalLink>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  inverseLogo?: Maybe<UploadFileEntityResponse>;
  languages?: Maybe<Array<Maybe<ComponentSharedLanguages>>>;
  logo?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type GlobalCookieModalLinksArgs = {
  filters?: InputMaybe<ComponentNavigationsCookieModalLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type GlobalLanguagesArgs = {
  filters?: InputMaybe<ComponentSharedLanguagesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type GlobalEntity = {
  __typename?: "GlobalEntity";
  attributes?: Maybe<Global>;
  id?: Maybe<Scalars["ID"]>;
};

export type GlobalEntityResponse = {
  __typename?: "GlobalEntityResponse";
  data?: Maybe<GlobalEntity>;
};

export type GlobalInput = {
  cookieModalLinks?: InputMaybe<
    Array<InputMaybe<ComponentNavigationsCookieModalLinkInput>>
  >;
  inverseLogo?: InputMaybe<Scalars["ID"]>;
  languages?: InputMaybe<Array<InputMaybe<ComponentSharedLanguagesInput>>>;
  logo?: InputMaybe<Scalars["ID"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type I18NLocale = {
  __typename?: "I18NLocale";
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type I18NLocaleEntity = {
  __typename?: "I18NLocaleEntity";
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars["ID"]>;
};

export type I18NLocaleEntityResponse = {
  __typename?: "I18NLocaleEntityResponse";
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: "I18NLocaleEntityResponseCollection";
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contains?: InputMaybe<Scalars["ID"]>;
  containsi?: InputMaybe<Scalars["ID"]>;
  endsWith?: InputMaybe<Scalars["ID"]>;
  eq?: InputMaybe<Scalars["ID"]>;
  gt?: InputMaybe<Scalars["ID"]>;
  gte?: InputMaybe<Scalars["ID"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  lt?: InputMaybe<Scalars["ID"]>;
  lte?: InputMaybe<Scalars["ID"]>;
  ne?: InputMaybe<Scalars["ID"]>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars["ID"]>;
  notContainsi?: InputMaybe<Scalars["ID"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  startsWith?: InputMaybe<Scalars["ID"]>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  contains?: InputMaybe<Scalars["Int"]>;
  containsi?: InputMaybe<Scalars["Int"]>;
  endsWith?: InputMaybe<Scalars["Int"]>;
  eq?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  ne?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars["Int"]>;
  notContainsi?: InputMaybe<Scalars["Int"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  startsWith?: InputMaybe<Scalars["Int"]>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  contains?: InputMaybe<Scalars["JSON"]>;
  containsi?: InputMaybe<Scalars["JSON"]>;
  endsWith?: InputMaybe<Scalars["JSON"]>;
  eq?: InputMaybe<Scalars["JSON"]>;
  gt?: InputMaybe<Scalars["JSON"]>;
  gte?: InputMaybe<Scalars["JSON"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  lt?: InputMaybe<Scalars["JSON"]>;
  lte?: InputMaybe<Scalars["JSON"]>;
  ne?: InputMaybe<Scalars["JSON"]>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars["JSON"]>;
  notContainsi?: InputMaybe<Scalars["JSON"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  startsWith?: InputMaybe<Scalars["JSON"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createArticle?: Maybe<ArticleEntityResponse>;
  createArticleLocalization?: Maybe<ArticleEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createCategoryLocalization?: Maybe<CategoryEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  createPageLocalization?: Maybe<PageEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteGlobal?: Maybe<GlobalEntityResponse>;
  deleteNavbar?: Maybe<NavbarEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateArticle?: Maybe<ArticleEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateGlobal?: Maybe<GlobalEntityResponse>;
  updateNavbar?: Maybe<NavbarEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};

export type MutationCreateArticleArgs = {
  data: ArticleInput;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationCreateArticleLocalizationArgs = {
  data?: InputMaybe<ArticleInput>;
  id?: InputMaybe<Scalars["ID"]>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationCreateCategoryLocalizationArgs = {
  data?: InputMaybe<CategoryInput>;
  id?: InputMaybe<Scalars["ID"]>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationCreatePageArgs = {
  data: PageInput;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationCreatePageLocalizationArgs = {
  data?: InputMaybe<PageInput>;
  id?: InputMaybe<Scalars["ID"]>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationDeleteArticleArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationDeleteCategoryArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationDeletePageArgs = {
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"];
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars["String"]>;
  files: Array<InputMaybe<Scalars["Upload"]>>;
  ref?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["ID"]>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
  id: Scalars["ID"];
};

export type MutationResetPasswordArgs = {
  code: Scalars["String"];
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
};

export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateFooterArgs = {
  data: FooterInput;
};

export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
};

export type MutationUpdateNavbarArgs = {
  data: NavbarInput;
};

export type MutationUpdatePageArgs = {
  data: PageInput;
  id: Scalars["ID"];
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars["ID"];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars["ID"];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars["ID"];
};

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars["String"]>;
  file: Scalars["Upload"];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["ID"]>;
};

export type Navbar = {
  __typename?: "Navbar";
  createdAt?: Maybe<Scalars["DateTime"]>;
  links?: Maybe<Array<Maybe<NavbarLinksDynamicZone>>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type NavbarEntity = {
  __typename?: "NavbarEntity";
  attributes?: Maybe<Navbar>;
  id?: Maybe<Scalars["ID"]>;
};

export type NavbarEntityResponse = {
  __typename?: "NavbarEntityResponse";
  data?: Maybe<NavbarEntity>;
};

export type NavbarInput = {
  links?: InputMaybe<Array<Scalars["NavbarLinksDynamicZoneInput"]>>;
};

export type NavbarLinksDynamicZone =
  | ComponentNavigationsDropdown
  | ComponentNavigationsPageLink
  | Error;

export type Page = {
  __typename?: "Page";
  contentSections?: Maybe<Array<Maybe<PageContentSectionsDynamicZone>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  locale?: Maybe<Scalars["String"]>;
  localizations?: Maybe<PageRelationResponseCollection>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  seo?: Maybe<ComponentSharedSeo>;
  slug?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PageLocalizationsArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type PageContentSectionsDynamicZone =
  | ComponentSectionsFaqOne
  | ComponentSectionsFeaturesWithImage
  | ComponentSectionsFloatingCta
  | ComponentSectionsFooterCta
  | ComponentSectionsHeroFive
  | ComponentSectionsInstallmentCalculator
  | ComponentSectionsRichText
  | ComponentSectionsSimpleHeader
  | ComponentSectionsSimpleText
  | ComponentSectionsTestimonialsOne
  | ComponentSectionsTextWithImage
  | ComponentSectionsWorkProcessFour
  | ComponentSectionsWorkProcessTwo
  | Error;

export type PageEntity = {
  __typename?: "PageEntity";
  attributes?: Maybe<Page>;
  id?: Maybe<Scalars["ID"]>;
};

export type PageEntityResponse = {
  __typename?: "PageEntityResponse";
  data?: Maybe<PageEntity>;
};

export type PageEntityResponseCollection = {
  __typename?: "PageEntityResponseCollection";
  data: Array<PageEntity>;
  meta: ResponseCollectionMeta;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  comment?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<PageFiltersInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  comment?: InputMaybe<Scalars["String"]>;
  contentSections?: InputMaybe<
    Array<Scalars["PageContentSectionsDynamicZoneInput"]>
  >;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  slug?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type PageRelationResponseCollection = {
  __typename?: "PageRelationResponseCollection";
  data: Array<PageEntity>;
};

export type Pagination = {
  __typename?: "Pagination";
  page: Scalars["Int"];
  pageCount: Scalars["Int"];
  pageSize: Scalars["Int"];
  total: Scalars["Int"];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
  start?: InputMaybe<Scalars["Int"]>;
};

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

export type Query = {
  __typename?: "Query";
  article?: Maybe<ArticleEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  footer?: Maybe<FooterEntityResponse>;
  global?: Maybe<GlobalEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  navbar?: Maybe<NavbarEntityResponse>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryArticleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type QueryGlobalArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryPageArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
};

export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  locale?: InputMaybe<Scalars["I18NLocaleCode"]>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ResponseCollectionMeta = {
  __typename?: "ResponseCollectionMeta";
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contains?: InputMaybe<Scalars["String"]>;
  containsi?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  eq?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  ne?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars["String"]>;
  notContainsi?: InputMaybe<Scalars["String"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type UploadFile = {
  __typename?: "UploadFile";
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  ext?: Maybe<Scalars["String"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  height?: Maybe<Scalars["Int"]>;
  mime: Scalars["String"];
  name: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars["Float"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  url: Scalars["String"];
  width?: Maybe<Scalars["Int"]>;
};

export type UploadFileEntity = {
  __typename?: "UploadFileEntity";
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars["ID"]>;
};

export type UploadFileEntityResponse = {
  __typename?: "UploadFileEntityResponse";
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: "UploadFileEntityResponseCollection";
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  ext?: InputMaybe<Scalars["String"]>;
  formats?: InputMaybe<Scalars["JSON"]>;
  hash?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Int"]>;
  mime?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  previewUrl?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  provider_metadata?: InputMaybe<Scalars["JSON"]>;
  size?: InputMaybe<Scalars["Float"]>;
  url?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: "UsersPermissionsCreateRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: "UsersPermissionsDeleteRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"];
  password: Scalars["String"];
  provider?: Scalars["String"];
};

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars["String"];
};

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  type?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: "UsersPermissionsPasswordPayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  action: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: "UsersPermissionsPermissionEntity";
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: "UsersPermissionsPermissionRelationResponseCollection";
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: "UsersPermissionsRoleEntity";
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: "UsersPermissionsRoleEntityResponse";
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: "UsersPermissionsRoleEntityResponseCollection";
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  type?: InputMaybe<Scalars["String"]>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: "UsersPermissionsUpdateRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  articles?: Maybe<ArticleRelationResponseCollection>;
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  job: Scalars["String"];
  picture?: Maybe<UploadFileEntityResponse>;
  provider?: Maybe<Scalars["String"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  username: Scalars["String"];
};

export type UsersPermissionsUserArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: "UsersPermissionsUserEntity";
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: "UsersPermissionsUserEntityResponse";
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: "UsersPermissionsUserEntityResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  job?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  blocked?: InputMaybe<Scalars["Boolean"]>;
  confirmationToken?: InputMaybe<Scalars["String"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]>;
  email?: InputMaybe<Scalars["String"]>;
  job?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  picture?: InputMaybe<Scalars["ID"]>;
  provider?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["ID"]>;
  username?: InputMaybe<Scalars["String"]>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: "UsersPermissionsUserRelationResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
};
