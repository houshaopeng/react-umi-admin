/*
 * @Description: 头部注释
 * @Autor: hou
 * @Date: 2024-05-31 10:40:12
 * @LastEditors: hou
 * @LastEditTime: 2024-06-02 17:58:50
 * @FilePath: \react-umi-admin\.umirc.ts
 */
import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/testPage", component: "./suspense/lazy/index" },
  ],
  npmClient: 'npm',
});
