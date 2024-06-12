/*
 * @Description: 头部注释
 * @Autor: hou
 * @Date: 2024-06-02 17:59:38
 * @LastEditors: hou
 * @LastEditTime: 2024-06-11 18:34:54
 * @FilePath: \react-umi-admin\src\pages\suspense\fetch\app.js
 */
import React,{Suspense} from 'react';

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Profile-loading</div>}>
        <Profile></Profile>
      </Suspense>
      <Suspense fallback={<div>Artticle-loading</div>}>
        <Artticle></Artticle>
      </Suspense>
    </div>
  );
}
function Profile(){
  return <div></div>
}
function Artticle(){
  return <div></div>
}

export default App;
