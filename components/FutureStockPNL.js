"use client";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import InputBoxRange from "./InputBoxRange";

const FutureStockPNL = () => {
  return (
    <div className="tab-card mt-4">
      <Tab.Group>
        <Tab.List className={`grid grid-cols-2 gap-0.5`}>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? "tab__rounded-none tab__blue rounded-l"
                    : "tab__gray--light rounded-l"
                }
              >
                Long
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? "tab__rounded-none tab__blue rounded-r"
                    : "tab__gray--light rounded-r"
                }
              >
                Short
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className={`mt-3`}>
          <Tab.Panel>
            <InputBoxRange />
          </Tab.Panel>
          <Tab.Panel>
            <InputBoxRange />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default FutureStockPNL;
