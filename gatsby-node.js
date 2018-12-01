exports.onCreatePage = ({ page, actions: { createPage } }) => {
  if (page.path === '/') {
    page.matchPath = '/*'
    createPage(page)
  }
}
