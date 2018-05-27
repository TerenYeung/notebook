/** 
 * 使用范例
 * {% api "Create a Record", method="GET", url="http://doc.minapp.com" %}
 *  This Api is for a record created.
 *   
 *
 * {% endapi %}
*/

const markdown = require('gitbook-markdown')

module.exports = {
  process: function(block) {
    let {
      body,
      args,
      kwargs,
      blocks,
    } = block

    let
      apiName = args[0],
      title = kwargs.title,
      method = kwargs.method,
      url = kwargs.url,
      content = markdown.page(body).content

    let
      header = `
        <section class="api-header">
          <div class="api-header-title">${title}</div>
          <div class="api-header-desc">
            <span class="method">${method}</span>
            <span class="name">${apiName}</span>
          </div>
          <div class="api-header-url">${url}</div>
        </section> 
      `
    
    let tpl = `
      <div class="api-wrapper">
        ${header}
        ${content}
      </div>
    `

    return tpl
  }
}