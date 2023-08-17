"use client";

import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import BestCoint from "./BestCoint";
import BestExchange from "./BestExchange";
import BestFutures from "./BestFutures";

const BestCoinCurrency = () => {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" class="px-6 py-3">
              코인/거래금액
            </th>
            <th scope="col" class="px-6 py-3">
              거래금액
            </th>
            <th scope="col" class="px-6 py-3">
              시세(KRW)
            </th>
            <th scope="col" class="px-6 py-3">
              24시간 변동율
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-">
            <th class="px-6 py-4 whitespace-nowrap">
              <div class="inline-flex items-center">
                <img
                  src="./ico-bitcoin.svg"
                  alt=""
                  width="20px"
                  height="20px"
                />
                <span class="ml-1 text-sm">BitCoin</span>
                <span class="ml-1 text-sm font-thin">BTC/KRW</span>
              </div>
            </th>
            <td class="px-6 py-4 whitespace-nowrap">
              <span>8조 3,686억</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="text-red-500">38,452,000</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="">
                <button class="text-center px-2 py-0.5 bg-blue-500 text-white rounded w-16">
                  -0.03%
                </button>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-">
            <th class="px-6 py-4 whitespace-nowrap">
              <div class="inline-flex items-center">
                <img
                  src="./ico-bitcoin.svg"
                  alt=""
                  width="20px"
                  height="20px"
                />
                <span class="ml-1 text-sm">BitCoin</span>
                <span class="ml-1 text-sm font-thin">BTC/KRW</span>
              </div>
            </th>
            <td class="px-6 py-4 whitespace-nowrap">
              <span>8조 3,686억</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="text-red-500">38,452,000</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="">
                <button class="text-center px-2 py-0.5 bg-blue-500 text-white rounded w-16">
                  -0.03%
                </button>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-">
            <th class="px-6 py-4 whitespace-nowrap">
              <div class="inline-flex items-center">
                <img
                  src="./ico-bitcoin.svg"
                  alt=""
                  width="20px"
                  height="20px"
                />
                <span class="ml-1 text-sm">BitCoin</span>
                <span class="ml-1 text-sm font-thin">BTC/KRW</span>
              </div>
            </th>
            <td class="px-6 py-4 whitespace-nowrap">
              <span>8조 3,686억</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="text-red-500">38,452,000</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="">
                <button class="text-center px-2 py-0.5 bg-blue-500 text-white rounded w-16">
                  -0.03%
                </button>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-">
            <th class="px-6 py-4 whitespace-nowrap">
              <div class="inline-flex items-center">
                <img
                  src="./ico-bitcoin.svg"
                  alt=""
                  width="20px"
                  height="20px"
                />
                <span class="ml-1 text-sm">BitCoin</span>
                <span class="ml-1 text-sm font-thin">BTC/KRW</span>
              </div>
            </th>
            <td class="px-6 py-4 whitespace-nowrap">
              <span>8조 3,686억</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="text-red-500">38,452,000</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="">
                <button class="text-center px-2 py-0.5 bg-blue-500 text-white rounded w-16">
                  -0.03%
                </button>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-">
            <th class="px-6 py-4 whitespace-nowrap">
              <div class="inline-flex items-center">
                <img
                  src="./ico-bitcoin.svg"
                  alt=""
                  width="20px"
                  height="20px"
                />
                <span class="ml-1 text-sm">BitCoin</span>
                <span class="ml-1 text-sm font-thin">BTC/KRW</span>
              </div>
            </th>
            <td class="px-6 py-4 whitespace-nowrap">
              <span>8조 3,686억</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="text-red-500">38,452,000</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="">
                <button class="text-center px-2 py-0.5 bg-red-500 text-white rounded w-16">
                  1.5%
                </button>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-">
            <th class="px-6 py-4 whitespace-nowrap">
              <div class="inline-flex items-center">
                <img
                  src="./ico-bitcoin.svg"
                  alt=""
                  width="20px"
                  height="20px"
                />
                <span class="ml-1 text-sm">BitCoin</span>
                <span class="ml-1 text-sm font-thin">BTC/KRW</span>
              </div>
            </th>
            <td class="px-6 py-4 whitespace-nowrap">
              <span>8조 3,686억</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="text-red-500">38,452,000</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="">
                <button class="text-center px-2 py-0.5 bg-red-500 text-white rounded w-16">
                  1.5%
                </button>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-">
            <th class="px-6 py-4 whitespace-nowrap">
              <div class="inline-flex items-center">
                <img
                  src="./ico-bitcoin.svg"
                  alt=""
                  width="20px"
                  height="20px"
                />
                <span class="ml-1 text-sm">BitCoin</span>
                <span class="ml-1 text-sm font-thin">BTC/KRW</span>
              </div>
            </th>
            <td class="px-6 py-4 whitespace-nowrap">
              <span>8조 3,686억</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="text-red-500">38,452,000</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="">
                <button class="text-center px-2 py-0.5 bg-red-500 text-white rounded w-16">
                  1.5%
                </button>
              </div>
            </td>
          </tr>
          <tr class="bg-white border-">
            <th class="px-6 py-4 whitespace-nowrap">
              <div class="inline-flex items-center">
                <img
                  src="./ico-bitcoin.svg"
                  alt=""
                  width="20px"
                  height="20px"
                />
                <span class="ml-1 text-sm">BitCoin</span>
                <span class="ml-1 text-sm font-thin">BTC/KRW</span>
              </div>
            </th>
            <td class="px-6 py-4 whitespace-nowrap">
              <span>8조 3,686억</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="text-red-500">38,452,000</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="">
                <button class="text-center px-2 py-0.5 bg-red-500 text-white rounded w-16">
                  1.5%
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BestCoinCurrency;
