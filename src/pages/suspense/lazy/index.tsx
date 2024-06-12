/*
 * @Description: 头部注释
 * @Autor: hou
 * @Date: 2024-06-02 16:34:17
 * @LastEditors: hou
 * @LastEditTime: 2024-06-12 09:21:10
 * @FilePath: \react-umi-admin\src\pages\suspense\lazy\index.tsx
 */

import React, { useState, Suspense } from 'react';
const Nowplaying = React.lazy(() => import('./Nowplaying'))
const Comingsoon = React.lazy(() => import('./Comingsoon'))

const TestPage = () => {
  const [type, settype] = useState(1);
  return (
    <div>
      这就是测试页面
      <ul>
        <li onClick={() => settype(1)}>正在热映</li>
        <li onClick={() => settype(2)}>即将上映</li>
      </ul>
      <Suspense fallback={<div>loading...</div>}>
        {
          type === 1 ? <Nowplaying /> : <Comingsoon />
        }
      </Suspense>
    </div>
  );
}

const arr = [45, 45, 2, 3, 2, 4, 89, 89, 45, 45, 78, 10];
function findMostElement(arr) {
  let maxEle;   // 出现次数最多的元素
  let total = 1;  // 出现的次数
  let objs = arr.reduce(function(obj, key) {
    console.log('obj',obj,key);
      obj[key] ? obj[key]++ : obj[key] = 1;
      if(obj[key] > total) {
          maxEle = key;
          total++;
      }
      return obj;
  },{});
  return {maxEle: maxEle, total: total};
}

console.log(findMostElement(arr)); // {maxEle: 45, total: 4}

export default TestPage;

