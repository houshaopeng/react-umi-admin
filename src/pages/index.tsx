/*
 * @Description: 头部注释
 * @Autor: hou
 * @Date: 2024-06-02 10:11:45
 * @LastEditors: hou
 * @LastEditTime: 2024-06-12 10:47:02
 * @FilePath: \react-umi-admin\src\pages\index.tsx
 */
import yayJpg from '../assets/yay.jpg';
import './index.scss';

export default function HomePage() {

  function findMostElement(arr: Array) {
    let maxEle;
    let total = 0;
    let objs = arr.reduce((obj, key) => {
      obj[key] ? obj[key]++ : obj[key] = 1;
      if (obj[key] > total) {
        maxEle = key;
        total++;
      }
      return obj;
    }, {})
    return { maxEle, total }
  }
  console.log(findMostElement([1, 2, 3, 4, 5, 6, 2, 2]))
  // 手动实现bind
  Function.prototype.myBind = function (ctx, ...args) {
    const fn = this;
    return function (...restArgs) {
      //new.target 是否通过new关键字调用，如果不是返回undefined
      if (new.target) {
        return new fn(...arg, ...restArgs)
      }
      return fn.apply(ctx, [...args, ...restArgs])
    }
  }

  Function.prototype.myCall = function (ctx, ...args) {
    ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx);
    const fn = this;
    const key = Symbol();
    // Object.defineProperty(ctx, key, {
    //   value: fn,
    //   enumerable: false,
    // })
    ctx[key] = fn;
    const r = ctx[key](...args);
    delete ctx[key];
    return r;
  }
  function method(a, b) {
    console.log('args', a, b);
    console.log('this', this);
  }
  method.myCall({
    fn(){},

  })

  return (
    <div className='indexPage'>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <div className='firstbox'>

        <p className='firstp'>
          第一行
        </p>
      </div>
      <p className='secondP'>
        第二行<code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
