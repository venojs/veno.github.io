import{_ as n,c as a,o as s,a as e}from"./app.e1cf623f.js";const h='{"title":"\u591A\u9875\u5E94\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u591A\u9875\u5E94\u7528\u7684\u76EE\u5F55\u7ED3\u6784","slug":"\u591A\u9875\u5E94\u7528\u7684\u76EE\u5F55\u7ED3\u6784"},{"level":2,"title":"\u6A21\u677F\u590D\u7528\u4E0E\u81EA\u5B9A\u4E49","slug":"\u6A21\u677F\u590D\u7528\u4E0E\u81EA\u5B9A\u4E49"},{"level":2,"title":"\u66F4\u591A\u914D\u7F6E","slug":"\u66F4\u591A\u914D\u7F6E"}],"relativePath":"core/mpa.md","lastUpdated":1643276724637}',t={},p=e(`<h1 id="\u591A\u9875\u5E94\u7528" tabindex="-1">\u591A\u9875\u5E94\u7528 <a class="header-anchor" href="#\u591A\u9875\u5E94\u7528" aria-hidden="true">#</a></h1><p>Vite\u539F\u751F\u652F\u6301<a href="https://cn.vitejs.dev/guide/build.html#multi-page-app" target="_blank" rel="noopener noreferrer">\u591A\u9875\u5E94\u7528</a>, Veno\u6539\u8FDB\u4E86\u4ED6</p><p>Veno\u9ED8\u8BA4\u662F\u5355\u9875\u5E94\u7528, \u591A\u9875\u5E94\u7528\u9700\u8981\u4F7F\u7528<a href="/config/#router">\u914D\u7F6E\u6587\u4EF6</a>\u6307\u5B9A</p><div class="language-ts"><pre><code><span class="token comment">// veno.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    router<span class="token operator">:</span> <span class="token punctuation">{</span>
        mpa<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4F7F\u7528mpa\u6A21\u5F0F</span>
        filename<span class="token operator">:</span> <span class="token string">&#39;main.ts&#39;</span> <span class="token comment">// \u6307\u5B9A\u4F7F\u7528main.ts\u751F\u6210\u8DEF\u7531</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u591A\u9875\u5E94\u7528\u7684\u76EE\u5F55\u7ED3\u6784" tabindex="-1">\u591A\u9875\u5E94\u7528\u7684\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#\u591A\u9875\u5E94\u7528\u7684\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h2><div class="language-"><pre><code>src/pages/
  \u251C\u2500\u2500 user/
  \u2502  \u251C\u2500\u2500 main.ts
  \u251C\u2500\u2500 activity/
  \u2502  \u251C\u2500\u2500 activity-a
  \u2502  \u2502  \u251C\u2500\u2500 main.ts
  \u2502  \u2502  \u251C\u2500\u2500 index.html
  \u2502  \u251C\u2500\u2500 activity-b
  \u2502  \u2502  \u251C\u2500\u2500 main.ts
</code></pre></div><p>\u5982\u4E0A\u76EE\u5F55\u7ED3\u6784\u5C06\u4F1A\u751F\u6210\u4E09\u6761\u8DEF\u7531</p><ul><li><code>/user</code></li><li><code>/activity/activity-a</code></li><li><code>/activity/activity-b</code></li></ul><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><ul><li>\u8DEF\u7531\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u76F4\u63A5\u8BBF\u95EE</li><li>\u53EF\u4EE5\u4F7F\u7528<code>base</code>\u7ED9\u8DEF\u7531\u589E\u52A0\u524D\u7F00</li></ul></div><h2 id="\u6A21\u677F\u590D\u7528\u4E0E\u81EA\u5B9A\u4E49" tabindex="-1">\u6A21\u677F\u590D\u7528\u4E0E\u81EA\u5B9A\u4E49 <a class="header-anchor" href="#\u6A21\u677F\u590D\u7528\u4E0E\u81EA\u5B9A\u4E49" aria-hidden="true">#</a></h2><p>\u591A\u9875\u5E94\u7528\u7684\u6A21\u677F\u4F1A\u590D\u7528\u6839\u76EE\u5F55\u4E0B\u7684<code>index.html</code></p><p>\u5982\u679C\u67D0\u4E9B\u8DEF\u7531\u9700\u8981\u81EA\u5B9A\u4E49html\u5185\u5BB9, \u53EF\u4EE5\u5728\u5BF9\u5E94\u76EE\u5F55\u4E0B\u5EFA\u4E00\u4E2A<code>index.html</code></p><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F</p><ul><li><code>index.html</code>\u4E0D\u9700\u8981script\u5F15\u5165\u5165\u53E3\u6587\u4EF6, Veno\u4F1A\u81EA\u52A8\u5904\u7406</li></ul></div><h2 id="\u66F4\u591A\u914D\u7F6E" tabindex="-1">\u66F4\u591A\u914D\u7F6E <a class="header-anchor" href="#\u66F4\u591A\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u901A\u8FC7<code>mpaConfig</code>\u5BF9\u8DEF\u7531\u8FDB\u884C\u66F4\u7CBE\u7EC6\u5316\u7684\u63A7\u5236\u548C\u6269\u5C55</p><div class="language-ts"><pre><code><span class="token comment">// veno.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    router<span class="token operator">:</span> <span class="token punctuation">{</span>
        mpa<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4F7F\u7528mpa\u6A21\u5F0F</span>
        filename<span class="token operator">:</span> <span class="token string">&#39;main.ts&#39;</span> <span class="token comment">// \u6307\u5B9A\u4F7F\u7528main.ts\u751F\u6210\u8DEF\u7531</span>
        mpaConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;/user&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                alias<span class="token operator">:</span> <span class="token string">&#39;/profile&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBF\u95EEprofile\u5C06\u4F1A\u6E32\u67D3/user</span>
                title<span class="token operator">:</span> <span class="token string">&#39;\u7528\u6237\u4E3B\u9875&#39;</span><span class="token punctuation">,</span>
                <span class="token comment">// ...</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,16),o=[p];function c(i,l,r,u,d,k){return s(),a("div",null,o)}var f=n(t,[["render",c]]);export{h as __pageData,f as default};
