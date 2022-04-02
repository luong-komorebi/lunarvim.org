import{e as n}from"./app.1d1627fc.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="recommended-keybindings" tabindex="-1"><a class="header-anchor" href="#recommended-keybindings" aria-hidden="true">#</a> Recommended Keybindings</h1><h2 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>autocommands<span class="token punctuation">.</span>custom_groups <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token string">&quot;Filetype&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;python&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;nnoremap &lt;leader&gt;r &lt;cmd&gt;lua require(&#39;core.terminal&#39;)._exec_toggle(&#39;python &quot;</span> <span class="token operator">..</span> vim<span class="token punctuation">.</span>fn<span class="token punctuation">.</span>expand <span class="token string">&quot;%&quot;</span> <span class="token operator">..</span> <span class="token string">&quot;;read&#39;)&lt;CR&gt;&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string">&quot;Filetype&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;python&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;nnoremap &lt;leader&gt;t &lt;cmd&gt;lua require(&#39;toggleterm.terminal&#39;).Terminal:new {cmd=&#39;python -m unittest;read&#39;, hidden =false}:toggle()&lt;CR&gt;&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>which_key<span class="token punctuation">.</span>mappings<span class="token punctuation">[</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Run&quot;</span>
lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>which_key<span class="token punctuation">.</span>mappings<span class="token punctuation">[</span><span class="token string">&quot;t&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Test&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="django" tabindex="-1"><a class="header-anchor" href="#django" aria-hidden="true">#</a> Django</h3><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>terminal<span class="token punctuation">.</span>execs <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span> <span class="token string">&quot;lazygit&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;gg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;LazyGit&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token string">&quot;python manage.py test;read&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Django tests&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token string">&quot;python manage.py makemigrations;read&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jm&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Django makemigrations&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token string">&quot;python manage.py migrate;read&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ji&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Django migrate&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,5);function p(e,o){return t}var l=s(a,[["render",p]]);export{l as default};
