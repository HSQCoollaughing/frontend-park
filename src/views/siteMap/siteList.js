import { cssList } from "./css";
import { JavaScriptList } from "./JavaScript";
import { nodeList } from "./node";
import { materialList } from "./material";
import { blogList } from "./blogs";
import { personalBlogList } from "./personalBlog";
import { frontWeeklyList } from "./frontWeekly";
export const sites = [
    ...blogList,
    ...personalBlogList,
    ...frontWeeklyList,
    ...JavaScriptList,
    ...cssList,
    ...nodeList,
    ...materialList,
    {
        name: "Git",
        list: [
            {
                name: "Git Branching",
                url: "https://learngitbranching.js.org/?locale=zh_CN",
                img: "123",
                des: "通过一系列刺激的关卡挑战，逐步深入的学习 Git 的强大功能",
            },
        ],
    },
];
