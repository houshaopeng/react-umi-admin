/*
 * @Description: 头部注释
 * @Autor: hou
 * @Date: 2024-05-31 10:40:12
 * @LastEditors: hou
 * @LastEditTime: 2024-06-02 16:42:04
 * @FilePath: \react-umi-admin\src\layouts\index.tsx
 */
import { Link, Outlet,history } from 'umi';
import styles from './index.less';

export default function Layout() {
  const hanldClick = (url)=>{
    history.push(url)
  }
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li onClick={()=>hanldClick('/testPage')}>
          测试路由跳转
          {/* <Link to="/testPage">testPage</Link> */}
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
