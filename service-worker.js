if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const f=e=>d(e,c),l={module:{uri:c},exports:n,require:f};i[c]=Promise.all(a.map((e=>l[e]||f(e)))).then((e=>(r(...e),n)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/08/02/程序员的一天/index.html",revision:"a82194bd958f113a90ef50d7e9194dd7"},{url:"2022/08/06/JVM-Java内存模型/index.html",revision:"8703b43e8bf3131f0eac86f63022dcbc"},{url:"2022/08/06/JVM-Java线程/index.html",revision:"bf169eaf412de32e40181242fbc35053"},{url:"2022/08/06/JVM-JVM执行引擎/index.html",revision:"7fb97a892d3515aa6a2b04af2bce8c95"},{url:"2022/08/06/JVM-分析GC日志/index.html",revision:"0bdd862229a6d782a282a5125017ad31"},{url:"2022/08/06/JVM-双亲委派机制/index.html",revision:"6e5fbfd3d4099bab5b430a068e7b92cb"},{url:"2022/08/06/JVM-垃圾回收器/index.html",revision:"7a0e7ee9aaf157f78aaf5f25dc3f3144"},{url:"2022/08/06/JVM-垃圾回收概述/index.html",revision:"b38ff490bb2ba7ad828a1bfa47363ef9"},{url:"2022/08/06/JVM-垃圾回收相关概念/index.html",revision:"ecb8c4224e2ea287668d33d9b50bdbcf"},{url:"2022/08/06/JVM-垃圾回收相关算法/index.html",revision:"aa24723ffeb11054d5d20e0212a28313"},{url:"2022/08/06/JVM-堆/index.html",revision:"1b7db4f8163b8df9bd88c4c8c0ece780"},{url:"2022/08/06/JVM-多线程安全/index.html",revision:"0495cef3ec5a794553721d6d3e0078b7"},{url:"2022/08/06/JVM-字符串常量池/index.html",revision:"7abd7dac9d07d2184a21811ce5937317"},{url:"2022/08/06/JVM-对象的实例化内存布局与访问定位-直接内存/index.html",revision:"fe334ed9faaf034d99b18f18c10f0472"},{url:"2022/08/06/JVM-性能优化概述/index.html",revision:"d9a75b6f135bc0f138e092a1a09019ca"},{url:"2022/08/06/JVM-方法区/index.html",revision:"b7ae2c809d522d8eaa9619316b2e1157"},{url:"2022/08/06/JVM-本地方法接口/index.html",revision:"0305f4a35f294d7e8b1725277fddeceb"},{url:"2022/08/06/JVM-本地方法栈/index.html",revision:"b6c5a5381f3213787e370106235788cf"},{url:"2022/08/06/JVM-沙箱安全机制/index.html",revision:"f4ddcb964616b05c7d50b59da802f132"},{url:"2022/08/06/JVM-监控及诊断工具-GUI篇/index.html",revision:"f857d1775d915f09d1b4383ee6a703fa"},{url:"2022/08/06/JVM-监控及诊断工具-命令行篇/index.html",revision:"272536da42a4647855fe80545fce56dd"},{url:"2022/08/06/JVM-类加载器的分类/index.html",revision:"b94b04461e958d71b8808631df75df1a"},{url:"2022/08/06/JVM-类加载器的常用方法/index.html",revision:"afb2f9482470ce45e4bc430941a4849e"},{url:"2022/08/06/JVM-类加载子系统/index.html",revision:"2a23aebf827d3c1b499cb2e113ca7820"},{url:"2022/08/06/JVM-类加载过程/index.html",revision:"07748d88ae526877e5a2b28b5f72ccc5"},{url:"2022/08/06/JVM-虚拟机栈/index.html",revision:"012d5e9013183f018bcc07cd04a8237b"},{url:"2022/08/06/JVM-运行时参数/index.html",revision:"8a84cdc71e0ed41b656c342454f7db72"},{url:"2022/08/06/JVM-运行时数据区内部结构/index.html",revision:"51e2dc6f473c80b1964c33375d519705"},{url:"2022/08/06/JVM-锁优化/index.html",revision:"70fa48a82ef1e17f8cf00619555977eb"},{url:"2022/08/07/一生/index.html",revision:"9f1f97cbbd4e7d8e1fce8dfbd44d580c"},{url:"2022/08/07/安卓-Apk安装流程/index.html",revision:"a6c34ae616bca753a2be094efd742433"},{url:"2022/08/07/安卓-GPU负载分析下的最佳实践/index.html",revision:"31eac4b863ae54f92d3b4d5994e40dc3"},{url:"404.html",revision:"d18cd5903079a99dcb749ebaf8468120"},{url:"about/index.html",revision:"1481bdf89ea3f33ae7d22c0a64942c02"},{url:"archives/2022/08/index.html",revision:"a6f7f29638923e69f67143b03c68dcb4"},{url:"archives/2022/08/page/2/index.html",revision:"c66a1fc6d9e9f7fe5b3794d89c848126"},{url:"archives/2022/index.html",revision:"c90ae596e592cdc5474e49db2e0f2efd"},{url:"archives/2022/page/2/index.html",revision:"666fac033ed642e6c85b7e8f721bc7c5"},{url:"archives/index.html",revision:"0ec3e863fc21b19f00e512ddabb3ff26"},{url:"archives/page/2/index.html",revision:"dde93f6c5dd6242ce68992267ddf2a45"},{url:"categories/index.html",revision:"49f51d47ee52132384d9823ddda64ce9"},{url:"categories/技术/index.html",revision:"0f093df8e68eed6efcb33b9ea5f57821"},{url:"categories/技术/page/2/index.html",revision:"10b2ea75910287d05965f80b45019840"},{url:"categories/生活/index.html",revision:"eff201222c7d6e91c18de9ef8e00b4c7"},{url:"css/index.css",revision:"f55253e69fd2dd6b785fd4a3683a03ed"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"0ee5477ec28cb785d081802ca5dde512"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"4f534d06014f7c2d4928c084ebccf74f"},{url:"page/2/index.html",revision:"8cdb99adfeac12342413e0b12fdaa7b8"},{url:"photo/index.html",revision:"7a3bac50c9445ba6da4131c2e2dd1547"},{url:"tags/GPU负载/index.html",revision:"7b80fac1d60ce32ec811a589cad44be1"},{url:"tags/index.html",revision:"112f7d525ec104c05ad98801b32427da"},{url:"tags/Java/index.html",revision:"d06d9fa507e28176a184a3507382f8a3"},{url:"tags/Java/page/2/index.html",revision:"4007117393a2dc25c8b6aad2dc9598c2"},{url:"tags/JVM/index.html",revision:"46514670a49b273630b5a03c3f74f790"},{url:"tags/JVM/page/2/index.html",revision:"7a0b27b47e40b19b23f0ae1de859d0c8"},{url:"tags/安卓/index.html",revision:"26871ac2b6148454ea5b11f7bc30922c"},{url:"tags/性能优化/index.html",revision:"c859eec91f31709b1aa472000321734c"},{url:"tags/生活/index.html",revision:"335cdac7baa54e43b86f7cbec8a5cec5"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
