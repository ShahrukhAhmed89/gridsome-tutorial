<template>
  <Layout>
    <BlogList :queryList=$page.blogs.edges></BlogList>
 </Layout>
</template>
<page-query>
query BlogsByAuthor ($id: String!) {
  blogs: allBlogPost (filter: {author: {eq: $id}}) {
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