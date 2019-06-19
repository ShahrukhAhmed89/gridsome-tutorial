<template>
  <Layout>
    <BlogList :queryList=$page.blogs.edges></BlogList>
 </Layout>
</template>

<page-query>
  query {
    blogs: allBlogPost {
      edges {
        node {
          id
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
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>


