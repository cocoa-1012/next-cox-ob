export const HOME_ROUTE = "";
export const LEARNING_CENTER_ROUTE = `${HOME_ROUTE}/learning-center`;
export const LEARNING_CENTER_WITH_CATEGORY_ROUTE = `${LEARNING_CENTER_ROUTE}/:category`;
export const ARTICLE_PAGE_ROUTE = `${LEARNING_CENTER_WITH_CATEGORY_ROUTE}/:article`;
export const INFO_PAGES_ROUTE = `${HOME_ROUTE}/info/*`;
export const CALCULATOR_ROUTE = `${HOME_ROUTE}/calculator/:name`;
export const MY_ACCOUNT_ROUTE = `${HOME_ROUTE}/account`;

export const APPLICATION_PROCESS_ROUTE = `${HOME_ROUTE}/application-process`;
