import{_ as s,c as e,o as a,a as n}from"./app.e1cf623f.js";const g='{"title":"\u6587\u4EF6\u8DEF\u7531","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8DEF\u7531\u89C4\u5219","slug":"\u8DEF\u7531\u89C4\u5219"},{"level":3,"title":"\u57FA\u672C\u8DEF\u7531","slug":"\u57FA\u672C\u8DEF\u7531"},{"level":3,"title":"\u52A8\u6001\u8DEF\u7531","slug":"\u52A8\u6001\u8DEF\u7531"},{"level":3,"title":"\u5D4C\u5957\u8DEF\u7531","slug":"\u5D4C\u5957\u8DEF\u7531"},{"level":2,"title":"\u8DEF\u7531\u6269\u5C55","slug":"\u8DEF\u7531\u6269\u5C55"},{"level":3,"title":"\u91CD\u5B9A\u5411\u4E0E\u522B\u540D","slug":"\u91CD\u5B9A\u5411\u4E0E\u522B\u540D"}],"relativePath":"core/router.md","lastUpdated":1643271390834}',t={},p=n(`<h1 id="\u6587\u4EF6\u8DEF\u7531" tabindex="-1">\u6587\u4EF6\u8DEF\u7531 <a class="header-anchor" href="#\u6587\u4EF6\u8DEF\u7531" aria-hidden="true">#</a></h1><p>Veno\u9ED8\u8BA4\u9009\u62E9<code>src/pages</code>\u4E0B\u6240\u6709\u7684<code>.vue</code>\u6587\u4EF6\u6765\u751F\u6210\u8DEF\u7531\u914D\u7F6E, \u4F46\u4E0D\u5305\u62EC\u4EE5\u4E0B\u6587\u4EF6\uFF1A</p><ul><li>\u5DF2<code>.</code>\u6216<code>_</code>\u5F00\u5934\u7684\u6587\u4EF6\u548C\u6587\u4EF6\u5939</li><li><code>component</code>\u6216\u8005<code>components</code>\u4E0B\u7684\u6240\u6709\u6587\u4EF6</li></ul><h2 id="\u8DEF\u7531\u89C4\u5219" tabindex="-1">\u8DEF\u7531\u89C4\u5219 <a class="header-anchor" href="#\u8DEF\u7531\u89C4\u5219" aria-hidden="true">#</a></h2><p>\u8DEF\u7531\u89C4\u5219\u4E0E<a href="https://github.com/hannoeru/vite-plugin-pages" target="_blank" rel="noopener noreferrer">vite-plugin-pages</a>\u7C7B\u4F3C</p><h3 id="\u57FA\u672C\u8DEF\u7531" tabindex="-1">\u57FA\u672C\u8DEF\u7531 <a class="header-anchor" href="#\u57FA\u672C\u8DEF\u7531" aria-hidden="true">#</a></h3><ul><li><code>src/pages/users.vue</code> -&gt; <code>/users</code></li><li><code>src/pages/users/settings.vue</code> -&gt; <code>/users/settings</code></li><li><code>src/pages/users/index.vue</code> -&gt; <code>/users</code></li></ul><h3 id="\u52A8\u6001\u8DEF\u7531" tabindex="-1">\u52A8\u6001\u8DEF\u7531 <a class="header-anchor" href="#\u52A8\u6001\u8DEF\u7531" aria-hidden="true">#</a></h3><p>\u5DF2\u4E2D\u62EC\u53F7\u5F00\u59CB\u7684\u6587\u4EF6\u540D\u4F1A\u751F\u6210\u52A8\u6001\u8DEF\u7531</p><ul><li><code>src/pages/users/[id].vue</code> -&gt; <code>/users/:id</code></li><li><code>src/pages/[user]/settings.vue</code> -&gt; <code>/:user/settings</code></li></ul><h3 id="\u5D4C\u5957\u8DEF\u7531" tabindex="-1">\u5D4C\u5957\u8DEF\u7531 <a class="header-anchor" href="#\u5D4C\u5957\u8DEF\u7531" aria-hidden="true">#</a></h3><p>\u76EE\u5F55\u4E0B\u62E5\u6709<code>layout.vue</code>\u7684, \u4F1A\u751F\u6210\u5D4C\u5957\u8DEF\u7531</p><div class="language-"><pre><code>src/pages/
  \u251C\u2500\u2500 users/
  \u2502  \u251C\u2500\u2500 layout.vue
  \u2502  \u251C\u2500\u2500 index.vue
  \u2502  \u2514\u2500\u2500 [id].vue
</code></pre></div><div class="language-js"><pre><code><span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;/src/pages/layout.vue&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;/src/pages/users/index.vue&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;users&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;:id&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;/src/pages/users/[id].vue&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;users-id&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><ul><li>\u6240\u6709\u8DEF\u7531\u5747\u4E3A\u52A8\u6001\u5BFC\u5165</li></ul></div><h2 id="\u8DEF\u7531\u6269\u5C55" tabindex="-1">\u8DEF\u7531\u6269\u5C55 <a class="header-anchor" href="#\u8DEF\u7531\u6269\u5C55" aria-hidden="true">#</a></h2><h3 id="\u91CD\u5B9A\u5411\u4E0E\u522B\u540D" tabindex="-1">\u91CD\u5B9A\u5411\u4E0E\u522B\u540D <a class="header-anchor" href="#\u91CD\u5B9A\u5411\u4E0E\u522B\u540D" aria-hidden="true">#</a></h3>`,17),o=[p];function r(c,l,i,u,d,h){return a(),e("div",null,o)}var v=s(t,[["render",r]]);export{g as __pageData,v as default};
