"use client";
import { Tab } from "@headlessui/react";
import CalandarTypeBHeader from "../calandar/CalandarTypeBHeader";
import CalandarTypeB from "../calandar/CalandarTypeB";
import CalandarTypeBB from "../calandar/CalandarTypeBB";

const RealEstateSearch = () => {
  return (
    <div>
      <CalandarTypeBHeader />
      <Tab.Group>
        <div className="mt-5">
          <Tab.List>
            <Tab className={`text-lg py-2.5 px-5 border rounded-lg mr-1`}>
              공급유형
            </Tab>
            <Tab className={`text-lg py-2.5 px-5 border rounded-lg mr-1`}>
              공급지역
            </Tab>
          </Tab.List>
          <div className="my-2.5">
            <p className="text-lg tracking-tighter">
              · 일정을 확인하고 싶은 공급유형을 선택해주세요.
            </p>
          </div>
          <Tab.Panels>
            <Tab.Panel>
              <CalandarTypeB />
            </Tab.Panel>
            <Tab.Panel>
              <CalandarTypeBB />
            </Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
};

export default RealEstateSearch;
