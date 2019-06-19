export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "Z:\\Javascript\\Projects\\testing Grid\\mysite\\src\\pages\\About.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "Z:\\Javascript\\Projects\\testing Grid\\mysite\\src\\pages\\Index.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "Z:\\Javascript\\Projects\\testing Grid\\mysite\\node_modules\\gridsome\\app\\pages\\404.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/frequently-asked-questions",
    component: () => import(/* webpackChunkName: "page--src-pages-frequently-asked-questions-vue" */ "Z:\\Javascript\\Projects\\testing Grid\\mysite\\src\\pages\\FrequentlyAskedQuestions.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/blog/:slug",
    component: () => import(/* webpackChunkName: "page--src-templates-blog-post-vue" */ "Z:\\Javascript\\Projects\\testing Grid\\mysite\\src\\templates\\BlogPost.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/tag/:slug",
    component: () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "Z:\\Javascript\\Projects\\testing Grid\\mysite\\src\\templates\\Tag.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/author/:slug",
    component: () => import(/* webpackChunkName: "page--src-templates-author-vue" */ "Z:\\Javascript\\Projects\\testing Grid\\mysite\\src\\templates\\Author.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "Z:\\Javascript\\Projects\\testing Grid\\mysite\\node_modules\\gridsome\\app\\pages\\404.vue"),
    meta: {
      data: true
    }
  }
]

