import{_ as n,c as s,o as a,a as t}from"./app.e1cf623f.js";const f='{"title":"Model Setup","description":"","frontmatter":{},"headers":[{"level":2,"title":"modelName\u751F\u6210\u89C4\u5219","slug":"modelname\u751F\u6210\u89C4\u5219"}],"relativePath":"core/model-setup.md","lastUpdated":1643523743487}',p={},o=t(`<h1 id="model-setup" tabindex="-1">Model Setup <a class="header-anchor" href="#model-setup" aria-hidden="true">#</a></h1><p>Vue3\u5E26\u6765\u5E7F\u53D7\u597D\u8BC4\u7684<code>script setup</code>, Veno\u628Asetup\u8BED\u6CD5\u6269\u5C55\u5230\u4E86<a href="https://vue-model-lite.test.gifshow.com/src/guide/model.html#createmodel" target="_blank" rel="noopener noreferrer">vue-model-lite</a></p><p>\u6240\u6709\u5DF2<code>model.setup.ts</code>\u6216\u8005<code>model.setup.js</code>\u7ED3\u5C3E\u7684\u6587\u4EF6\u90FD\u5C06\u88AB\u89C6\u4E3Amodel setup\uFF1A</p><ul><li>\u6240\u6709\u9876\u5C42\u7684\u53D8\u91CF\u548C\u51FD\u6570\u58F0\u660E\u4F1A\u5728\u5BFC\u51FA\u7684model\u91CC\u76F4\u63A5\u53EF\u7528</li><li><code>createModel</code>\u4F1A\u81EA\u52A8\u5F15\u5165</li><li>\u7C7B\u578B\u58F0\u660E\u548C\u547D\u540D\u5BFC\u51FA\u4F1A\u7F6E\u9876</li><li>\u4E0E<code>script setup</code>\u4E0D\u540C, import\u5F15\u5165\u7684\u5185\u5BB9\u4E0D\u4F1A\u5728model\u4E2D\u88AB\u5BFC\u51FA</li><li>\u5DF2\u4E0B\u5212\u7EBF<code>_</code>\u5F00\u5934\u7684\u53D8\u91CF\u548C\u51FD\u6570, \u4E0D\u4F1A\u88AB\u5BFC\u51FA</li></ul><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><ul><li>\u547D\u540D\u5BFC\u51FA\u7684\u7C7B\u578B\u3001\u5C5E\u6027\u3001\u65B9\u6CD5\u4E0D\u4F1A\u88ABcreateModel return, \u4ED6\u4EEC\u4F1A\u548Cmodel\u540C\u7EA7</li><li>import\u5F15\u5165\u7684\u5185\u5BB9\u4E0D\u4F1A\u88ABcreateModel return</li></ul></div><p>\u5982\u4E0B\u6587\u4EF6</p><div class="language-ts"><pre><code><span class="token comment">// user.model.setup.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useFetch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-model-lite&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token operator">:</span> userData<span class="token punctuation">,</span> error<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFetch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">&#39;https://user&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u53EF\u4EE5\u5B9A\u4E49\u8BA1\u7B97\u5C5E\u6027</span>
<span class="token keyword">const</span> avatar <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> data<span class="token punctuation">.</span>value<span class="token operator">?.</span>avatar <span class="token operator">??</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u7528\u6237\u81EA\u5B9A\u4E49\u7684\u53D8\u91CF</span>
<span class="token keyword">const</span> userState <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u7528\u6237\u81EA\u5B9A\u4E49\u7684\u65B9\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u79C1\u6709\u53D8\u91CF, \u4E0D\u4F1A\u88AB\u5BFC\u51FA</span>
<span class="token keyword">const</span> _private <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// \u79C1\u6709\u65B9\u6CD5, \u4E0D\u4F1A\u88AB\u5BFC\u51FA</span>
<span class="token keyword">function</span> <span class="token function">_privateFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

</code></pre></div><p>\u5C06\u88AB\u8F6C\u6362\u4E3A</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createModel<span class="token punctuation">,</span> useFetch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-model-lite&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> userModel <span class="token operator">=</span> <span class="token function">createModel</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token operator">:</span> userData<span class="token punctuation">,</span> error<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFetch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        url<span class="token operator">:</span> <span class="token string">&#39;https://user&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u53EF\u4EE5\u5B9A\u4E49\u8BA1\u7B97\u5C5E\u6027</span>
    <span class="token keyword">const</span> avatar <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> data<span class="token punctuation">.</span>value<span class="token operator">?.</span>avatar <span class="token operator">??</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u7528\u6237\u81EA\u5B9A\u4E49\u7684\u53D8\u91CF</span>
    <span class="token keyword">const</span> userState <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u7528\u6237\u81EA\u5B9A\u4E49\u7684\u65B9\u6CD5</span>
    <span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// \u79C1\u6709\u53D8\u91CF, \u4E0D\u4F1A\u88AB\u5BFC\u51FA</span>
    <span class="token keyword">const</span> _private <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">// \u79C1\u6709\u65B9\u6CD5, \u4E0D\u4F1A\u88AB\u5BFC\u51FA</span>
    <span class="token keyword">function</span> <span class="token function">_privateFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        userData\uFF0C
        error<span class="token punctuation">,</span>
        loading<span class="token punctuation">,</span>
        avatar<span class="token punctuation">,</span>
        userState<span class="token punctuation">,</span>
        func<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="modelname\u751F\u6210\u89C4\u5219" tabindex="-1">modelName\u751F\u6210\u89C4\u5219 <a class="header-anchor" href="#modelname\u751F\u6210\u89C4\u5219" aria-hidden="true">#</a></h2><p>modelName\u662F\u6839\u636E\u6587\u4EF6\u540D\u6765\u751F\u6210\u7684camelCase, \u547D\u540D\u5BFC\u51FA</p><ul><li><code>model.setup.ts</code> -&gt; <code>model</code></li><li><code>user.model.setup.ts</code> -&gt; <code>userModel</code></li><li><code>userModel.setup.ts</code> -&gt; <code>userModel</code></li><li><code>user-model.setup.ts</code> -&gt; <code>userModel</code></li><li><code>user_model.setup.ts</code> -&gt; <code>userModel</code></li><li><code>my_custom-userModel.setup.ts</code> -&gt; <code>myCustomUserModel</code></li></ul>`,12),e=[o];function c(l,u,r,i,k,d){return a(),s("div",null,e)}var _=n(p,[["render",c]]);export{f as __pageData,_ as default};
