import React from "react";
import LearningCenterPageHeader from "../components/sections/LearningCenterPageHeader";
import CreateTemplate from "./CreateTemplate";

export default {
  title: "Components/Learning Center Page Header",
  component: LearningCenterPageHeader,
};

const Template = (args) => (
  <CreateTemplate>
    <LearningCenterPageHeader {...args} />
  </CreateTemplate>
);

export const LearningCenterPageHeaderExample = Template.bind();

LearningCenterPageHeaderExample.args = {
  categories: [
    {
      attributes: {
        title: "Rent Or Buy",
        slug: "rent-or-buy",
        seo: null,
        articles: {
          data: [],
        },
      },
    },
    {
      attributes: {
        title: "Refinancing",
        slug: "refinancing",
        seo: null,
        articles: {
          data: [],
        },
      },
    },
    {
      attributes: {
        title: "Equitygap",
        slug: "equitygap",
        seo: null,
        articles: {
          data: [
            {
              attributes: {
                title: "How the bank decides what interest rate you ge",
                slug: "how-bank-decides",
                pinned: false,
                summary: null,
                image: {
                  __typename: "UploadFileEntityResponse",
                  data: {
                    id: "59",
                    attributes: {
                      url: "https://testweuswiftbrickappcdn.azureedge.net/cdn/assets/9fb0ed730d557a9939fa54cf3ed63384c62e685f77c00fbe42a42918692c5367_HUGE_e66d29ecbc.png",
                      name: "9fb0ed730d557a9939fa54cf3ed63384c62e685f77c00fbe42a42918692c5367_HUGE.png",
                      formats: {
                        small: {
                          ext: ".png",
                          url: "https://testweuswiftbrickappcdn.azureedge.net/cdn/assets/small_9fb0ed730d557a9939fa54cf3ed63384c62e685f77c00fbe42a42918692c5367_HUGE_e66d29ecbc.png",
                          hash: "small_9fb0ed730d557a9939fa54cf3ed63384c62e685f77c00fbe42a42918692c5367_HUGE_e66d29ecbc",
                          mime: "image/png",
                          name: "small_9fb0ed730d557a9939fa54cf3ed63384c62e685f77c00fbe42a42918692c5367_HUGE.png",
                          path: null,
                          size: 104.86,
                          width: 500,
                          height: 306,
                        },
                        medium: {
                          ext: ".png",
                          url: "https://testweuswiftbrickappcdn.azureedge.net/cdn/assets/medium_9fb0ed730d557a9939fa54cf3ed63384c62e685f77c00fbe42a42918692c5367_HUGE_e66d29ecbc.png",
                          hash: "medium_9fb0ed730d557a9939fa54cf3ed63384c62e685f77c00fbe42a42918692c5367_HUGE_e66d29ecbc",
                          mime: "image/png",
                          name: "medium_9fb0ed730d557a9939fa54cf3ed63384c62e685f77c00fbe42a42918692c5367_HUGE.png",
                          path: null,
                          size: 172.44,
                          width: 750,
                          height: 458,
                        },
                        thumbnail: {
                          ext: ".png",
                          url: "https://testweuswiftbrickappcdn.azureedge.net/cdn/assets/thumbnail_9fb0ed730d557a9939fa54cf3ed63384c62e685f77c00fbe42a42918692c5367_HUGE_e66d29ecbc.png",
                          hash: "thumbnail_9fb0ed730d557a9939fa54cf3ed63384c62e685f77c00fbe42a42918692c5367_HUGE_e66d29ecbc",
                          mime: "image/png",
                          name: "thumbnail_9fb0ed730d557a9939fa54cf3ed63384c62e685f77c00fbe42a42918692c5367_HUGE.png",
                          path: null,
                          size: 43.82,
                          width: 245,
                          height: 150,
                        },
                      },
                      alternativeText:
                        "9fb0ed730d557a9939fa54cf3ed63384c62e685f77c00fbe42a42918692c5367_HUGE.png",
                    },
                  },
                },
              },
            },
          ],
        },
      },
    },
  ],
};
