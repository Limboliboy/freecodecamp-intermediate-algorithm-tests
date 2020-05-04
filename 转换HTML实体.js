/*写一个转换 HTML entity 的函数。需要转换的 HTML entity 有
&、<、>、"（双引号）和'（单引号）
示例：
convertHTML("Dolce & Gabbana") // Dolce &​amp; Gabbana
convertHTML('Stuff in "quotation marks"') // Stuff in &​quot;quotation marks&​quot;
convertHTML("abc") // abc
*/
function convertHTML(str) {
  // &amp;&lt;&gt;&quot;&apos
  if(str.match(/&|<|>|"|'/)){
  	str=str.replace(/&/g,'&amp;');
  	str=str.replace(/</g,'&lt;');
  	str=str.replace(/>/g,'&gt;');
  	str=str.replace(/"/g,'&quot;');
  	str=str.replace(/'/g,'&apos;');
  }
  return str;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
