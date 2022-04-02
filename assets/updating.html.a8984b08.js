import{r as n,o as s,c as i,a as r,b as o,w as d,F as c,e as t,d as e}from"./app.1d1627fc.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},p=t(`<h1 id="updating-lunarvim" tabindex="-1"><a class="header-anchor" href="#updating-lunarvim" aria-hidden="true">#</a> Updating LunarVim</h1><p>Update your plugins, LunarVim and <code>neovim</code>:</p><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> Plugins</h3><p>In <code>lvim</code>:</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>PackerUpdate
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="lunarvim" tabindex="-1"><a class="header-anchor" href="#lunarvim" aria-hidden="true">#</a> LunarVim</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.local/share/lunarvim/lvim <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Then, in <code>lvim</code>:</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>PackerSync
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="neovim" tabindex="-1"><a class="header-anchor" href="#neovim" aria-hidden="true">#</a> Neovim</h3>`,10),m=e("Use your package manager or "),h=e("compile from source"),v=e(".");function g(_,b){const a=n("RouterLink");return s(),i(c,null,[p,r("p",null,[m,o(a,{to:"/drafts/dev/#compiling-neovim-from-source"},{default:d(()=>[h]),_:1}),v])],64)}var x=l(u,[["render",g]]);export{x as default};
