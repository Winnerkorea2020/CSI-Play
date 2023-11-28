"use client";
import { TwitterList } from "@/constant";
import { Tab } from "@headlessui/react";

const page = () => {
  return (
    <div>
      <div className="grid grid-cols-10 gap-2  w-full">
        <Tab.Group defaultIndex={0}>
          <div className="grid grid-cols-1 gap-1 col-span-2">
            <div className="rounded-lg ">
              <div className="rounded-t-lg bg-gray-300 text-center py-2.5">
                Twitter
              </div>
              <Tab.List className={`grid grid-cols-1 `}>
                {TwitterList.map((name) => (
                  <Tab
                    key={name.id}
                    className={`border border-gray-300 py-2.5 text-center`}
                  >
                    {name.twitter}
                  </Tab>
                ))}
              </Tab.List>
            </div>
          </div>
          <Tab.Panels className={`col-span-8 border p-4 rounded-lg`}>
            {TwitterList.map((name) => (
              <Tab.Panel key={name.id}>
                <div className="px-2">
                  <h3 className="text-lg font-medium py-2">{name.twitter}</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="rounded-lg p-4 border">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, facere! Totam ut obcaecati dolores vel dolorem
                    laudantium neque asperiores corrupti deserunt voluptas.
                    Nesciunt accusamus libero recusandae temporibus officiis
                    fugiat veritatis!
                  </div>
                  <div className="rounded-lg p-4 border">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, facere! Totam ut obcaecati dolores vel dolorem
                    laudantium neque asperiores corrupti deserunt voluptas.
                    Nesciunt accusamus libero recusandae temporibus officiis
                    fugiat veritatis!
                  </div>
                  <div className="rounded-lg p-4 border">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, facere! Totam ut obcaecati dolores vel dolorem
                    laudantium neque asperiores corrupti deserunt voluptas.
                    Nesciunt accusamus libero recusandae temporibus officiis
                    fugiat veritatis!
                  </div>
                  <div className="rounded-lg p-4 border">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, facere! Totam ut obcaecati dolores vel dolorem
                    laudantium neque asperiores corrupti deserunt voluptas.
                    Nesciunt accusamus libero recusandae temporibus officiis
                    fugiat veritatis!
                  </div>
                  <div className="rounded-lg p-4 border">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, facere! Totam ut obcaecati dolores vel dolorem
                    laudantium neque asperiores corrupti deserunt voluptas.
                    Nesciunt accusamus libero recusandae temporibus officiis
                    fugiat veritatis!
                  </div>
                  <div className="rounded-lg p-4 border">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, facere! Totam ut obcaecati dolores vel dolorem
                    laudantium neque asperiores corrupti deserunt voluptas.
                    Nesciunt accusamus libero recusandae temporibus officiis
                    fugiat veritatis!
                  </div>
                  <div className="rounded-lg p-4 border">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, facere! Totam ut obcaecati dolores vel dolorem
                    laudantium neque asperiores corrupti deserunt voluptas.
                    Nesciunt accusamus libero recusandae temporibus officiis
                    fugiat veritatis!
                  </div>
                  <div className="rounded-lg p-4 border">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, facere! Totam ut obcaecati dolores vel dolorem
                    laudantium neque asperiores corrupti deserunt voluptas.
                    Nesciunt accusamus libero recusandae temporibus officiis
                    fugiat veritatis!
                  </div>
                  <div className="rounded-lg p-4 border">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, facere! Totam ut obcaecati dolores vel dolorem
                    laudantium neque asperiores corrupti deserunt voluptas.
                    Nesciunt accusamus libero recusandae temporibus officiis
                    fugiat veritatis!
                  </div>

                  <div className="rounded-lg p-4 border">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, facere! Totam ut obcaecati dolores vel dolorem
                    laudantium neque asperiores corrupti deserunt voluptas.
                    Nesciunt accusamus libero recusandae temporibus officiis
                    fugiat veritatis!
                  </div>
                  <div className="rounded-lg p-4 border">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore, facere! Totam ut obcaecati dolores vel dolorem
                    laudantium neque asperiores corrupti deserunt voluptas.
                    Nesciunt accusamus libero recusandae temporibus officiis
                    fugiat veritatis!
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
        <div className=""></div>
      </div>
    </div>
  );
};

export default page;
