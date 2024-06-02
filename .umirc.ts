/*
 * @Description: 头部注释
 * @Autor: hou
 * @Date: 2024-05-31 10:40:12
 * @LastEditors: hou
 * @LastEditTime: 2024-06-02 16:38:19
 * @FilePath: \react-umi-admin\.umirc.ts
 */
import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/testPage", component: "testPage" },
  ],
  npmClient: 'npm',
});
