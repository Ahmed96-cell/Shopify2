// import { Frame, Navigation } from "@shopify/polaris";
// import { HomeMinor, OrdersMinor, ProductsMinor } from "@shopify/polaris-icons";
// import React from "react";

// function NavigationExample() {
//   return (
//     <Frame>
//       <Navigation location="/">
//         <Navigation.Section
//           items={[
//             {
//               url: "#",
//               label: "Home",
//               icon: HomeMinor,
//             },
//             {
//               url: "#",
//               excludePaths: ["#"],
//               label: "Orders",
//               icon: OrdersMinor,
//               badge: "15",
//             },
//             {
//               url: "#",
//               excludePaths: ["#"],
//               label: "Products",
//               icon: ProductsMinor,
//             },
//           ]}
//         />
//       </Navigation>
//     </Frame>
//   );
// }

// export default NavigationExample;

import { Frame, Navigation } from "@shopify/polaris";
import {
  HomeMinor,
  OrdersMinor,
  CirclePlusOutlineMinor,
  ProductsMinor,
  CustomersMinor,
  MarketingMinor,
  OnlineStoreMinor,
  ViewMinor,
} from "@shopify/polaris-icons";
import React, { useState } from "react";
import {
  ProductsMajor,
  CustomersMajor,
  ContentMinor,
  AnalyticsMinor,
  MarketingMajor,
  DiscountsMajor,
  StoreMajor,
  ChevronRightMinor,
} from "@shopify/polaris-icons";
function NavigationExample() {
  const location = typeof window !== "undefined" ? window.location.href : "";

  const [isopen1, setisopen1] = useState(false);

  const [isopen2, setisopen2] = useState(false);

  const [isopen3, setisopen3] = useState(false);

  const [isopen4, setisopen4] = useState(false);

  const [isopen5, setisopen5] = useState(false);

  const [isopen6, setisopen6] = useState(false);

  const opens1 = () => {
    setisopen1(!isopen1);
    setisopen2(false);
    setisopen3(false);
    setisopen5(false);
    setisopen6(false);
    setisopen4(false);
  };

  const opens2 = () => {
    setisopen1(false);
    setisopen2(!isopen2);
    setisopen3(false);
    setisopen5(false);
    setisopen6(false);
    setisopen4(false);
  };

  const opens3 = () => {
    setisopen3(!isopen3);
    setisopen1(false);
    setisopen2(false);
    setisopen4(false);
    setisopen5(false);
    setisopen6(false);
  };

  const opens4 = () => {
    setisopen1(false);
    setisopen2(false);
    setisopen3(false);
    setisopen4(!isopen4);
    setisopen5(false);
    setisopen6(false);
  };

  const opens5 = () => {
    setisopen1(false);
    setisopen2(false);
    setisopen3(false);
    setisopen4(false);
    setisopen5(!isopen5);
    setisopen6(false);
  };

  const opens6 = () => {
    setisopen1(false);
    setisopen2(false);
    setisopen3(false);
    setisopen4(false);
    setisopen5(false);
    setisopen6(!isopen6);
  };

  return (
    <Frame>
      <Navigation location="/">
        <Navigation.Section
          items={[
            {
              url: "#",
              excludePaths: ["#"],
              label: "Home",
              icon: HomeMinor,
            },
            {
              url: "#",

              label: "Orders",
              icon: OrdersMinor,

              subNavigationItems: [
                {
                  url: location,
                  disabled: false,
                  label: "Drafts",
                },
                {
                  url: "#",
                  excludePaths: ["#"],
                  disabled: false,
                  label: "Abandoned checkouts",
                },
              ],
            },

            {
              url: "#",

              label: "Product",
              icon: ProductsMajor,
              subNavigationItems: [
                {
                  url: location,
                  disabled: false,
                  label: "Collections",
                },
                {
                  url: "#",
                  excludePaths: ["#"],
                  disabled: false,
                  label: "Inventory",
                },
                {
                  url: "#",
                  excludePaths: ["#"],
                  disabled: false,
                  label: "Purchase orders",
                },
                {
                  url: "#",
                  excludePaths: ["#"],
                  disabled: false,
                  label: "Transfers",
                },
                {
                  url: "#",
                  excludePaths: ["#"],
                  disabled: false,
                  label: "Gift cards",
                },
              ],
            },
            {
              url: "#",
              label: "Customers",

              icon: CustomersMajor,
              subNavigationItems: [
                {
                  url: location,
                  // disabled: false,
                  label: "segments",
                },
              ],
            },
            {
              url: "#",

              label: "Content",
              // badge: "Old",
              icon: ContentMinor,
              subNavigationItems: [
                {
                  url: location,
                  // disabled: false,
                  label: "Metaobjects",
                },
                {
                  url: location,
                  // disabled: false,
                  label: "Files",
                },
              ],
            },
            {
              url: "#",
              label: "Analytics",
              icon: AnalyticsMinor,
              selected: true,
              subNavigationItems: [
                {
                  url: location,
                  // disabled: false,
                  label: "Reports",
                },
                {
                  url: location,
                  // disabled: false,
                  label: "Live View",
                },
              ],
            },

            {
              url: location,
              label: "Marketing",
              icon: MarketingMajor,
              selected: true,
              subNavigationItems: [
                {
                  url: location,
                  // disabled: false,
                  label: "Campaigns",
                },
                {
                  url: location,
                  // disabled: false,
                  label: "Automations",
                },
              ],
              // subNavigationItems: [
              //   {
              //     url: location,
              //     disabled: false,
              //     label: "Selected sub item",
              //   },
              //   {
              //     url: "#",
              //     excludePaths: ["#"],
              //     disabled: false,
              //     label: "Default sub item",
              //   },
              //   {
              //     url: "#",
              //     excludePaths: ["#"],
              //     disabled: true,
              //     label: "Disabled sub item",
              //   },
              // ],
            },
            {
              url: "#",
              excludePaths: ["#"],
              label: "Discounts",
              icon: DiscountsMajor,
              disabled: false,
            },
            // {
            //   url: "#",
            //   label: "Overflow item",
            //   icon: MarketingMinor,
            // },
          ]}
          // rollup={{
          //   after: 7,
          //   view: "view",
          //   hide: "hide",
          //   activePath: "/",
          // }}
        />
        <Navigation.Section
          title="Sales channels"
          items={[
            {
              url: "#",
              excludePaths: ["#"],
              icon: StoreMajor,
              label: "Icon as svg",
              secondaryAction: {
                icon: ViewMinor,
              },
            },

            {
              url: "#",
              excludePaths: ["#"],
              label: "Other secondary action",
              // icon: ,
              secondaryAction: {
                url: "#",
                accessibilityLabel: "View your online store",

                tooltip: {
                  content: "View your online store",
                },
              },
            },
          ]}
          action={{
            accessibilityLabel: "Add sales channel",
            icon: ChevronRightMinor,
            onClick: () => {},
          }}
          separator
        />
      </Navigation>
    </Frame>
  );
}

export default NavigationExample;
