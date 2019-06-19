<template>
  <Layout>
    <BlogList :queryList=$page.blogs.edges></BlogList>
 </Layout>
</template>

<page-query>
query BlogsByTags($id: String) {
  blogs: allBlogPost (filter: {tags: {contains: [$id]}}) {
    edges {
      node {
        title
        path
        author {
          id
          path
        }
        tags {
          id
          path
        }
      }
    }
  }
}
</page-query>


<script>
import BlogList from '~/components/BlogList.vue'

export default {
  components: {
    BlogList //Register component BlogList
  }
}
</script>