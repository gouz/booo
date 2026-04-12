#!/usr/bin/env bun
// @bun
var ha=Object.create;var{getPrototypeOf:ua,defineProperty:ge,getOwnPropertyNames:ba}=Object;var fa=Object.prototype.hasOwnProperty;function ga(e){return this[e]}var ya,va,ye=(e,a,s)=>{var n=e!=null&&typeof e==="object";if(n){var i=a?ya??=new WeakMap:va??=new WeakMap,t=i.get(e);if(t)return t}s=e!=null?ha(ua(e)):{};let r=a||!e||!e.__esModule?ge(s,"default",{value:e,enumerable:!0}):s;for(let o of ba(e))if(!fa.call(r,o))ge(r,o,{get:ga.bind(e,o),enumerable:!0});if(n)i.set(e,r);return r};var ka=(e,a)=>()=>(a||e((a={exports:{}}).exports,a),a.exports);var re=ka((ws,Pe)=>{var oe={to(e,a){if(!a)return`\x1B[${e+1}G`;return`\x1B[${a+1};${e+1}H`},move(e,a){let s="";if(e<0)s+=`\x1B[${-e}D`;else if(e>0)s+=`\x1B[${e}C`;if(a<0)s+=`\x1B[${-a}A`;else if(a>0)s+=`\x1B[${a}B`;return s},up:(e=1)=>`\x1B[${e}A`,down:(e=1)=>`\x1B[${e}B`,forward:(e=1)=>`\x1B[${e}C`,backward:(e=1)=>`\x1B[${e}D`,nextLine:(e=1)=>"\x1B[E".repeat(e),prevLine:(e=1)=>"\x1B[F".repeat(e),left:"\x1B[G",hide:"\x1B[?25l",show:"\x1B[?25h",save:"\x1B7",restore:"\x1B8"},Pa={up:(e=1)=>"\x1B[S".repeat(e),down:(e=1)=>"\x1B[T".repeat(e)},qa={screen:"\x1B[2J",up:(e=1)=>"\x1B[1J".repeat(e),down:(e=1)=>"\x1B[J".repeat(e),line:"\x1B[2K",lineEnd:"\x1B[K",lineStart:"\x1B[1K",lines(e){let a="";for(let s=0;s<e;s++)a+=this.line+(s<e-1?oe.up():"");if(e)a+=oe.left;return a}};Pe.exports={cursor:oe,scroll:Pa,erase:qa,beep:"\x07"}});class J{#e;#r="";#a="0.0.1";#s={help:{short:"h",description:"show help",type:"boolean"},version:{short:"v",description:"show version",type:"boolean"}};#t={};#n=[];#i=[];#o=async()=>{};#d="";constructor(e,a="",s=""){this.#e=e,this.#r=a,this.#a=s}set name(e){this.#e=e}get name(){return this.#e}set description(e){this.#r=e}get description(){return this.#r}set version(e){this.#a=e}get version(){return this.#a}#l(e){return`\x1B[3m${e}\x1B[0m`}#c(){return`
\x1B[1;36m${this.#d}${this.#e}\x1B[0m ${this.#a}
${this.#l(this.description)}
`}#p(){return`
Usage: ${this.#d}${this.#e} [options] [arguments]

`}#m(){let e="";if(this.#i.length){let a=Math.max(...this.#i.map((s)=>s.name.length))+2;e=this.#i.map((s)=>`  \x1B[1m${s.name.padEnd(a)}\x1B[0m ${this.#l(s.description)}
`).join("")}return e!==""?`\x1B[4mSubcommands:\x1B[0m
${e}
`:""}#h(e){let[a,s]=Object.entries(e).at(0)??[];if(a&&s){let n=typeof s.short<"u"?`-${s.short}, `:"",i=s.type==="boolean"?"":" <param>";return`${n}--${a}${i}`}return""}#b(){let e=[...Object.entries(this.#s),...Object.entries(this.#t)].filter(([n,i])=>typeof i.long>"u"),a=Math.max(...e.map(([n,i])=>this.#h({[n]:i}).length))+1,s=e.map(([n,i])=>[`  \x1B[1m${this.#h({[n]:i}).padEnd(a)}\x1B[0m`,this.#l(i.description??""),` ${typeof i.default<"u"?`(default: ${i.default})`:""}`,`
`].join(" ")).join("");return s!==""?`\x1B[4mOptions:\x1B[0m
${s}
`:""}#u(){let e="";if(this.#n.length){let a=Math.max(...this.#n.map((s)=>s.name.length))+1;e=this.#n.map((s)=>`  \x1B[1m${s.name.padEnd(a)}\x1B[0m ${this.#l(s.description??"")}
`).join("")}return e!==""?`\x1B[4mArguments:\x1B[0m
${e}
`:""}#f(){return`
You can generate a completion script for your CLI by running:
\x1B[3m$ ${this.#e} generate-completion\x1B[0m
    `}help(){console.log(this.#c()+this.#p()+this.#m()+this.#b()+this.#u()+this.#f())}addOptions(e={}){return Object.entries(e).forEach(([a,s],n)=>{if(this.#s={...this.#s,[a]:s},typeof s?.short<"u")this.#s={...this.#s,[s.short]:{...s,long:a}}}),this}addGlobalOptions(e={}){return Object.entries(e).forEach(([a,s],n)=>{if(this.#t={...this.#t,[a]:s},typeof s?.short<"u")this.#t={...this.#t,[s.short]:{...s,long:a}}}),this}addArguments(e){return this.#n.push(...e),this}addSubcommands(e){return this.#i.push(...e),this}action(e){return this.#o=e,this}#g(e,a,s){if(a.includes("=")){let[n,i]=a.substring(1).split("=",2);s[this.#s[n]?.long??""]=i}else{let n=a.substring(1).split("");n.forEach((i,t)=>{if(this.#s[i]?.type!=="boolean")if(t===n.length-1)if(!e[1]?.startsWith("-"))s[this.#s[i]?.long??""]=e[1]??this.#s[i]?.default,e.shift();else s[this.#s[i]?.long??""]=this.#s[i]?.default;else s[this.#s[i]?.long??""]=this.#s[i]?.default;else s[this.#s[i].long??""]=!0})}e.shift()}#y(e,a,s){let n=a.substring(2);if(n.includes("=")){let[i,t]=n.split("=",2);s[i]=t}else if(this.#s[n]?.type!=="boolean")if(e.length===1)s[n]=this.#s[n]?.default;else s[n]=e[1],e.shift();else s[n]=!0;e.shift()}#v(e){let a={},s=[];while(e.length){let n=e[0]??"";if(/^-[a-z=]+$/.exec(n))this.#g(e,n,a);else if(n.startsWith("--"))this.#y(e,n,a);else s.push(e.shift()??"")}return{options:a,args:s}}#k(e){let a={};return this.#n.forEach((s,n)=>{if(e.length)a[s.name]=e.shift()}),a}getGenerationCompletionLine(){return[...new Set([...this.#i.map((e)=>e.name),...Object.keys({...this.#s,...this.#t}).map((e)=>`--${e}`),...Object.values({...this.#s,...this.#t}).map((e)=>e.short??"").filter((e)=>e!=="").map((e)=>`-${e}`)])].join(" ")}#F(){let e=`
#/usr/bin/env bash
_${this.#e}_completions()
{
    local cur prev

    cur=\${COMP_WORDS[COMP_CWORD]}
    prev=\${COMP_WORDS[COMP_CWORD-1]}

    case \${COMP_CWORD} in
        1)
            COMPREPLY=($(compgen -W "${this.getGenerationCompletionLine()}" -- \${cur}))
            ;;
        2)
            case \${prev} in
                ${this.#i.map((a)=>`
                ${a.name})
                    COMPREPLY=($(compgen -W "${a.getGenerationCompletionLine()}" -- \${cur}))
                    ;;
                `).join(`
`)}
            esac
            ;;
        *)
            COMPREPLY=()
            ;;
    esac
}
complete -F _${this.#e}_completions ${this.#e}
`;console.log(`Copy this into ~/.clipse.${this.#e}.bash`),console.log(e),console.log(`Then execute: source ~/.clipse.${this.#e}.bash`)}async ready(e=[],a=""){if(this.#d=a,e.length===0&&a==="")e.push(...process.argv.slice(2));let s={};if(Object.entries(this.#s).forEach(([n,i],t)=>{if(typeof i.long>"u"&&(typeof i.optional>"u"||!i.optional)&&!["help","version"].includes(n))s[n]=i.default??(i.type==="boolean"?!1:"")}),e.length){if(e[0]==="-h"||e[0]==="--help")this.help(),process.exit(0);if(e[0]==="-v"||e[0]==="--version")console.log(this.#a),process.exit(0);let n=this.#i.filter((i)=>i.name===e[0]).shift();if(n)e.shift(),n.addOptions(this.#t),n.ready(e,`${this.#d}${this.#e} `);else{if(e[0]==="generate-completion")this.#F(),process.exit(0);let i=this.#v([...e]),t={...s,...i.options},r=this.#k([...i.args]);await this.#o(r,t)}}else await this.#o({},s)}}var W={name:"booo",author:"Sylvain Gougouzian",main:"bin/index.js",version:"0.0.2",bin:{booo:"./bin/index.js"},repository:{type:"git",url:"git+https://github.com/gouz/booo.git"},devDependencies:{"@types/bun":"latest"},peerDependencies:{typescript:"6.0.2"},dependencies:{"@clack/prompts":"^1.2.0",clipse:"^0.0.15"},scripts:{make:"bun build src/index.ts --outdir bin --minify --target bun","make:exe":"bun build src/index.ts --outfile exe/booo --compile --minify",dev:"bun src/index.ts"}};async function ee(e){let{log:a}=console;try{let s=await fetch("https://api.github.com/repos/gouz/booo/releases/latest",{signal:AbortSignal.timeout(2000)});if(s.ok){let n=await s.json();if(n.tag_name!==e)a(`Booo is out of date! Please update to ${n.tag_name}`)}}catch(s){}}import{styleText as qe}from"util";import{stdout as pe,stdin as Ie}from"process";import*as I from"readline";import Ma from"readline";var ve=(e)=>{return e===161||e===164||e===167||e===168||e===170||e===173||e===174||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||e===198||e===208||e===215||e===216||e>=222&&e<=225||e===230||e>=232&&e<=234||e===236||e===237||e===240||e===242||e===243||e>=247&&e<=250||e===252||e===254||e===257||e===273||e===275||e===283||e===294||e===295||e===299||e>=305&&e<=307||e===312||e>=319&&e<=322||e===324||e>=328&&e<=331||e===333||e===338||e===339||e===358||e===359||e===363||e===462||e===464||e===466||e===468||e===470||e===472||e===474||e===476||e===593||e===609||e===708||e===711||e>=713&&e<=715||e===717||e===720||e>=728&&e<=731||e===733||e===735||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||e===1025||e>=1040&&e<=1103||e===1105||e===8208||e>=8211&&e<=8214||e===8216||e===8217||e===8220||e===8221||e>=8224&&e<=8226||e>=8228&&e<=8231||e===8240||e===8242||e===8243||e===8245||e===8251||e===8254||e===8308||e===8319||e>=8321&&e<=8324||e===8364||e===8451||e===8453||e===8457||e===8467||e===8470||e===8481||e===8482||e===8486||e===8491||e===8531||e===8532||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||e===8585||e>=8592&&e<=8601||e===8632||e===8633||e===8658||e===8660||e===8679||e===8704||e===8706||e===8707||e===8711||e===8712||e===8715||e===8719||e===8721||e===8725||e===8730||e>=8733&&e<=8736||e===8739||e===8741||e>=8743&&e<=8748||e===8750||e>=8756&&e<=8759||e===8764||e===8765||e===8776||e===8780||e===8786||e===8800||e===8801||e>=8804&&e<=8807||e===8810||e===8811||e===8814||e===8815||e===8834||e===8835||e===8838||e===8839||e===8853||e===8857||e===8869||e===8895||e===8978||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||e===9632||e===9633||e>=9635&&e<=9641||e===9650||e===9651||e===9654||e===9655||e===9660||e===9661||e===9664||e===9665||e>=9670&&e<=9672||e===9675||e>=9678&&e<=9681||e>=9698&&e<=9701||e===9711||e===9733||e===9734||e===9737||e===9742||e===9743||e===9756||e===9758||e===9792||e===9794||e===9824||e===9825||e>=9827&&e<=9829||e>=9831&&e<=9834||e===9836||e===9837||e===9839||e===9886||e===9887||e===9919||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||e===9955||e===9960||e===9961||e>=9963&&e<=9969||e===9972||e>=9974&&e<=9977||e===9979||e===9980||e===9982||e===9983||e===10045||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||e===65533||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||e===127375||e===127376||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109},ke=(e)=>{return e===12288||e>=65281&&e<=65376||e>=65504&&e<=65510},Fe=(e)=>{return e>=4352&&e<=4447||e===8986||e===8987||e===9001||e===9002||e>=9193&&e<=9196||e===9200||e===9203||e===9725||e===9726||e===9748||e===9749||e>=9800&&e<=9811||e===9855||e===9875||e===9889||e===9898||e===9899||e===9917||e===9918||e===9924||e===9925||e===9934||e===9940||e===9962||e===9970||e===9971||e===9973||e===9978||e===9981||e===9989||e===9994||e===9995||e===10024||e===10060||e===10062||e>=10067&&e<=10069||e===10071||e>=10133&&e<=10135||e===10160||e===10175||e===11035||e===11036||e===11088||e===11093||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||e===94192||e===94193||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||e===110589||e===110590||e>=110592&&e<=110882||e===110898||e>=110928&&e<=110930||e===110933||e>=110948&&e<=110951||e>=110960&&e<=111355||e===126980||e===127183||e===127374||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||e===127568||e===127569||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||e===127988||e>=127992&&e<=128062||e===128064||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||e===128378||e===128405||e===128406||e===128420||e>=128507&&e<=128591||e>=128640&&e<=128709||e===128716||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||e===128747||e===128748||e>=128756&&e<=128764||e>=128992&&e<=129003||e===129008||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141};var ae=/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y,V=/[\x00-\x08\x0A-\x1F\x7F-\x9F]{1,1000}/y,Q=/\t{1,1000}/y,se=/[\u{1F1E6}-\u{1F1FF}]{2}|\u{1F3F4}[\u{E0061}-\u{E007A}]{2}[\u{E0030}-\u{E0039}\u{E0061}-\u{E007A}]{1,3}\u{E007F}|(?:\p{Emoji}\uFE0F\u20E3?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation})(?:\u200D(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F\u20E3?))*/yu,K=/(?:[\x20-\x7E\xA0-\xFF](?!\uFE0F)){1,1000}/y,Sa=/\p{M}+/gu,Ca={limit:1/0,ellipsis:""},Se=(e,a={},s={})=>{let n=a.limit??1/0,i=a.ellipsis??"",t=a?.ellipsisWidth??(i?Se(i,Ca,s).width:0),r=s.ansiWidth??0,o=s.controlWidth??0,d=s.tabWidth??8,u=s.ambiguousWidth??1,k=s.emojiWidth??2,h=s.fullWidthWidth??2,p=s.regularWidth??1,f=s.wideWidth??2,l=0,c=0,R=e.length,D=0,x=!1,F=R,w=Math.max(0,n-t),S=0,q=0,g=0,y=0;e:while(!0){if(q>S||c>=R&&c>l){let G=e.slice(S,q)||e.slice(l,c);D=0;for(let T of G.replaceAll(Sa,"")){let $=T.codePointAt(0)||0;if(ke($))y=h;else if(Fe($))y=f;else if(u!==p&&ve($))y=u;else y=p;if(g+y>w)F=Math.min(F,Math.max(S,l)+D);if(g+y>n){x=!0;break e}D+=T.length,g+=y}S=q=0}if(c>=R)break;if(K.lastIndex=c,K.test(e)){if(D=K.lastIndex-c,y=D*p,g+y>w)F=Math.min(F,c+Math.floor((w-g)/p));if(g+y>n){x=!0;break}g+=y,S=l,q=c,c=l=K.lastIndex;continue}if(ae.lastIndex=c,ae.test(e)){if(g+r>w)F=Math.min(F,c);if(g+r>n){x=!0;break}g+=r,S=l,q=c,c=l=ae.lastIndex;continue}if(V.lastIndex=c,V.test(e)){if(D=V.lastIndex-c,y=D*o,g+y>w)F=Math.min(F,c+Math.floor((w-g)/o));if(g+y>n){x=!0;break}g+=y,S=l,q=c,c=l=V.lastIndex;continue}if(Q.lastIndex=c,Q.test(e)){if(D=Q.lastIndex-c,y=D*d,g+y>w)F=Math.min(F,c+Math.floor((w-g)/d));if(g+y>n){x=!0;break}g+=y,S=l,q=c,c=l=Q.lastIndex;continue}if(se.lastIndex=c,se.test(e)){if(g+k>w)F=Math.min(F,c);if(g+k>n){x=!0;break}g+=k,S=l,q=c,c=l=se.lastIndex;continue}c+=1}return{width:x?w:g,index:x?F:R,truncated:x,ellipsed:x&&n>=t}},Ce=Se;var wa={limit:1/0,ellipsis:"",ellipsisWidth:0},Aa=(e,a={})=>{return Ce(e,wa,a).width},M=Aa;var Z="\x1B",Be="\x9B",Da=39,ie="\x07",Oe="[",xa="]",je="m",te=`${xa}8;;`,we=new RegExp(`(?:\\${Oe}(?<code>\\d+)m|\\${te}(?<uri>.*)${ie})`,"y"),Ae=(e)=>{if(e>=30&&e<=37)return 39;if(e>=90&&e<=97)return 39;if(e>=40&&e<=47)return 49;if(e>=100&&e<=107)return 49;if(e===1||e===2)return 22;if(e===3)return 23;if(e===4)return 24;if(e===7)return 27;if(e===8)return 28;if(e===9)return 29;if(e===0)return 0;return},De=(e)=>`${Z}${Oe}${e}${je}`,xe=(e)=>`${Z}${te}${e}${ie}`,ne=(e,a,s)=>{let n=a[Symbol.iterator](),i=!1,t=!1,r=e.at(-1),o=r===void 0?0:M(r),d=n.next(),u=n.next(),k=0;while(!d.done){let h=d.value,p=M(h);if(o+p<=s)e[e.length-1]+=h;else e.push(h),o=0;if(h===Z||h===Be)i=!0,t=a.startsWith(te,k+1);if(i){if(t){if(h===ie)i=!1,t=!1}else if(h===je)i=!1}else if(o+=p,o===s&&!u.done)e.push(""),o=0;d=u,u=n.next(),k+=h.length}if(r=e.at(-1),!o&&r!==void 0&&r.length&&e.length>1)e[e.length-2]+=e.pop()},Ba=(e)=>{let a=e.split(" "),s=a.length;while(s){if(M(a[s-1]))break;s--}if(s===a.length)return e;return a.slice(0,s).join(" ")+a.slice(s).join("")},Oa=(e,a,s={})=>{if(s.trim!==!1&&e.trim()==="")return"";let n="",i,t,r=e.split(" "),o=[""],d=0;for(let h=0;h<r.length;h++){let p=r[h];if(s.trim!==!1){let l=o.at(-1)??"",c=l.trimStart();if(l.length!==c.length)o[o.length-1]=c,d=M(c)}if(h!==0){if(d>=a&&(s.wordWrap===!1||s.trim===!1))o.push(""),d=0;if(d||s.trim===!1)o[o.length-1]+=" ",d++}let f=M(p);if(s.hard&&f>a){let l=a-d,c=1+Math.floor((f-l-1)/a);if(Math.floor((f-1)/a)<c)o.push("");ne(o,p,a),d=M(o.at(-1)??"");continue}if(d+f>a&&d&&f){if(s.wordWrap===!1&&d<a){ne(o,p,a),d=M(o.at(-1)??"");continue}o.push(""),d=0}if(d+f>a&&s.wordWrap===!1){ne(o,p,a),d=M(o.at(-1)??"");continue}o[o.length-1]+=p,d+=f}if(s.trim!==!1)o=o.map((h)=>Ba(h));let u=o.join(`
`),k=!1;for(let h=0;h<u.length;h++){let p=u[h];if(n+=p,!k)k=p>="\uD800"&&p<="\uDBFF";else continue;if(p===Z||p===Be){we.lastIndex=h+1;let l=we.exec(u)?.groups;if(l?.code!==void 0){let c=Number.parseFloat(l.code);i=c===Da?void 0:c}else if(l?.uri!==void 0)t=l.uri.length===0?void 0:l.uri}if(u[h+1]===`
`){if(t)n+=xe("");let f=i?Ae(i):void 0;if(i&&f)n+=De(f)}else if(p===`
`){if(i&&Ae(i))n+=De(i);if(t)n+=xe(t)}}return n},ja=/\r?\n/;function Y(e,a,s){return String(e).normalize().split(ja).map((n)=>Oa(n,a,s)).join(`
`)}var C=ye(re(),1);import{ReadStream as Me}from"tty";function de(e,a,s){if(!s.some((r)=>!r.disabled))return e;let n=e+a,i=Math.max(s.length-1,0),t=n<0?i:n>i?0:n;return s[t].disabled?de(t,a<0?-1:1,s):t}var Ra=["up","down","left","right","space","enter","cancel"],Ua=["January","February","March","April","May","June","July","August","September","October","November","December"],A={actions:new Set(Ra),aliases:new Map([["k","up"],["j","down"],["h","left"],["l","right"],["\x03","cancel"],["escape","cancel"]]),messages:{cancel:"Canceled",error:"Something went wrong"},withGuide:!0,date:{monthNames:[...Ua],messages:{required:"Please enter a valid date",invalidMonth:"There are only 12 months in a year",invalidDay:(e,a)=>`There are only ${e} days in ${a}`,afterMin:(e)=>`Date must be on or after ${e.toISOString().slice(0,10)}`,beforeMax:(e)=>`Date must be on or before ${e.toISOString().slice(0,10)}`}}};function me(e,a){if(typeof e=="string")return A.aliases.get(e)===a;for(let s of e)if(s!==void 0&&me(s,a))return!0;return!1}function Na(e,a){if(e===a)return;let s=e.split(`
`),n=a.split(`
`),i=Math.max(s.length,n.length),t=[];for(let r=0;r<i;r++)s[r]!==n[r]&&t.push(r);return{lines:t,numLinesBefore:s.length,numLinesAfter:n.length,numLines:i}}var Ia=globalThis.process.platform.startsWith("win"),Re=Symbol("clack:cancel");function H(e,a){let s=e;s.isTTY&&s.setRawMode(a)}function Ye({input:e=Ie,output:a=pe,overwrite:s=!0,hideCursor:n=!0}={}){let i=I.createInterface({input:e,output:a,prompt:"",tabSize:1});I.emitKeypressEvents(e,i),e instanceof Me&&e.isTTY&&e.setRawMode(!0);let t=(r,{name:o,sequence:d})=>{let u=String(r);if(me([u,o,d],"cancel")){n&&a.write(C.cursor.show),process.exit(0);return}if(!s)return;I.moveCursor(a,o==="return"?0:-1,o==="return"?-1:0,()=>{I.clearLine(a,1,()=>{e.once("keypress",t)})})};return n&&a.write(C.cursor.hide),e.once("keypress",t),()=>{e.off("keypress",t),n&&a.write(C.cursor.show),e instanceof Me&&e.isTTY&&!Ia&&e.setRawMode(!1),i.terminal=!1,i.close()}}var he=(e)=>("columns"in e)&&typeof e.columns=="number"?e.columns:80,Te=(e)=>("rows"in e)&&typeof e.rows=="number"?e.rows:20;function $e(e,a,s,n=s){let i=he(e??pe);return Y(a,i-s.length,{hard:!0,trim:!1}).split(`
`).map((t,r)=>`${r===0?n:s}${t}`).join(`
`)}var X=class{input;output;_abortSignal;rl;opts;_render;_track=!1;_prevFrame="";_subscribers=new Map;_cursor=0;state="initial";error="";value;userInput="";constructor(e,a=!0){let{input:s=Ie,output:n=pe,render:i,signal:t,...r}=e;this.opts=r,this.onKeypress=this.onKeypress.bind(this),this.close=this.close.bind(this),this.render=this.render.bind(this),this._render=i.bind(this),this._track=a,this._abortSignal=t,this.input=s,this.output=n}unsubscribe(){this._subscribers.clear()}setSubscriber(e,a){let s=this._subscribers.get(e)??[];s.push(a),this._subscribers.set(e,s)}on(e,a){this.setSubscriber(e,{cb:a})}once(e,a){this.setSubscriber(e,{cb:a,once:!0})}emit(e,...a){let s=this._subscribers.get(e)??[],n=[];for(let i of s)i.cb(...a),i.once&&n.push(()=>s.splice(s.indexOf(i),1));for(let i of n)i()}prompt(){return new Promise((e)=>{if(this._abortSignal){if(this._abortSignal.aborted)return this.state="cancel",this.close(),e(Re);this._abortSignal.addEventListener("abort",()=>{this.state="cancel",this.close()},{once:!0})}this.rl=Ma.createInterface({input:this.input,tabSize:2,prompt:"",escapeCodeTimeout:50,terminal:!0}),this.rl.prompt(),this.opts.initialUserInput!==void 0&&this._setUserInput(this.opts.initialUserInput,!0),this.input.on("keypress",this.onKeypress),H(this.input,!0),this.output.on("resize",this.render),this.render(),this.once("submit",()=>{this.output.write(C.cursor.show),this.output.off("resize",this.render),H(this.input,!1),e(this.value)}),this.once("cancel",()=>{this.output.write(C.cursor.show),this.output.off("resize",this.render),H(this.input,!1),e(Re)})})}_isActionKey(e,a){return e==="\t"}_setValue(e){this.value=e,this.emit("value",this.value)}_setUserInput(e,a){this.userInput=e??"",this.emit("userInput",this.userInput),a&&this._track&&this.rl&&(this.rl.write(this.userInput),this._cursor=this.rl.cursor)}_clearUserInput(){this.rl?.write(null,{ctrl:!0,name:"u"}),this._setUserInput("")}onKeypress(e,a){if(this._track&&a.name!=="return"&&(a.name&&this._isActionKey(e,a)&&this.rl?.write(null,{ctrl:!0,name:"h"}),this._cursor=this.rl?.cursor??0,this._setUserInput(this.rl?.line)),this.state==="error"&&(this.state="active"),a?.name&&(!this._track&&A.aliases.has(a.name)&&this.emit("cursor",A.aliases.get(a.name)),A.actions.has(a.name)&&this.emit("cursor",a.name)),e&&(e.toLowerCase()==="y"||e.toLowerCase()==="n")&&this.emit("confirm",e.toLowerCase()==="y"),this.emit("key",e?.toLowerCase(),a),a?.name==="return"){if(this.opts.validate){let s=this.opts.validate(this.value);s&&(this.error=s instanceof Error?s.message:s,this.state="error",this.rl?.write(this.userInput))}this.state!=="error"&&(this.state="submit")}me([e,a?.name,a?.sequence],"cancel")&&(this.state="cancel"),(this.state==="submit"||this.state==="cancel")&&this.emit("finalize"),this.render(),(this.state==="submit"||this.state==="cancel")&&this.close()}close(){this.input.unpipe(),this.input.removeListener("keypress",this.onKeypress),this.output.write(`
`),H(this.input,!1),this.rl?.close(),this.rl=void 0,this.emit(`${this.state}`,this.value),this.unsubscribe()}restoreCursor(){let e=Y(this._prevFrame,process.stdout.columns,{hard:!0,trim:!1}).split(`
`).length-1;this.output.write(C.cursor.move(-999,e*-1))}render(){let e=Y(this._render(this)??"",process.stdout.columns,{hard:!0,trim:!1});if(e!==this._prevFrame){if(this.state==="initial")this.output.write(C.cursor.hide);else{let a=Na(this._prevFrame,e),s=Te(this.output);if(this.restoreCursor(),a){let n=Math.max(0,a.numLinesAfter-s),i=Math.max(0,a.numLinesBefore-s),t=a.lines.find((r)=>r>=n);if(t===void 0){this._prevFrame=e;return}if(a.lines.length===1){this.output.write(C.cursor.move(0,t-i)),this.output.write(C.erase.lines(1));let r=e.split(`
`);this.output.write(r[t]),this._prevFrame=e,this.output.write(C.cursor.move(0,r.length-t-1));return}else if(a.lines.length>1){if(n<i)t=n;else{let o=t-i;o>0&&this.output.write(C.cursor.move(0,o))}this.output.write(C.erase.down());let r=e.split(`
`).slice(t);this.output.write(r.join(`
`)),this._prevFrame=e;return}}this.output.write(C.erase.down())}this.output.write(e),this.state==="initial"&&(this.state="active"),this._prevFrame=e}}};function Ya(e,a){if(e===void 0||a.length===0)return 0;let s=a.findIndex((n)=>n.value===e);return s!==-1?s:0}function Ta(e,a){return(a.label??String(a.value)).toLowerCase().includes(e.toLowerCase())}function $a(e,a){if(a)return e?a:a[0]}var Ea=class extends X{filteredOptions;multiple;isNavigating=!1;selectedValues=[];focusedValue;#e=0;#r="";#a;#s;#t;get cursor(){return this.#e}get userInputWithCursor(){if(!this.userInput)return qe(["inverse","hidden"],"_");if(this._cursor>=this.userInput.length)return`${this.userInput}\u2588`;let e=this.userInput.slice(0,this._cursor),[a,...s]=this.userInput.slice(this._cursor);return`${e}${qe("inverse",a)}${s.join("")}`}get options(){return typeof this.#s=="function"?this.#s():this.#s}constructor(e){super(e),this.#s=e.options,this.#t=e.placeholder;let a=this.options;this.filteredOptions=[...a],this.multiple=e.multiple===!0,this.#a=typeof e.options=="function"?e.filter:e.filter??Ta;let s;if(e.initialValue&&Array.isArray(e.initialValue)?this.multiple?s=e.initialValue:s=e.initialValue.slice(0,1):!this.multiple&&this.options.length>0&&(s=[this.options[0].value]),s)for(let n of s){let i=a.findIndex((t)=>t.value===n);i!==-1&&(this.toggleSelected(n),this.#e=i)}this.focusedValue=this.options[this.#e]?.value,this.on("key",(n,i)=>this.#n(n,i)),this.on("userInput",(n)=>this.#i(n))}_isActionKey(e,a){return e==="\t"||this.multiple&&this.isNavigating&&a.name==="space"&&e!==void 0&&e!==""}#n(e,a){let s=a.name==="up",n=a.name==="down",i=a.name==="return",t=this.userInput===""||this.userInput==="\t",r=this.#t,o=this.options,d=r!==void 0&&r!==""&&o.some((u)=>!u.disabled&&(this.#a?this.#a(r,u):!0));if(a.name==="tab"&&t&&d){this.userInput==="\t"&&this._clearUserInput(),this._setUserInput(r,!0),this.isNavigating=!1;return}s||n?(this.#e=de(this.#e,s?-1:1,this.filteredOptions),this.focusedValue=this.filteredOptions[this.#e]?.value,this.multiple||(this.selectedValues=[this.focusedValue]),this.isNavigating=!0):i?this.value=$a(this.multiple,this.selectedValues):this.multiple?this.focusedValue!==void 0&&(a.name==="tab"||this.isNavigating&&a.name==="space")?this.toggleSelected(this.focusedValue):this.isNavigating=!1:(this.focusedValue&&(this.selectedValues=[this.focusedValue]),this.isNavigating=!1)}deselectAll(){this.selectedValues=[]}toggleSelected(e){this.filteredOptions.length!==0&&(this.multiple?this.selectedValues.includes(e)?this.selectedValues=this.selectedValues.filter((a)=>a!==e):this.selectedValues=[...this.selectedValues,e]:this.selectedValues=[e])}#i(e){if(e!==this.#r){this.#r=e;let a=this.options;e&&this.#a?this.filteredOptions=a.filter((i)=>this.#a?.(e,i)):this.filteredOptions=[...a];let s=Ya(this.focusedValue,this.filteredOptions);this.#e=de(s,0,this.filteredOptions);let n=this.filteredOptions[this.#e];n&&!n.disabled?this.focusedValue=n.value:this.focusedValue=void 0,this.multiple||(this.focusedValue!==void 0?this.toggleSelected(this.focusedValue):this.deselectAll())}}};class ue extends X{get cursor(){return this.value?0:1}get _value(){return this.cursor===0}constructor(e){super(e,!1),this.value=!!e.initialValue,this.on("userInput",()=>{this.value=this._value}),this.on("confirm",(a)=>{this.output.write(C.cursor.move(0,-1)),this.value=a,this.state="submit",this.close()}),this.on("cursor",()=>{this.value=!this.value})}}var Ja={Y:{type:"year",len:4},M:{type:"month",len:2},D:{type:"day",len:2}};function Ue(e){return[...e].map((a)=>Ja[a])}function La(e){let a=new Intl.DateTimeFormat(e,{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(2000,0,15)),s=[],n="/";for(let i of a)i.type==="literal"?n=i.value.trim()||i.value:(i.type==="year"||i.type==="month"||i.type==="day")&&s.push({type:i.type,len:i.type==="year"?4:2});return{segments:s,separator:n}}function le(e){return Number.parseInt((e||"0").replace(/_/g,"0"),10)||0}function _(e){return{year:le(e.year),month:le(e.month),day:le(e.day)}}function ce(e,a){return new Date(e||2001,a||1,0).getDate()}function Ee(e){let{year:a,month:s,day:n}=_(e);if(!a||a<0||a>9999||!s||s<1||s>12||!n||n<1)return;let i=new Date(Date.UTC(a,s-1,n));if(!(i.getUTCFullYear()!==a||i.getUTCMonth()!==s-1||i.getUTCDate()!==n))return{year:a,month:s,day:n}}function Ne(e){let a=Ee(e);return a?new Date(Date.UTC(a.year,a.month-1,a.day)):void 0}function Ga(e,a,s,n){let i=s?{year:s.getUTCFullYear(),month:s.getUTCMonth()+1,day:s.getUTCDate()}:null,t=n?{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate()}:null;return e==="year"?{min:i?.year??1,max:t?.year??9999}:e==="month"?{min:i&&a.year===i.year?i.month:1,max:t&&a.year===t.year?t.month:12}:{min:i&&a.year===i.year&&a.month===i.month?i.day:1,max:t&&a.year===t.year&&a.month===t.month?t.day:ce(a.year,a.month)}}class Je extends X{#e;#r;#a;#s;#t;#n={segmentIndex:0,positionInSegment:0};#i=!0;#o=null;inlineError="";get segmentCursor(){return{...this.#n}}get segmentValues(){return{...this.#a}}get segments(){return this.#e}get separator(){return this.#r}get formattedValue(){return this.#d(this.#a)}#d(e){return this.#e.map((a)=>e[a.type]).join(this.#r)}#l(){this._setUserInput(this.#d(this.#a)),this._setValue(Ne(this.#a)??void 0)}constructor(e){let a=e.format?{segments:Ue(e.format),separator:e.separator??"/"}:La(e.locale),s=e.separator??a.separator,n=e.format?Ue(e.format):a.segments,i=e.initialValue??e.defaultValue,t=i?{year:String(i.getUTCFullYear()).padStart(4,"0"),month:String(i.getUTCMonth()+1).padStart(2,"0"),day:String(i.getUTCDate()).padStart(2,"0")}:{year:"____",month:"__",day:"__"},r=n.map((o)=>t[o.type]).join(s);super({...e,initialUserInput:r},!1),this.#e=n,this.#r=s,this.#a=t,this.#s=e.minDate,this.#t=e.maxDate,this.#l(),this.on("cursor",(o)=>this.#h(o)),this.on("key",(o,d)=>this.#b(o,d)),this.on("finalize",()=>this.#f(e))}#c(){let e=Math.max(0,Math.min(this.#n.segmentIndex,this.#e.length-1)),a=this.#e[e];if(a)return this.#n.positionInSegment=Math.max(0,Math.min(this.#n.positionInSegment,a.len-1)),{segment:a,index:e}}#p(e){this.inlineError="",this.#o=null;let a=this.#c();a&&(this.#n.segmentIndex=Math.max(0,Math.min(this.#e.length-1,a.index+e)),this.#n.positionInSegment=0,this.#i=!0)}#m(e){let a=this.#c();if(!a)return;let{segment:s}=a,n=this.#a[s.type],i=!n||n.replace(/_/g,"")==="",t=Number.parseInt((n||"0").replace(/_/g,"0"),10)||0,r=Ga(s.type,_(this.#a),this.#s,this.#t),o;i?o=e===1?r.min:r.max:o=Math.max(Math.min(r.max,t+e),r.min),this.#a={...this.#a,[s.type]:o.toString().padStart(s.len,"0")},this.#i=!0,this.#o=null,this.#l()}#h(e){if(e)switch(e){case"right":return this.#p(1);case"left":return this.#p(-1);case"up":return this.#m(1);case"down":return this.#m(-1)}}#b(e,a){if(a?.name==="backspace"||a?.sequence==="\x7F"||a?.sequence==="\b"||e==="\x7F"||e==="\b"){this.inlineError="";let s=this.#c();if(!s)return;if(!this.#a[s.segment.type].replace(/_/g,"")){this.#p(-1);return}this.#a[s.segment.type]="_".repeat(s.segment.len),this.#i=!0,this.#n.positionInSegment=0,this.#l();return}if(a?.name==="tab"){this.inlineError="";let s=this.#c();if(!s)return;let n=a.shift?-1:1,i=s.index+n;i>=0&&i<this.#e.length&&(this.#n.segmentIndex=i,this.#n.positionInSegment=0,this.#i=!0);return}if(e&&/^[0-9]$/.test(e)){let s=this.#c();if(!s)return;let{segment:n}=s,i=!this.#a[n.type].replace(/_/g,"");if(this.#i&&this.#o!==null&&!i){let p=this.#o+e,f={...this.#a,[n.type]:p},l=this.#u(f,n);if(l){this.inlineError=l,this.#o=null,this.#i=!1;return}this.inlineError="",this.#a[n.type]=p,this.#o=null,this.#i=!1,this.#l(),s.index<this.#e.length-1&&(this.#n.segmentIndex=s.index+1,this.#n.positionInSegment=0,this.#i=!0);return}this.#i&&!i&&(this.#a[n.type]="_".repeat(n.len),this.#n.positionInSegment=0),this.#i=!1,this.#o=null;let t=this.#a[n.type],r=t.indexOf("_"),o=r>=0?r:Math.min(this.#n.positionInSegment,n.len-1);if(o<0||o>=n.len)return;let d=t.slice(0,o)+e+t.slice(o+1),u=!1;if(o===0&&t==="__"&&(n.type==="month"||n.type==="day")){let p=Number.parseInt(e,10);d=`0${e}`,u=p<=(n.type==="month"?1:2)}if(n.type==="year"&&(d=(t.replace(/_/g,"")+e).padStart(n.len,"_")),!d.includes("_")){let p={...this.#a,[n.type]:d},f=this.#u(p,n);if(f){this.inlineError=f;return}}this.inlineError="",this.#a[n.type]=d;let k=d.includes("_")?void 0:Ee(this.#a);if(k){let{year:p,month:f}=k,l=ce(p,f);this.#a={year:String(Math.max(0,Math.min(9999,p))).padStart(4,"0"),month:String(Math.max(1,Math.min(12,f))).padStart(2,"0"),day:String(Math.max(1,Math.min(l,k.day))).padStart(2,"0")}}this.#l();let h=d.indexOf("_");u?(this.#i=!0,this.#o=e):h>=0?this.#n.positionInSegment=h:r>=0&&s.index<this.#e.length-1?(this.#n.segmentIndex=s.index+1,this.#n.positionInSegment=0,this.#i=!0):this.#n.positionInSegment=Math.min(o+1,n.len-1)}}#u(e,a){let{month:s,day:n}=_(e);if(a.type==="month"&&(s<0||s>12))return A.date.messages.invalidMonth;if(a.type==="day"&&(n<0||n>31))return A.date.messages.invalidDay(31,"any month")}#f(e){let{year:a,month:s,day:n}=_(this.#a);if(a&&s&&n){let i=ce(a,s);this.#a={...this.#a,day:String(Math.min(n,i)).padStart(2,"0")}}this.value=Ne(this.#a)??e.defaultValue??void 0}}class Le extends X{options;cursor=0;#e;getGroupItems(e){return this.options.filter((a)=>a.group===e)}isGroupSelected(e){let a=this.getGroupItems(e),s=this.value;return s===void 0?!1:a.every((n)=>s.includes(n.value))}toggleValue(){let e=this.options[this.cursor];if(this.value===void 0&&(this.value=[]),e.group===!0){let a=e.value,s=this.getGroupItems(a);this.isGroupSelected(a)?this.value=this.value.filter((n)=>s.findIndex((i)=>i.value===n)===-1):this.value=[...this.value,...s.map((n)=>n.value)],this.value=Array.from(new Set(this.value))}else{let a=this.value.includes(e.value);this.value=a?this.value.filter((s)=>s!==e.value):[...this.value,e.value]}}constructor(e){super(e,!1);let{options:a}=e;this.#e=e.selectableGroups!==!1,this.options=Object.entries(a).flatMap(([s,n])=>[{value:s,group:!0,label:s},...n.map((i)=>({...i,group:s}))]),this.value=[...e.initialValues??[]],this.cursor=Math.max(this.options.findIndex(({value:s})=>s===e.cursorAt),this.#e?0:1),this.on("cursor",(s)=>{switch(s){case"left":case"up":{this.cursor=this.cursor===0?this.options.length-1:this.cursor-1;let n=this.options[this.cursor]?.group===!0;!this.#e&&n&&(this.cursor=this.cursor===0?this.options.length-1:this.cursor-1);break}case"down":case"right":{this.cursor=this.cursor===this.options.length-1?0:this.cursor+1;let n=this.options[this.cursor]?.group===!0;!this.#e&&n&&(this.cursor=this.cursor===this.options.length-1?0:this.cursor+1);break}case"space":this.toggleValue();break}})}}import{styleText as m,stripVTControlCharacters as Es}from"util";import j from"process";var L=ye(re(),1);function Wa(){return j.platform!=="win32"?j.env.TERM!=="linux":!!j.env.CI||!!j.env.WT_SESSION||!!j.env.TERMINUS_SUBLIME||j.env.ConEmuTask==="{cmd::Cmder}"||j.env.TERM_PROGRAM==="Terminus-Sublime"||j.env.TERM_PROGRAM==="vscode"||j.env.TERM==="xterm-256color"||j.env.TERM==="alacritty"||j.env.TERMINAL_EMULATOR==="JetBrains-JediTerm"}var be=Wa(),Va=()=>process.env.CI==="true";var b=(e,a)=>be?e:a,Qa=b("\u25C6","*"),We=b("\u25A0","x"),Ve=b("\u25B2","x"),fe=b("\u25C7","o"),Ka=b("\u250C","T"),O=b("\u2502","|"),Qe=b("\u2514","\u2014"),zs=b("\u2510","T"),Ws=b("\u2518","\u2014"),Ge=b("\u25CF",">"),ze=b("\u25CB"," "),Vs=b("\u25FB","[\u2022]"),Qs=b("\u25FC","[+]"),Ks=b("\u25FB","[ ]"),Zs=b("\u25AA","\u2022"),Hs=b("\u2500","-"),_s=b("\u256E","+"),Xs=b("\u251C","+"),en=b("\u256F","+"),an=b("\u2570","+"),sn=b("\u256D","+"),Za=b("\u25CF","\u2022"),Ha=b("\u25C6","*"),_a=b("\u25B2","!"),Xa=b("\u25A0","x"),es=(e)=>{switch(e){case"initial":case"active":return m("cyan",Qa);case"cancel":return m("red",We);case"error":return m("yellow",Ve);case"submit":return m("green",fe)}};var Ke=(e)=>{let a=e.active??"Yes",s=e.inactive??"No";return new ue({active:a,inactive:s,signal:e.signal,input:e.input,output:e.output,initialValue:e.initialValue??!0,render(){let n=e.withGuide??A.withGuide,i=`${es(this.state)}  `,t=n?`${m("gray",O)}  `:"",r=$e(e.output,e.message,t,i),o=`${n?`${m("gray",O)}
`:""}${r}
`,d=this.value?a:s;switch(this.state){case"submit":{let u=n?`${m("gray",O)}  `:"";return`${o}${u}${m("dim",d)}`}case"cancel":{let u=n?`${m("gray",O)}  `:"";return`${o}${u}${m(["strikethrough","dim"],d)}${n?`
${m("gray",O)}`:""}`}default:{let u=n?`${m("cyan",O)}  `:"",k=n?m("cyan",Qe):"";return`${o}${u}${this.value?`${m("green",Ge)} ${a}`:`${m("dim",ze)} ${m("dim",a)}`}${e.vertical?n?`
${m("cyan",O)}  `:`
`:` ${m("dim","/")} `}${this.value?`${m("dim",ze)} ${m("dim",s)}`:`${m("green",Ge)} ${s}`}
${k}
`}}}}).prompt()};var P={message:(e=[],{symbol:a=m("gray",O),secondarySymbol:s=m("gray",O),output:n=process.stdout,spacing:i=1,withGuide:t}={})=>{let r=[],o=t??A.withGuide,d=o?s:"",u=o?`${a}  `:"",k=o?`${s}  `:"";for(let p=0;p<i;p++)r.push(d);let h=Array.isArray(e)?e:e.split(`
`);if(h.length>0){let[p,...f]=h;p.length>0?r.push(`${u}${p}`):r.push(o?a:"");for(let l of f)l.length>0?r.push(`${k}${l}`):r.push(o?s:"")}n.write(`${r.join(`
`)}
`)},info:(e,a)=>{P.message(e,{...a,symbol:m("blue",Za)})},success:(e,a)=>{P.message(e,{...a,symbol:m("green",Ha)})},step:(e,a)=>{P.message(e,{...a,symbol:m("green",fe)})},warn:(e,a)=>{P.message(e,{...a,symbol:m("yellow",_a)})},warning:(e,a)=>{P.warn(e,a)},error:(e,a)=>{P.message(e,{...a,symbol:m("red",Xa)})}};var Ze=(e="",a)=>{let s=a?.output??process.stdout,n=a?.withGuide??A.withGuide?`${m("gray",Ka)}  `:"";s.write(`${n}${e}
`)},He=(e="",a)=>{let s=a?.output??process.stdout,n=a?.withGuide??A.withGuide?`${m("gray",O)}
${m("gray",Qe)}  `:"";s.write(`${n}${e}

`)};var as=(e)=>m("magenta",e),_e=({indicator:e="dots",onCancel:a,output:s=process.stdout,cancelMessage:n,errorMessage:i,frames:t=be?["\u25D2","\u25D0","\u25D3","\u25D1"]:["\u2022","o","O","0"],delay:r=be?80:120,signal:o,...d}={})=>{let u=Va(),k,h,p=!1,f=!1,l="",c,R=performance.now(),D=he(s),x=d?.styleFrame??as,F=(v)=>{let B=v>1?i??A.messages.error:n??A.messages.cancel;f=v===1,p&&(E(B,v),f&&typeof a=="function"&&a())},w=()=>F(2),S=()=>F(1),q=()=>{process.on("uncaughtExceptionMonitor",w),process.on("unhandledRejection",w),process.on("SIGINT",S),process.on("SIGTERM",S),process.on("exit",F),o&&o.addEventListener("abort",S)},g=()=>{process.removeListener("uncaughtExceptionMonitor",w),process.removeListener("unhandledRejection",w),process.removeListener("SIGINT",S),process.removeListener("SIGTERM",S),process.removeListener("exit",F),o&&o.removeEventListener("abort",S)},y=()=>{if(c===void 0)return;u&&s.write(`
`);let v=Y(c,D,{hard:!0,trim:!1}).split(`
`);v.length>1&&s.write(L.cursor.up(v.length-1)),s.write(L.cursor.to(0)),s.write(L.erase.down())},G=(v)=>v.replace(/\.+$/,""),T=(v)=>{let B=(performance.now()-v)/1000,U=Math.floor(B/60),N=Math.floor(B%60);return U>0?`[${U}m ${N}s]`:`[${N}s]`},$=d.withGuide??A.withGuide,ca=(v="")=>{p=!0,k=Ye({output:s}),l=G(v),R=performance.now(),$&&s.write(`${m("gray",O)}
`);let B=0,U=0;q(),h=setInterval(()=>{if(u&&l===c)return;y(),c=l;let N=x(t[B]),z;if(u)z=`${N}  ${l}...`;else if(e==="timer")z=`${N}  ${l} ${T(R)}`;else{let ma=".".repeat(Math.floor(U)).slice(0,3);z=`${N}  ${l}${ma}`}let pa=Y(z,D,{hard:!0,trim:!1});s.write(pa),B=B+1<t.length?B+1:0,U=U<4?U+0.125:0},r)},E=(v="",B=0,U=!1)=>{if(!p)return;p=!1,clearInterval(h),y();let N=B===0?m("green",fe):B===1?m("red",We):m("red",Ve);l=v??l,U||(e==="timer"?s.write(`${N}  ${l} ${T(R)}
`):s.write(`${N}  ${l}
`)),g(),k()};return{start:ca,stop:(v="")=>E(v,0),message:(v="")=>{l=G(v??l)},cancel:(v="")=>E(v,1),error:(v="")=>E(v,2),clear:()=>E("",0,!0),get isCancelled(){return f}}},nn={light:b("\u2500","-"),heavy:b("\u2501","="),block:b("\u2588","#")};var tn=`${m("gray",O)}  `;var Xe="# Obsidian Vault + OpenSpec Workflow\n\n## Available Skills\n\nLoad these when working with Obsidian or OpenSpec:\n- `obsidian-markdown` \u2014 OFM, wikilinks, embeds, callouts, frontmatter\n- `obsidian-cli` \u2014 Interact with vault, notes, tasks, plugins\n- `obsidian-bases` \u2014 .base files, views, filters, formulas\n- `json-canvas` \u2014 .canvas files, nodes, edges\n- `defuddle` \u2014 Clean markdown from URLs\n- `openspec-propose` \u2014 Create changes with proposal/design/tasks\n- `openspec-apply-change` \u2014 Implement tasks from a change\n- `openspec-archive-change` \u2014 Archive completed changes\n\n## Vault Structure\n\n| Folder | Content |\n|--------|---------|\n| `Context/` | Profile, Business, ICP, Goals, Projects |\n| `Daily/` | `YYYY-MM-DD.md` \u2014 one note per day |\n| `Intelligence/` | Research, decisions, architecture |\n| `Resources/` | Templates, patterns, snippets |\n| `Inbox.md` | Unsorted ideas |\n| `openspec/changes/` | OpenSpec changes |\n| `openspec/specs/` | OpenSpec specifications |\n\n## Required Frontmatter\n\n```yaml\n---\ndate: YYYY-MM-DD\ntags: []\ntype: note | project | context | daily | research | resource\nstatus: draft | active | archive\n---\n```\n\n## Wiki Links\n\n- Link: `[[Note Name]]`\n- Embed: `![[Note#Section]]`\n- Label: `[[path|Display Text]]`\n\n## OpenSpec Workflow\n\n1. Propose: `openspec new change <name>` or use `openspec-propose` skill\n2. Design: Create `proposal.md`, `design.md`, `tasks.md`\n3. Implement: Use `openspec-apply-change` skill\n4. Archive: Use `openspec-archive-change` skill\n\n## Vault Rules\n\n- Update `Daily/YYYY-MM-DD.md` after every action\n- Every note needs at least one wiki link\n- Rejected ideas \u2192 `status: archive`, never delete\n\n\n## Vault Growth\n\n- Well-reasoned technical/business decision \u2192 `Intelligence/`\n- Reusable pattern/snippet \u2192 `Resources/`\n- Technical project \u2192 its own `CLAUDE.md` (the vault connects them)\n\n## Reminders\n\n- Vault = thought journal, not a record of final decisions\n- Rejected ideas = `status: archive`, never deleted\n\n## Token Optimization\n- Responses: short, direct, no preamble, no summary\n- No \"I'll now...\", no \"Great!\", no redundant explanations\n- Code only when asked; prefer inline edits over full file rewrites\n- If unsure, ask one short question \u2014 don't guess and over-generate\n\n## File Access \u2014 NEVER READ\n- All paths matching .gitignore patterns (see below)\n- node_modules/, .venv/, venv/, env/, __pycache__/, target/, dist/, build/\n- *.lock files (package-lock.json, yarn.lock, Cargo.lock, poetry.lock, uv.lock)\n- *.log, *.tmp, *.cache\n- .git/ internals\n- coverage/, .nyc_output/, htmlcov/\n- .next/, .nuxt/, .svelte-kit/, out/\n- *.min.js, *.min.css, *.map\n- __generated__/, generated/, vendor/\n- .terraform/, .pulumi/\n- *.egg-info/, .eggs/, dist-info/\n\n## Common .gitignore to create if missing\nIf no .gitignore exists, create one with:\n```\n# Dependencies\nnode_modules/\n.venv/\nvenv/\nenv/\n\n# Build outputs\ndist/\nbuild/\ntarget/\nout/\n*.egg-info/\n\n# Cache\n__pycache__/\n.cache/\n.next/\n.nuxt/\ncoverage/\nhtmlcov/\n.nyc_output/\n\n# Locks (read-only, skip)\n# package-lock.json  \u2190 keep for npm ci\n# Cargo.lock         \u2190 keep for bins\n\n# Env & secrets\n.env\n.env.*\n!.env.example\n\n# IDE\n.idea/\n.vscode/\n*.swp\n\n# OS\n.DS_Store\nThumbs.db\n```\n\n## Exploration Strategy\n1. Read only: README, package.json / Cargo.toml / pyproject.toml / go.mod\n2. Then: src/ or lib/ entry points\n3. Ask before reading more than 5 files in one go\n\n## Response Format\n- Bug fix \u2192 show only the changed lines + brief reason\n- New feature \u2192 minimal working implementation, no scaffolding unless asked\n- Explanation \u2192 3 lines max unless more depth is explicitly requested\n\n\n## Hard Rules\n\n1. **Daily first** \u2014 Update `Daily/YYYY-MM-DD.md` after every action (summary, decisions, links to affected notes)\n2. **No orphans** \u2014 Every note has at least one wiki link `[[incoming or outgoing]]`\n3. **Capture everything** \u2014 Ideas, decisions, and rejections in `Inbox.md` or a dedicated note\n";var ea=`# Obsidian CLI \u2014 Full Command Reference

Complete reference for all official Obsidian CLI commands (v1.12+).

**Syntax**: \`obsidian [vault] <command> [subcommand] [key=value ...] [flags]\`

All parameters use \`key=value\` syntax. Quote values containing spaces: \`content="hello world"\`.

---

## Table of Contents

1. [Files](#files)
2. [Daily Notes](#daily-notes)
3. [Search](#search)
4. [Properties](#properties)
5. [Tags](#tags)
6. [Tasks](#tasks)
7. [Links](#links)
8. [Bookmarks](#bookmarks)
9. [Templates](#templates)
10. [Plugins](#plugins)
11. [Sync](#sync)
12. [Themes](#themes)
13. [CSS Snippets](#css-snippets)
14. [Commands & Hotkeys](#commands--hotkeys)
15. [Obsidian Bases](#obsidian-bases)
16. [History](#history)
17. [Workspace & Tabs](#workspace--tabs)
18. [Diff](#diff)
19. [Developer](#developer)
20. [Vault & System](#vault--system)

---

## Files

File operations: read, write, create, move, delete, list.

### Reading Notes

\`\`\`bash
obsidian read path="folder/note.md"
\`\`\`

Prints raw markdown content of a note to stdout. Path is vault-relative.

### Creating Notes

\`\`\`bash
obsidian create path="folder/note" content="# Title\\n\\nBody text"
obsidian create path="folder/note" template="template-name"
\`\`\`

- Path should **not** include \`.md\` \u2014 it is appended automatically.
- Use \`template=\` to create from a template file.
- Use \`content=\` to set initial content directly.

### Appending & Prepending

\`\`\`bash
obsidian append path="folder/note.md" content="Appended text"
obsidian prepend path="folder/note.md" content="Prepended text"
\`\`\`

- \`append\` adds content at the end of the file.
- \`prepend\` adds content after the frontmatter (not at byte 0).

### Moving & Renaming

\`\`\`bash
obsidian move path="old/path/note.md" to="new/path/note.md"
\`\`\`

- \`to=\` is the full vault-relative target path including the \`.md\` extension.
- Can be used to move, rename, or both in a single command.

### Deleting

\`\`\`bash
obsidian delete path="folder/note.md"           # Moves to trash
obsidian delete path="folder/note.md" permanent  # Permanent deletion
\`\`\`

### File Discovery

\`\`\`bash
obsidian files                       # List all files in vault
obsidian files ext=md                # Filter by extension
obsidian files folder="subfolder"    # Files in specific folder
obsidian files total                 # Just the file count
obsidian folders                     # List all folders
obsidian file path="folder/note.md"  # File info (size, created, modified dates)
\`\`\`

### Random Notes

\`\`\`bash
obsidian random           # Open a random note in Obsidian
obsidian random:read      # Print content of a random note to stdout
\`\`\`

### Renaming

\`\`\`bash
obsidian rename path="folder/note.md" name="new-name"
\`\`\`

- \`name=\` is the new filename only (no path, no \`.md\` extension).
- Use \`move\` when you also want to change the folder.

---

## Daily Notes

Operations on the daily note (requires Daily Notes core plugin enabled).

\`\`\`bash
obsidian daily                           # Open today's daily note in Obsidian
obsidian daily:read                      # Print today's daily note content to stdout
obsidian daily:append content="text"     # Append content to today's note
obsidian daily:prepend content="text"    # Prepend content (after frontmatter)
obsidian daily:path                      # Print vault-relative path of today's note
\`\`\`

**Notes:**
- \`daily:prepend\` inserts content after the frontmatter block, not at the very beginning.
- If today's note doesn't exist, \`daily\` will create it (using the configured template if set).
- Daily note format/folder are configured in Obsidian's Daily Notes plugin settings.

---

## Search

Full-text search across the vault.

\`\`\`bash
obsidian search query="search text"
obsidian search query="text" path="folder"         # Scope to folder
obsidian search query="text" limit=10               # Limit results
obsidian search query="text" format=json            # JSON output (array of file paths)
obsidian search query="text" matches                # Accepted but returns file paths only
obsidian search query="text" case                   # Case-sensitive search
\`\`\`

**Parameters:**
- \`query=\` \u2014 Search term (required)
- \`path=\` \u2014 Restrict search to a folder
- \`limit=\` \u2014 Maximum number of results
- \`format=json\` \u2014 Returns a JSON array of matching file paths: \`["folder/note.md", ...]\`
- \`matches\` \u2014 Flag accepted by the CLI but does not return match context/snippets in v1.12
- \`case\` \u2014 Enable case-sensitive matching

### Search with Context

\`\`\`bash
obsidian search:context query="search text"
obsidian search:context query="text" path="folder" limit=10
obsidian search:context query="text" case
obsidian search:context query="text" format=json
\`\`\`

Returns matching lines with surrounding context (not just file paths). Useful when you need to see the actual content that matched rather than just file paths.

### Open Search View

\`\`\`bash
obsidian search:open query="search text"
\`\`\`

Opens the Obsidian search panel in the UI with the given query.

---

## Properties

Manage frontmatter (YAML metadata) on notes.

### Read All Properties

\`\`\`bash
obsidian properties path="note.md"
\`\`\`

### Read Single Property

\`\`\`bash
obsidian property:read path="note.md" name="status"
\`\`\`

### Set Property

\`\`\`bash
obsidian property:set path="note.md" name="status" value="active"
obsidian property:set path="note.md" name="tags" value="[project, alpha]"
obsidian property:set path="note.md" name="date" value="2026-02-27"
\`\`\`

> **Note:** \`property:set\` always stores \`value=\` as a string. Passing \`value="[project, alpha]"\` writes
> the literal string \`[project, alpha]\`, not a YAML array. For true array-typed properties (e.g. \`tags\`),
> edit the note's frontmatter directly or use \`eval\` with the Obsidian API.

### Remove Property

\`\`\`bash
obsidian property:remove path="note.md" name="draft"
\`\`\`

### Aliases

\`\`\`bash
obsidian aliases path="note.md"
\`\`\`

Lists all aliases defined in the note's frontmatter.

---

## Tags

Tag discovery and filtering.

\`\`\`bash
obsidian tags                          # List all tags in the vault
obsidian tags counts                   # Tags with usage counts
obsidian tags counts sort=count        # Sorted by frequency (most used first)
obsidian tags path="note.md"           # Tags in a specific file
obsidian tag name="project/alpha"      # List notes with a specific tag
\`\`\`

**Notes:**
- Nested tags are supported (e.g., \`project/alpha\`).
- Tags from both frontmatter and inline \`#tag\` syntax are included.

---

## Tasks

Query and manage checkbox tasks across the vault.

### Querying Tasks

\`\`\`bash
obsidian tasks                         # All tasks (same as tasks all in v1.12)
obsidian tasks all                     # All tasks (complete + incomplete)
obsidian tasks done                    # Only completed tasks
obsidian tasks path="note.md"          # Tasks in a specific file
obsidian tasks daily                   # Tasks in today's daily note
\`\`\`

> **Note:** In v1.12, \`tasks\` with no arguments returns all tasks (complete + incomplete), identical to \`tasks all\`. Filtering to incomplete-only is not currently supported without post-processing (e.g. pipe to \`grep "\\[ \\]"\`).

### Toggling Task Status

\`\`\`bash
obsidian task path="note.md" line=12 toggle
\`\`\`

Toggles the checkbox on the specified line number between \`- [ ]\` and \`- [x]\`.

---

## Links

Graph analysis and link management.

\`\`\`bash
obsidian backlinks path="note.md"         # Notes linking TO this note
obsidian backlinks path="note.md" counts  # With link counts per file
obsidian links path="note.md"             # Outgoing links FROM this note
obsidian unresolved                        # All unresolved [[wikilinks]]
obsidian orphans                           # Notes with no incoming or outgoing links
obsidian deadends                          # Notes with no outgoing links
\`\`\`

---

## Bookmarks

Manage Obsidian bookmarks (requires Bookmarks core plugin).

\`\`\`bash
obsidian bookmarks                                      # List all bookmarks
obsidian bookmark file="folder/note.md"                 # Bookmark a note
obsidian bookmark file="folder/note.md" subpath="#Heading"  # Bookmark a heading
obsidian bookmark folder="projects"                     # Bookmark a folder
obsidian bookmark search="query text" title="My Search" # Bookmark a search
obsidian bookmark url="https://example.com" title="Link" # Bookmark a URL
\`\`\`

---

## Templates

Work with note templates (requires Templates or Templater plugin).

\`\`\`bash
obsidian templates                                      # List available templates
obsidian template:read name="weekly-review"             # Read template content
obsidian template:read name="weekly-review" resolve title="My Note"  # Render with variables
obsidian template:insert name="weekly-review"           # Insert template into the active Obsidian UI file
\`\`\`

**Parameters:**
- \`name=\` \u2014 Template name (without path prefix or extension)
- \`resolve\` \u2014 Process template variables (\`{{date}}\`, \`{{title}}\`, etc.)
- Title and other variables can be passed as \`key=value\` for template rendering.

> **Note:** \`template:insert\` inserts into whichever file is currently active in the Obsidian UI \u2014 it does not accept a \`path=\` parameter. If no file is open, it returns \`Error: No active editor. Open a file first.\` To create a new file from a template, use \`obsidian create path="..." template="..."\` instead.

---

## Plugins

Manage community and core plugins.

\`\`\`bash
obsidian plugins                         # List all plugins (core + community)
obsidian plugins:enabled                 # Only enabled plugins
obsidian plugins versions                # Plugins with version numbers (community only)
obsidian plugins:restrict                # Show restricted mode status
obsidian plugins:restrict on             # Enable restricted mode (disables community plugins)
obsidian plugins:restrict off            # Disable restricted mode
obsidian plugin id="dataview"            # Get info about a specific plugin
obsidian plugin:enable id="canvas"       # Enable a plugin
obsidian plugin:disable id="canvas"      # Disable a plugin
obsidian plugin:install id="dataview"    # Install from community plugins
obsidian plugin:uninstall id="dataview"  # Uninstall a community plugin
obsidian plugin:reload id="my-plugin"    # Reload a plugin (useful for dev)
\`\`\`

> **Note:** \`plugins versions\` only shows version numbers for community plugins. Core (built-in) plugins share Obsidian's version and display blank version fields.

---

## Sync

Manage Obsidian Sync (requires active Sync subscription).

\`\`\`bash
obsidian sync                                   # Show sync status summary
obsidian sync on                                # Resume syncing
obsidian sync off                               # Pause syncing
obsidian sync:status                            # Detailed sync status
obsidian sync:history path="note.md"            # Version history for a file
obsidian sync:read path="note.md" version=3     # Read a specific version
obsidian sync:restore path="note.md" version=3  # Restore a previous version
obsidian sync:deleted                           # List files deleted via sync
obsidian sync:open                              # Open the Sync history view in the UI
\`\`\`

---

## Themes

Manage appearance themes.

\`\`\`bash
obsidian themes                            # List installed themes
obsidian themes versions                   # List installed themes with version numbers
obsidian theme                             # Show the currently active theme
obsidian theme name="Minimal"              # Get details about a specific theme
obsidian theme:set name="Minimal"          # Switch to a theme
obsidian theme:set name=""                 # Switch back to default theme
obsidian theme:install name="Minimal"      # Install a community theme
obsidian theme:install name="Minimal" enable  # Install and activate immediately
obsidian theme:uninstall name="Minimal"    # Uninstall a theme
\`\`\`

---

## CSS Snippets

Manage custom CSS snippet files (snippets live in \`.obsidian/snippets/\`).

\`\`\`bash
obsidian snippets                          # List all installed CSS snippets
obsidian snippets:enabled                  # List only enabled snippets
obsidian snippet:enable name="my-style"    # Enable a snippet
obsidian snippet:disable name="my-style"   # Disable a snippet
\`\`\`

---

## Commands & Hotkeys

Execute any Obsidian command by its ID, and inspect hotkey bindings.

\`\`\`bash
obsidian commands                          # List all available command IDs
obsidian command id="app:reload"           # Execute a command by ID
obsidian command id="editor:toggle-bold"   # Example: toggle bold in active editor
obsidian hotkeys                           # List all hotkeys (tab-separated: id \\t keybinding)
obsidian hotkey id="app:open-settings"     # Get hotkey for a specific command
obsidian hotkey id="app:open-settings" verbose  # Show if custom or default
\`\`\`

**Typical workflow \u2014 find and run a command:**

\`\`\`bash
obsidian commands | grep "canvas"          # Find canvas-related command IDs
obsidian command id="canvas:new-file"      # Execute the matched command
\`\`\`

**Getting plugin command IDs:**

\`\`\`bash
obsidian commands | grep "dataview"        # List all Dataview plugin commands
\`\`\`

---

## Obsidian Bases

Obsidian Bases (v1.12+) is a built-in database feature. Base files (\`.base\`) store structured data and support multiple views.

\`\`\`bash
obsidian bases                                    # List all .base files in vault
obsidian base:query file="tasks" format=json      # Query default view of a base
obsidian base:query file="tasks" view="Kanban"    # Query a specific view
obsidian base:query path="folder/tasks.base" format=csv  # Query by path
obsidian base:views file="tasks"                  # List all views in a base file
obsidian base:create file="tasks" title="Buy milk"  # Add an item to a base
\`\`\`

**Supported output formats for \`base:query\`:** \`json\` (default), \`csv\`, \`tsv\`, \`md\`, \`paths\`

---

## History

File version history (built-in to Obsidian, separate from Sync). Requires the File Recovery core plugin.

\`\`\`bash
obsidian history:list                             # List all files that have history
obsidian history path="folder/note.md"            # List versions of a specific file
obsidian history:read path="folder/note.md"       # Read the latest saved version
obsidian history:read path="folder/note.md" version=3  # Read a specific version
obsidian history:restore path="folder/note.md" version=3  # Restore a version
obsidian history:open path="folder/note.md"       # Open file recovery UI for a file
\`\`\`

> **Note:** History is distinct from [Sync version history](#sync). History uses Obsidian's built-in File Recovery snapshots; Sync history uses Obsidian Sync cloud versions.

---

## Workspace & Tabs

Inspect and manage the Obsidian workspace layout and open tabs.

\`\`\`bash
obsidian workspace                                # Show the full workspace tree
obsidian tabs                                     # List all open tabs (flat list)
obsidian tab:open file="folder/note.md"           # Open a file in a new tab
obsidian tab:open view="graph"                    # Open a view type in a new tab
\`\`\`

---

## Diff

Compare local and sync versions of a file.

\`\`\`bash
obsidian diff path="folder/note.md"               # List available versions (local + sync)
obsidian diff path="folder/note.md" from=1 to=2   # Diff two specific versions
obsidian diff path="folder/note.md" filter=local  # Show only local versions
obsidian diff path="folder/note.md" filter=sync   # Show only sync versions
\`\`\`

---

## Developer

Debugging and development tools.

### Screenshots

\`\`\`bash
obsidian dev:screenshot path="folder/screenshot.png"
\`\`\`

Takes a screenshot of the Obsidian window and saves it. **Path must be vault-relative** \u2014 absolute filesystem paths are silently ignored.

### JavaScript Evaluation

\`\`\`bash
obsidian eval code="app.vault.getFiles().length"
obsidian eval code="app.vault.getMarkdownFiles().map(f => f.path).join('\\n')"
\`\`\`

Executes arbitrary JavaScript in the Obsidian app context. Has access to the full Obsidian API (\`app\`, \`app.vault\`, \`app.workspace\`, \`app.metadataCache\`, etc.).

> **Multiline scripts:** Passing multiline JavaScript inline fails with "Invalid or unexpected token".
> Write the code to a temp file and use command substitution instead:
>
> \`\`\`bash
> cat > /tmp/obs.js << 'JS'
> var files = app.vault.getMarkdownFiles();
> files.map(f => f.path).join('\\n');
> JS
> obsidian eval code="$(cat /tmp/obs.js)"
> \`\`\`

### Console & Errors

\`\`\`bash
obsidian dev:debug on              # Start capturing console output (required before dev:console)
obsidian dev:debug off             # Stop capturing console output
obsidian dev:console limit=20     # Recent console output (requires dev:debug on first)
obsidian dev:errors                # Recent error messages
\`\`\`

> **Note:** \`dev:console\` will return an error unless \`dev:debug on\` has been run first in the current session.

### DOM Inspection

\`\`\`bash
obsidian dev:dom selector=".view-content"             # Get outerHTML of first match
obsidian dev:dom selector=".view-content" all         # Get all matches
obsidian dev:dom selector=".view-content" text        # Get text content
obsidian dev:dom selector=".view-content" total       # Count matching elements
obsidian dev:dom selector=".view-content" attr=class  # Get an attribute value
obsidian dev:dom selector=".view-content" css=color   # Get a CSS property value
\`\`\`

### CSS Inspection

\`\`\`bash
obsidian dev:css selector=".view-content"              # Inspect CSS with source locations
obsidian dev:css selector=".view-content" prop=color   # Filter by CSS property name
\`\`\`

### Chrome DevTools Protocol

\`\`\`bash
obsidian devtools                                      # Toggle Electron DevTools panel
obsidian dev:cdp method="Runtime.evaluate" params='{"expression":"1+1"}'  # Run a CDP command
\`\`\`

### Mobile Emulation

\`\`\`bash
obsidian dev:mobile on                                 # Enable mobile emulation
obsidian dev:mobile off                                # Disable mobile emulation
\`\`\`

---

## Vault & System

### Vault Information

\`\`\`bash
obsidian vault                         # Current vault: name, path, file/folder counts
obsidian vaults                        # List all known vaults
\`\`\`

### Other Utilities

\`\`\`bash
obsidian version                       # Obsidian version info
obsidian outline path="note.md"        # Heading structure of a note
obsidian wordcount path="note.md"      # Word and character count
obsidian recents                       # Recently opened files
obsidian reload                        # Reload the vault (re-index)
obsidian restart                       # Restart the Obsidian app
\`\`\`

---

## Output Formatting & Piping

The CLI outputs plain text by default, ideal for piping into Unix tools.

### Supported \`format=\` values

| Format | Description | Best for |
|---|---|---|
| \`text\` | Plain text (default) | Piping to grep/awk/sed |
| \`json\` | JSON array or object | Processing with jq, AI agents |
| \`csv\` | Comma-separated values | Spreadsheet import |
| \`tsv\` | Tab-separated values | Shell parsing with cut/awk |
| \`yaml\` | YAML output | Config-style processing |
| \`md\` | Markdown table | Embedding results in notes |
| \`paths\` | One path per line | Batch file operations |
| \`tree\` | Tree view | Visual hierarchy |

Not all formats are supported by every command. Use \`text\` or \`json\` when in doubt.

### Examples

\`\`\`bash
# Count notes in a folder
obsidian files folder="projects" | wc -l

# Find notes with a specific tag, then read them
obsidian tag name="urgent" | while read -r note; do
  echo "=== $note ==="
  obsidian read path="$note"
done

# Export search results as JSON and process with jq
# format=json returns an array of file path strings: ["folder/note.md", ...]
obsidian search query="meeting" format=json | jq '.[]'

# Query a base as CSV
obsidian base:query file="tasks" format=csv

# Filter console errors (requires dev:debug on first)
obsidian dev:debug on
obsidian dev:console limit=50 | grep -i error
\`\`\`

---

## Multi-Vault Usage

When working with multiple vaults, pass the vault name as the **first argument** (before the command):

\`\`\`bash
obsidian "Personal" daily:read
obsidian "Work" search query="standup"
obsidian "Archive" files total
\`\`\`

If the vault name contains spaces, quote it. The vault name must match what's shown in \`obsidian vaults\`.

> **Compatibility note:** On some environments, \`obsidian "My Vault" command\` returns
> \`Error: Command "My Vault" not found\`. If this occurs, omit the vault name \u2014 the CLI will target
> the most recently active vault. Switch vaults in the Obsidian UI before running CLI commands
> when targeting a specific vault.

---

## Headless / Server Setup (Linux)

For running Obsidian CLI on a headless Linux server (useful for AI agent integration):

1. Install the \`.deb\` package (not snap \u2014 snap confinement breaks IPC)
2. Install and start \`xvfb\`: \`Xvfb :5 -screen 0 1920x1080x24 &\`
3. Start Obsidian under xvfb: \`DISPLAY=:5 obsidian &\`
4. Run CLI commands: \`DISPLAY=:5 obsidian daily:read\`

**Systemd note**: If running as a service, ensure \`PrivateTmp=false\` so the IPC socket is accessible.

**Stderr filtering**: Headless environments produce harmless GPU warnings. Filter with:

\`\`\`bash
DISPLAY=:5 obsidian search query="test" 2>/dev/null
\`\`\`
`;var aa=`---
name: obsidian-cli
version: "1.3.0"
description: >
  Use this skill whenever the user wants Claude to directly interact with their
  Obsidian vault \u2014 reading a note or daily note, writing or appending content,
  searching vault contents, counting or listing notes, managing tasks, moving or
  renaming files, finding orphaned notes or broken links. Without this skill, Claude
  has no way to access vault data or execute vault operations. Treat any request that
  implies "go into my vault and do X" as a trigger \u2014 the user is asking Claude to act,
  not to explain. Also trigger for vault automation, CLI scripting, or cron-based
  workflows involving Obsidian, managing sync history, querying Bases, restoring file
  versions via history, managing bookmarks, or running JavaScript against the Obsidian
  API. Skip for pure conceptual questions: how Obsidian's GUI works, navigating settings
  menus, theme or plugin installation via the UI, iCloud/third-party sync conflicts,
  general Dataview query syntax, keyboard shortcuts, or parsing vault files with external
  scripts \u2014 anything where the user needs an explanation rather than Claude performing a
  vault operation.
triggers:
  - "obsidian"
  - "vault"
  - "daily note"
  - "obsidian cli"
  - "note"
  - "append to"
  - "prepend to"
  - "search my vault"
  - "create a note"
  - "read note"
  - "move note"
  - "rename note"
  - "delete note"
  - "tasks in obsidian"
  - "open tasks"
  - "backlinks"
  - "orphaned notes"
  - "broken links"
  - "frontmatter"
  - "properties"
  - "sync history"
  - "obsidian bases"
  - "file history"
---

# Obsidian CLI

The official Obsidian CLI (released in v1.12, February 2026) lets you control every aspect of Obsidian from the terminal. It communicates with a running Obsidian desktop instance via IPC.

> Read \`references/command-reference.md\` when you need specific flags, output formats, or
> subcommands for any command group. It covers all 130+ commands with full parameter tables
> and has a table of contents at the top.

## Prerequisites

| Requirement | Details |
|---|---|
| Obsidian Desktop | **v1.12.0+** |
| CLI enabled | Settings \u2192 Command line interface \u2192 Toggle ON |
| Obsidian running | The desktop app **must be running** for CLI to work (IPC) |

### Platform Notes

- **macOS / Linux**: The \`obsidian\` binary is registered in PATH automatically when you enable CLI in settings.
- **Windows**: Requires an \`Obsidian.com\` redirector file placed alongside \`Obsidian.exe\`. **Must run with normal user privileges** \u2014 admin terminals produce silent failures.
  - If colon subcommands (\`property:set\`, \`daily:append\`, etc.) with parameters return exit 127, check that \`Obsidian.com\` exists alongside \`Obsidian.exe\`. If missing, you have an outdated installer \u2014 download the latest from [obsidian.md/download](https://obsidian.md/download) and reinstall.
  - **Git Bash / MSYS2 users**: Bash resolves \`obsidian\` to \`Obsidian.exe\` (GUI) instead of \`Obsidian.com\` (CLI), causing colon+params to fail with exit 127 even when \`Obsidian.com\` is present. Create a wrapper script \u2014 see Troubleshooting.
- **Headless Linux**: Use the \`.deb\` package (not snap). Run under \`xvfb\`. Prefix commands with \`DISPLAY=:5\` (or your xvfb display number). Ensure \`PrivateTmp=false\` if running as a service.

## Syntax

All parameters use **\`key=value\`** syntax. Quote values containing spaces.

\`\`\`bash
obsidian <command> [subcommand] [key=value ...] [flags]
\`\`\`

### Multi-Vault

Target a specific vault by making it the **first argument**:

\`\`\`bash
obsidian "My Vault" daily:read
obsidian "Work Notes" search query="meeting"
\`\`\`

If omitted, the CLI targets the most recently active vault.

## Command Overview

The CLI provides **130+ commands** across these groups:

| Group | Key Commands | Purpose |
|---|---|---|
| **files** | \`read\`, \`create\`, \`append\`, \`prepend\`, \`move\`, \`rename\`, \`delete\`, \`files\`, \`folders\`, \`file\`, \`random\` | Note CRUD and file discovery |
| **daily** | \`daily\`, \`daily:read\`, \`daily:append\`, \`daily:prepend\`, \`daily:path\` | Daily note operations |
| **search** | \`search\`, \`search:context\` | Full-text search; \`search:context\` returns matching lines |
| **properties** | \`properties\`, \`property:read\`, \`property:set\`, \`property:remove\`, \`aliases\` | Frontmatter/metadata management |
| **tags** | \`tags\`, \`tag\` | Tag listing, counts, and filtering |
| **tasks** | \`tasks\`, \`task\` | Task querying, filtering, and toggling |
| **links** | \`backlinks\`, \`links\`, \`unresolved\`, \`orphans\`, \`deadends\` | Graph and link analysis |
| **bookmarks** | \`bookmarks\`, \`bookmark\` | List and add bookmarks |
| **templates** | \`templates\`, \`template:read\`, \`template:insert\` | Template listing, rendering, insertion |
| **plugins** | \`plugins\`, \`plugin\`, \`plugin:enable\`, \`plugin:disable\`, \`plugin:install\`, \`plugin:uninstall\`, \`plugins:restrict\` | Plugin management |
| **sync** | \`sync\`, \`sync:status\`, \`sync:history\`, \`sync:read\`, \`sync:restore\`, \`sync:deleted\` | Obsidian Sync operations |
| **themes** | \`themes\`, \`theme\`, \`theme:set\`, \`theme:install\`, \`theme:uninstall\` | Theme management |
| **snippets** | \`snippets\`, \`snippets:enabled\`, \`snippet:enable\`, \`snippet:disable\` | CSS snippet management |
| **commands** | \`commands\`, \`command\`, \`hotkeys\`, \`hotkey\` | Execute Obsidian commands by ID; inspect hotkeys |
| **bases** | \`bases\`, \`base:query\`, \`base:views\`, \`base:create\` | Obsidian Bases (v1.12+ database feature) |
| **history** | \`history\`, \`history:list\`, \`history:read\`, \`history:restore\` | File version recovery (File Recovery plugin) |
| **workspace** | \`workspace\`, \`tabs\`, \`tab:open\` | Workspace layout and tab management |
| **diff** | \`diff\` | Compare local vs sync file versions |
| **dev** | \`eval\`, \`dev:screenshot\`, \`dev:debug\`, \`dev:console\`, \`dev:errors\`, \`dev:css\`, \`dev:dom\`, \`devtools\` | Developer/debugging tools |
| **vault** | \`vault\`, \`vaults\`, \`version\`, \`reload\`, \`restart\` | Vault info and app control |
| **other** | \`outline\`, \`wordcount\`, \`recents\` | Utility commands |

## Quick Reference \u2014 Most Common Commands

### Reading & Writing Notes

\`\`\`bash
obsidian read path="folder/note.md"
obsidian create path="folder/note" content="# New Note"
obsidian create path="folder/note" template="meeting-notes"
obsidian append path="folder/note.md" content="New paragraph"
obsidian prepend path="folder/note.md" content="Top content"
obsidian move path="old/note.md" to="new/note.md"
obsidian delete path="folder/note.md"
obsidian delete path="folder/note.md" permanent
\`\`\`

### Daily Notes

\`\`\`bash
obsidian daily                          # Open today's daily note
obsidian daily:read                     # Print content of today's note
obsidian daily:append content="- [ ] New task"
obsidian daily:prepend content="## Morning Notes"
\`\`\`

### Search

\`\`\`bash
obsidian search query="project alpha"
obsidian search query="TODO" path="projects" limit=10
obsidian search query="meeting" format=json   # Returns JSON array of file paths
obsidian search query="urgent" case
\`\`\`

### Properties & Tags

\`\`\`bash
obsidian properties path="note.md"
obsidian property:set path="note.md" name="status" value="active"
obsidian property:read path="note.md" name="status"
obsidian property:remove path="note.md" name="draft"
obsidian tags counts sort=count
obsidian tag name="project/alpha"
\`\`\`

### Tasks

\`\`\`bash
obsidian tasks                          # All tasks (done + todo) \u2014 same as tasks all in v1.12
obsidian tasks all                      # All tasks (done + todo)
obsidian tasks done                     # Completed only
obsidian tasks daily                    # Tasks in today's daily note
obsidian task path="note.md" line=12 toggle
obsidian tasks | grep "\\[ \\]"           # Workaround: filter to incomplete only
\`\`\`

### Developer & Automation

\`\`\`bash
obsidian eval code="app.vault.getFiles().length"
obsidian dev:screenshot path="folder/screenshot.png"  # Path must be vault-relative
obsidian dev:debug on                                 # Required before dev:console
obsidian dev:console limit=20
obsidian dev:errors
\`\`\`

## TUI Mode

Running \`obsidian\` with no arguments launches an interactive TUI (Terminal User Interface):

| Key | Action |
|---|---|
| \`\u2191\u2193\` | Navigate files |
| \`Enter\` | Open file |
| \`/\` | Search |
| \`n\` | Create new file |
| \`d\` | Delete file |
| \`r\` | Rename file |
| \`q\` | Quit |

## Common Agent Patterns

### Daily Journal Automation

\`\`\`bash
# Append a timestamped entry
obsidian daily:append content="## $(date '+%H:%M') \u2014 Status Update
- Completed: feature branch merge
- Next: code review for PR #42
- Blocked: waiting on API credentials"
\`\`\`

### Create Note from Template with Metadata

\`\`\`bash
obsidian create path="projects/new-feature" template="project-template"
obsidian property:set path="projects/new-feature.md" name="status" value="planning"
obsidian property:set path="projects/new-feature.md" name="created" value="$(date -I)"
obsidian daily:append content="- Started [[projects/new-feature|New Feature]]"
\`\`\`

### Vault Analytics Script

\`\`\`bash
obsidian files total                    # Total file count
obsidian tags counts sort=count         # Most used tags
obsidian tasks | grep "\\[ \\]"          # Incomplete tasks across vault
obsidian orphans                        # Notes needing integration
obsidian unresolved                     # Broken links to fix
\`\`\`

### Search and Extract for AI Processing

\`\`\`bash
obsidian search query="meeting notes" format=json | jq '.[]'
obsidian read path="meetings/standup.md" | grep "Action item"
\`\`\`

### Sync Management

\`\`\`bash
obsidian sync:status                    # Check sync health
obsidian sync:history path="important.md"  # Version history
obsidian sync:restore path="important.md" version=3  # Rollback
\`\`\`

### Execute Obsidian Commands

\`\`\`bash
# Find a command ID, then execute it
obsidian commands | grep "graph"
obsidian command id="graph:open"

# Open settings, trigger a plugin action
obsidian command id="app:open-settings"
obsidian command id="dataview:dataview-force-refresh-views"
\`\`\`

## Tips

1. **Paths are vault-relative** \u2014 use \`folder/note.md\`, not absolute filesystem paths.
2. **\`create\` paths omit \`.md\`** \u2014 the extension is added automatically.
3. **\`move\` requires full target path** including \`.md\` extension.
4. **Pipe-friendly** \u2014 plain text output works with \`grep\`, \`awk\`, \`sed\`, \`jq\`.
5. **JSON output** \u2014 use \`format=json\` on \`search\` for a JSON array of file paths. The \`files\` command does not support JSON output.
6. **Stderr noise** \u2014 GPU/Electron warnings on headless are harmless; filter with \`2>/dev/null\`.
7. **\`daily:prepend\`** inserts content after frontmatter, not at byte 0.
8. **Use \`eval\`** to run arbitrary JavaScript against the Obsidian API (\`app.*\`).
9. **\`template:insert\`** inserts into the currently active file in the Obsidian UI \u2014 it does not accept a \`path=\` parameter. If no file is open, it returns \`Error: No active editor. Open a file first.\` To create a file from a template via CLI, use \`obsidian create path="..." template="..."\` instead.
10. **\`property:set\` stores list values as strings** \u2014 \`value="tag1, tag2"\` writes a literal comma-separated string, not a YAML array. For proper array fields, edit the note's frontmatter directly (e.g. via \`read\` \u2192 modify \u2192 \`create --force\`) or use \`eval\` to call the Obsidian API.
11. **\`eval\` requires single-line JavaScript** \u2014 multiline JS passed inline fails with a token error. Write the script to a temp file instead:
    \`\`\`bash
    cat > /tmp/obs.js << 'JS'
    var files = app.vault.getMarkdownFiles();
    files.length;
    JS
    obsidian eval code="$(cat /tmp/obs.js)"
    \`\`\`
12. **Multi-vault targeting may not work in all environments** \u2014 \`obsidian "My Vault" command\` can return \`Error: Command "My Vault" not found\` on some setups. If this happens, omit the vault name (CLI targets the most recently active vault) and switch vaults manually in the Obsidian UI.
13. **When colon subcommands are unavailable** (e.g. Windows Git Bash without wrapper), prefer non-colon alternatives: use \`properties\` instead of \`property:read\`, and \`obsidian daily:path\` + \`append\` instead of \`daily:append\`.

## Troubleshooting

| Problem | Cause | Fix |
|---|---|---|
| Empty output / hangs | Obsidian not running, or admin terminal (Windows) | Start Obsidian; use normal-privilege terminal |
| Command not found | CLI not registered in PATH | Re-enable CLI in Settings; restart terminal |
| Unicode errors | Fixed in v1.12.2+ | Update Obsidian |
| Wrong vault targeted | Multi-vault ambiguity | Pass vault name as first arg |
| IPC socket not found (Linux) | \`PrivateTmp=true\` in systemd | Set \`PrivateTmp=false\` |
| Snap confinement issues | Snap restricts IPC | Use \`.deb\` package instead |
| Multi-vault \`"Name" command\` fails | Vault name matching issue | Omit vault name; target most recent vault |
| \`property:set\` list value is a string | CLI stores value as-is | Edit frontmatter directly or use \`eval\` |
| Colon+params exit 127 (missing \`.com\`) | Outdated installer \u2014 \`Obsidian.com\` absent | Reinstall from [obsidian.md/download](https://obsidian.md/download) |
| Colon+params exit 127 (Git Bash / MSYS2) | Bash resolves \`obsidian\` to \`.exe\` not \`.com\` | Create \`~/bin/obsidian\` wrapper: \`#!/bin/bash\` / \`/c/path/to/Obsidian.com "$@"\` and add \`export PATH="$HOME/bin:$PATH"\` to \`~/.bashrc\` |
`;var sa="# Conventional Commits + Gitmoji + OpenSpec\n\n## Required format\n\n```\n:gitmoji: type(scope): short description\n\n[optional body]\n\n[footer: BREAKING CHANGE / Closes #issue]\n```\n\n## Complete Gitmoji \u2192 Type mapping\n\n| Gitmoji | Code | Type | Use case |\n|---------|------|------|----------|\n| \u2728 | `:sparkles:` | `feat` | Introduce new features |\n| \uD83D\uDCA5 | `:boom:` | `feat` | Introduce breaking changes (\u2192 MAJOR semver) |\n| \uD83C\uDF89 | `:tada:` | `feat` | Begin a project |\n| \uD83D\uDE80 | `:rocket:` | `ci` | Deploy stuff |\n| \uD83D\uDC1B | `:bug:` | `fix` | Fix a bug |\n| \uD83D\uDE91\uFE0F | `:ambulance:` | `fix` | Critical hotfix |\n| \uD83D\uDD12\uFE0F | `:lock:` | `fix` | Fix security or privacy issues |\n| \u270F\uFE0F | `:pencil2:` | `fix` | Fix typos |\n| \uD83E\uDE79 | `:adhesive_bandage:` | `fix` | Simple fix for a non-critical issue |\n| \uD83E\uDD45 | `:goal_net:` | `fix` | Catch errors |\n| \uD83D\uDCDD | `:memo:` | `docs` | Add or update documentation |\n| \uD83D\uDCC4 | `:page_facing_up:` | `docs` | Add or update license |\n| \uD83D\uDCA1 | `:bulb:` | `docs` | Add or update comments in source code |\n| \u267B\uFE0F | `:recycle:` | `refactor` | Refactor code |\n| \uD83C\uDFA8 | `:art:` | `refactor` | Improve structure / format of the code |\n| \uD83C\uDFD7\uFE0F | `:building_construction:` | `refactor` | Make architectural changes |\n| \uD83D\uDE9A | `:truck:` | `refactor` | Move or rename resources |\n| \uD83D\uDC84 | `:lipstick:` | `refactor` | Add or update the UI and style files |\n| \u267F\uFE0F | `:wheelchair:` | `refactor` | Improve accessibility |\n| \uD83D\uDEB8 | `:children_crossing:` | `refactor` | Improve user experience / usability |\n| \uD83D\uDCF1 | `:iphone:` | `refactor` | Work on responsive design |\n| \uD83C\uDF10 | `:globe_with_meridians:` | `refactor` | Internationalization and localization |\n| \uD83E\uDDF5 | `:thread:` | `refactor` | Multithreading or concurrency |\n| \uD83E\uDDBA | `:safety_vest:` | `refactor` | Add or update validation |\n| \uD83E\uDD96 | `:t-rex:` | `refactor` | Add backwards compatibility |\n| \u2705 | `:white_check_mark:` | `test` | Add, update, or pass tests |\n| \uD83E\uDDEA | `:test_tube:` | `test` | Add a failing test |\n| \uD83D\uDCF8 | `:camera_flash:` | `test` | Add or update snapshots |\n| \u2697\uFE0F | `:alembic:` | `test` | Perform experiments |\n| \uD83D\uDD27 | `:wrench:` | `chore` | Add or update configuration files |\n| \uD83D\uDD28 | `:hammer:` | `chore` | Add or update development scripts |\n| \uD83D\uDCE6\uFE0F | `:package:` | `chore` | Add or update compiled files or packages |\n| \u2B06\uFE0F | `:arrow_up:` | `chore` | Upgrade dependencies |\n| \u2B07\uFE0F | `:arrow_down:` | `chore` | Downgrade dependencies |\n| \u2795 | `:heavy_plus_sign:` | `chore` | Add a dependency |\n| \u2796 | `:heavy_minus_sign:` | `chore` | Remove a dependency |\n| \uD83D\uDCCC | `:pushpin:` | `chore` | Pin dependencies to specific versions |\n| \uD83D\uDD16 | `:bookmark:` | `chore` | Release / Version tags |\n| \uD83C\uDFF7\uFE0F | `:label:` | `chore` | Add or update types |\n| \uD83D\uDE48 | `:see_no_evil:` | `chore` | Add or update a .gitignore file |\n| \uD83C\uDF31 | `:seedling:` | `chore` | Add or update seed files |\n| \uD83C\uDF71 | `:bento:` | `chore` | Add or update assets |\n| \uD83D\uDDD1\uFE0F | `:wastebasket:` | `chore` | Deprecate code that needs to be cleaned up |\n| \u26B0\uFE0F | `:coffin:` | `chore` | Remove dead code |\n| \uD83D\uDCB8 | `:money_with_wings:` | `chore` | Sponsorships or money related infrastructure |\n| \uD83D\uDD25 | `:fire:` | `chore` | Remove code or files |\n| \uD83D\uDCA9 | `:poop:` | `chore` | Write bad code that needs to be improved |\n| \uD83E\uDD21 | `:clown_face:` | `chore` | Mock things |\n| \uD83E\uDD5A | `:egg:` | `chore` | Add or update an easter egg |\n| \uD83D\uDCAC | `:speech_balloon:` | `chore` | Add or update text and literals |\n| \uD83D\uDC65 | `:busts_in_silhouette:` | `chore` | Add or update contributor(s) |\n| \u26A1\uFE0F | `:zap:` | `perf` | Improve performance |\n| \uD83D\uDCC8 | `:chart_with_upwards_trend:` | `perf` | Add or update analytics or track code |\n| \uD83D\uDC77 | `:construction_worker:` | `ci` | Add or update CI build system |\n| \uD83D\uDC9A | `:green_heart:` | `ci` | Fix CI Build |\n| \uD83D\uDEA8 | `:rotating_light:` | `ci` | Fix compiler / linter warnings |\n| \uD83E\uDDF1 | `:bricks:` | `ci` | Infrastructure related changes |\n| \uD83E\uDE7A | `:stethoscope:` | `ci` | Add or update healthcheck |\n| \uD83D\uDEC2 | `:passport_control:` | `ci` | Authorization, roles and permissions |\n| \u23EA\uFE0F | `:rewind:` | `chore` | Revert changes |\n| \uD83D\uDD00 | `:twisted_rightwards_arrows:` | `chore` | Merge branches |\n| \uD83D\uDC7D\uFE0F | `:alien:` | `chore` | Update code due to external API changes |\n| \uD83D\uDD0A | `:loud_sound:` | `chore` | Add or update logs |\n| \uD83D\uDD07 | `:mute:` | `chore` | Remove logs |\n| \uD83D\uDEA9 | `:triangular_flag_on_post:` | `feat` | Add, update, or remove feature flags |\n| \uD83D\uDCAB | `:dizzy:` | `feat` | Add or update animations and transitions |\n| \uD83E\uDDD0 | `:monocle_face:` | `chore` | Data exploration/inspection |\n| \uD83D\uDC54 | `:necktie:` | `feat` | Add or update business logic |\n| \uD83E\uDDD1\u200D\uD83D\uDCBB | `:technologist:` | `chore` | Improve developer experience |\n| \u2708\uFE0F | `:airplane:` | `feat` | Improve offline support |\n| \uD83D\uDD10 | `:closed_lock_with_key:` | `chore` | Add or update secrets |\n| \uD83D\uDD0D\uFE0F | `:mag:` | `chore` | Improve SEO |\n| \uD83D\uDDC3\uFE0F | `:card_file_box:` | `chore` | Perform database related changes |\n| \uD83D\uDEA7 | `:construction:` | `chore` | Work in progress |\n| \uD83C\uDF7B | `:beers:` | `chore` | Write code drunkenly |\n| \uD83D\uDCCB | `:clipboard:` | `spec` | OpenSpec specification changes only |\n\n## Strict rules\n\n- Gitmoji code comes **first**, before the type\n- Subject in English, imperative mood, lowercase, no trailing period\n- Subject length: max 72 characters (including the gitmoji code)\n- Never commit without explicit user confirmation\n- Always check `git diff --staged` before suggesting a commit message\n- One commit = one responsibility (no catch-all commits)\n- Always use `:code:` format \u2014 never Unicode emoji directly\n- Pick the most semantically accurate gitmoji for the change\n\n## OpenSpec integration\n\n### Mandatory full cycle\n\nBefore any significant implementation commit (`feat`, `fix`, `refactor`):\n\n1. An OpenSpec change must exist in `openspec/changes/<n>/`\n2. Validate the spec with `openspec validate <n>`\n3. Implement the tasks listed in `openspec/changes/<n>/tasks.md`\n4. Archive the change with `openspec archive <n> --yes`\n5. Commit the implementation and the archived specs in two separate commits\n\n### OpenSpec commit pattern\n\n```bash\n# 1. Code implementation\n:sparkles: feat(auth): add two-factor authentication via TOTP\n\n# 2. Spec archive (separate commit, immediately after)\n:clipboard: spec(auth): archive add-2fa openspec change\n```\n\n### Type \u2194 OpenSpec phase mapping\n\n| OpenSpec phase   | Gitmoji + Commit type                            |\n|------------------|--------------------------------------------------|\n| Proposal created | `:clipboard: spec(scope): propose <feature>`     |\n| Implementation   | `:sparkles:/:bug:/:recycle: type(scope): ...`    |\n| Spec archive     | `:clipboard: spec(scope): archive <change-name>` |\n\n### Available slash commands (Claude Code)\n\n- `/openspec:proposal` \u2014 create a new change proposal\n- `/openspec:apply <n>` \u2014 implement the tasks of a change\n- `/openspec:archive <n>` \u2014 archive a completed change\n\n## Forbidden\n\n- Never commit code related to an unarchived `openspec/changes/`\n- Never mix implementation code and OpenSpec archive in the same commit\n- Never use `git commit -m` without reviewing the full diff first\n- Never edit `openspec/specs/` directly \u2014 always go through the changes/archive cycle\n- Never use Unicode emoji \u2014 always use the `:code:` text format\n\n## Valid examples\n\n```\n:sparkles: feat(user): add profile search filters by role and team\n:bug: fix(api): handle null response on session expiry\n:recycle: refactor(db): extract query builder into repository layer\n:memo: docs(readme): update openspec workflow setup steps\n:white_check_mark: test(auth): add scenarios for TOTP edge cases\n:arrow_up: chore(deps): upgrade typescript to 5.7\n:clipboard: spec(payments): archive add-stripe-integration openspec change\n:construction_worker: ci(github): add openspec validate step to pre-merge workflow\n:boom: feat(api)!: remove v1 endpoints\n:lock: fix(auth): patch timing attack on password comparison\n:label: chore(types): add strict types to user module\n:wheelchair: refactor(ui): improve keyboard navigation on modal\n:zap: perf(query): add index on users.created_at column\n```\n\n## Invalid examples\n\n```\n# \u274C no gitmoji\nfeat(auth): add login\n\n# \u274C unicode emoji instead of :code:\n\u2728 feat(auth): add login\n\n# \u274C gitmoji after the type\nfeat :sparkles: (auth): add login\n\n# \u274C uppercase + trailing period\n:sparkles: Feat(auth): Add login.\n\n# \u274C mixing implementation and archive\n:sparkles: feat(auth): add 2fa and archive openspec change\n\n# \u274C too vague\n:bug: fix: various fixes\n\n# \u274C subject exceeds 72 characters\n:sparkles: feat(user-management): add advanced profile search filters with role, team and location support\n```\n";var na=`## Cr\xE9ation de projet \u2014 R\xE8gle obligatoire

Lors de la cr\xE9ation de tout nouveau projet, tu DOIS syst\xE9matiquement g\xE9n\xE9rer un devcontainer avant toute autre chose :

1. Cr\xE9er \`.devcontainer/devcontainer.json\` adapt\xE9 au stack d\xE9tect\xE9
2. Cr\xE9er \`.devcontainer/Dockerfile\` si une image custom est n\xE9cessaire
3. Confirmer la cr\xE9ation du devcontainer avant de continuer

### Structure minimale attendue
\`\`\`json
{
  "name": "<nom-du-projet>",
  "image": "mcr.microsoft.com/devcontainers/<runtime>:latest",
  "features": {},
  "postCreateCommand": "",
  "customizations": {
    "vscode": {
      "extensions": []
    }
  }
}
\`\`\`

Ne jamais initialiser un projet sans ce fichier. Si le type de projet est ambigu, demander le runtime avant de commencer.
`;var ia=`# Development Best Practices

## Core principles

- **DRY** \u2013 Don't Repeat Yourself: abstract any duplicated logic
- **KISS** \u2013 Keep It Simple, Stupid: the simplest solution that works
- **YAGNI** \u2013 You Aren't Gonna Need It: don't anticipate hypothetical needs
- **SOLID** \u2013 follow object-oriented design principles

## Code style

- Short functions with a single responsibility (< 30 lines, otherwise split)
- Explicit variable and function names \u2014 no cryptic abbreviations
- No magic numbers: use named constants
- Strict typing everywhere: no \`any\`, no implicit types
- All imports at the top of the file, grouped by type (stdlib \u2192 external \u2192 internal)

## Error handling

- Always raise explicit errors with a clear, actionable message
- No silent catches (\`catch (e) {}\`)
- Use specific error types rather than the generic \`Error\`
- Log errors with enough context to debug

## Security

- Never hardcode secrets, tokens, or passwords \u2014 use environment variables
- Validate and sanitize all user input
- No \`eval()\`, no direct SQL concatenation
- \`.env\` files and secrets must never be committed

## Performance

- Don't optimize prematurely \u2014 profile first
- Avoid nested loops over large datasets
- Lazy-load anything not critical at startup

## Code review checklist (when Claude generates code)

Before proposing an implementation, verify:
1. Does the logic already exist elsewhere in the project?
2. Is the code testable as-is?
3. Are error cases covered?
4. Are names understandable without a comment?

## Documentation

- Complex public functions must have a JSDoc/docstring
- Non-obvious architecture decisions must be commented with \`// WHY:\`
- \`README.md\` must stay up to date with new commands and dependencies

## Workflow

1. Understand the requirement before coding
2. Write the test first if possible
3. Implement the minimal solution
4. Refactor if needed
5. Run lint + tests
6. Commit with a conventional message
`;var ta=`# Obsidian Link Conventions

## Purpose
This rules file enforces Obsidian markdown link conventions across all OpenSpec artifacts to ensure compatibility with Obsidian vault linking and bidirectional references.

## Link Format Requirements

### Internal Links to Specs
All references to OpenSpec specifications **MUST** use Obsidian wiki-link format:

\`\`\`markdown
[[openspec/specs/domain-name/spec]]
\`\`\`

NOT:
- \`[link](openspec/specs/domain-name/spec.md)\` \u274C
- \`@/openspec/specs/domain-name/spec.md\` \u274C

### Internal Links to Changes
References to change proposals and artifacts use the same format:

\`\`\`markdown
[[openspec/changes/change-name/proposal]]
[[openspec/changes/change-name/design]]
[[openspec/changes/change-name/tasks]]
\`\`\`

### Links with Display Text
When you need custom display text, use this format:

\`\`\`markdown
[[openspec/specs/domain-name/spec|Custom Label]]
\`\`\`

Example:
\`\`\`markdown
For authentication details, see [[openspec/specs/auth/spec|Auth Specification]].
\`\`\`

### Cross-Domain References
When one spec references another domain:

\`\`\`markdown
See related requirements in [[openspec/specs/other-domain/spec]].
\`\`\`

### Archive References
Links to archived changes:

\`\`\`markdown
[[openspec/changes/archive/2025-01-24-feature-name/proposal]]
\`\`\`

## File Naming Conventions

### Spec Files
- Location: \`openspec/specs/<domain>/spec.md\`
- Format: lowercase, kebab-case for domain names
- Linked as: \`[[openspec/specs/<domain>/spec]]\` (no .md extension)

### Change Folders
- Location: \`openspec/changes/<change-name>/\`
- Format: kebab-case (e.g., \`add-dark-mode\`, \`fix-auth-flow\`)
- Sub-artifacts:
  - \`proposal.md\` \u2192 \`[[openspec/changes/<change-name>/proposal]]\`
  - \`design.md\` \u2192 \`[[openspec/changes/<change-name>/design]]\`
  - \`tasks.md\` \u2192 \`[[openspec/changes/<change-name>/tasks]]\`
  - \`specs/<domain>/spec.md\` \u2192 \`[[openspec/changes/<change-name>/specs/<domain>/spec]]\`

## Obsidian-Specific Metadata

### Frontmatter Tags
Add Obsidian tags to all spec and change documents for better linking:

\`\`\`markdown
---
tags:
  - openspec
  - specs
  - domain/auth
---
\`\`\`

Example for changes:
\`\`\`markdown
---
tags:
  - openspec
  - change
  - status/proposed
  - domain/auth
---
\`\`\`

### Status Tags
Track change status with tags:
- \`status/proposed\` - Initial proposal created
- \`status/exploring\` - Under investigation
- \`status/designing\` - Design phase
- \`status/implementing\` - Active implementation
- \`status/completed\` - Ready to archive
- \`status/archived\` - Merged into main specs

## Linked References Pattern

All artifacts should reference related documents using this pattern:

\`\`\`markdown
## Related Specifications
- [[openspec/specs/domain-name/spec]]
- [[openspec/specs/another-domain/spec]]

## Related Changes
- [[openspec/changes/related-change-name/proposal]]
\`\`\`

## Code Sample Integration

When referencing code files from specs, use relative paths but keep wiki-links for OpenSpec docs:

\`\`\`markdown
### Implementation Files
See \`src/auth/provider.ts\` for the auth implementation.

### Related Specs
[[openspec/specs/auth/spec|Authentication Specification]]
\`\`\`

## Rules for AI Agents

When creating or updating OpenSpec artifacts:

1. **Always use wiki-link format** for any OpenSpec internal references
2. **Never use markdown link syntax** \`[text](path)\` for OpenSpec files
3. **Always include custom labels** when the context needs clarity:
   - \`[[openspec/specs/auth/spec|Authentication Requirements]]\`
4. **Use frontmatter tags** to enable Obsidian graph and backlink features
5. **Maintain bidirectional links** - if A links to B, consider if B should link to A
6. **No .md extensions** in wiki-links - Obsidian resolves them automatically

## Validation Checklist

Before archiving or submitting a change:
- [ ] All OpenSpec file references use \`[[path]]\` format
- [ ] No markdown links \`[text](file.md)\` to OpenSpec files
- [ ] File paths follow \`openspec/\` directory structure exactly
- [ ] Related documents have backlinks to each other
- [ ] Frontmatter tags are present and accurate
- [ ] Change name uses kebab-case
- [ ] Domain names use lowercase with hyphens

## Example Spec Structure

\`\`\`markdown
---
tags:
  - openspec
  - specs
  - domain/payments
  - status/active
---

# Payment Processing Specification

## Overview
This spec defines payment handling in our system.

## Related Specifications
- [[openspec/specs/auth/spec|User Authentication]]
- [[openspec/specs/db/spec|Database Schema]]

## Current Changes
- [[openspec/changes/add-payment-retry/specs/payments/spec|Payment Retry Logic]]

## Architecture Decisions
See [[openspec/changes/payment-redesign/design|Payment System Redesign]] for rationale.

## Requirements
- SHALL support multiple payment methods
- SHALL validate payment on submission
- MUST encrypt payment data in transit

## Scenarios

### Successful Payment
GIVEN a user in checkout
WHEN they submit valid payment
THEN the payment is processed and order created
\`\`\`

## Example Change Structure

\`\`\`markdown
---
tags:
  - openspec
  - change
  - status/proposed
  - domain/payments
---

# Add Payment Retry Mechanism

## Why
Transient payment gateway failures cause legitimate transactions to fail.

## What Changes
- [[openspec/changes/add-payment-retry/specs/payments/spec|Updated Payment Spec]]
- [[openspec/changes/add-payment-retry/design|Technical Design]]

## Impact
See [[openspec/specs/payments/spec|Payment Processing]] and [[openspec/specs/notifications/spec|Notification System]]
\`\`\`

## Notes for Obsidian Integration

- These conventions enable Obsidian's **graph view** to visualize spec relationships
- **Backlinks** automatically track which changes affect which specs
- **Tags** allow filtering by domain, status, or type in Obsidian
- **Search** can find all specs linked from a change
- **Unlinked mentions** help identify missing references

## Migration Guide

If converting from old markdown links to wiki-links:

**Before:**
\`\`\`markdown
See [Auth Spec](../specs/auth/spec.md)
Check [Design Doc](./design.md)
\`\`\`

**After:**
\`\`\`markdown
See [[openspec/specs/auth/spec|Auth Spec]]
Check [[openspec/changes/feature-name/design|Design Doc]]
\`\`\`

Use Obsidian's find-and-replace or a script to bulk convert patterns.
`;var oa=`# Automated Testing

## Philosophy

All shipped code must be tested. If it's not testable, that's a design signal worth addressing.

## Mandatory rules

- Write tests **before or alongside** the code (TDD encouraged)
- Every new public function must have at least one unit test
- Every bug fix must include a non-regression test
- Never commit code that breaks existing tests

## Minimum coverage

- Utility functions and business logic: **90%+**
- UI components: **70%+**
- No magic threshold: aim for relevance, not maximum coverage

## What to test

- Nominal cases (happy path)
- Edge cases (null, empty, extreme values)
- Error cases (exceptions, failed API responses)
- Side effects (function calls, emitted events)

## What NOT to test

- Internal implementation details (test behavior, not "how")
- Third-party libraries
- Trivial getters / setters with no logic
`;var cs=[{question:"Do you want to use devContainer?",file:"devcontainer",content:na},{question:"Do you want to use conventional commits?",file:"conventional-commits",content:sa}],ps=[{file:"obsidian-skills/skills/obsidian-cli/references/command-reference.md",content:ea},{file:"obsidian-skills/skills/obsidian-cli/SKILL.md",content:aa}],ra=new J("setup","configure your projec");ra.action(async()=>{let e=_e();Ze("booo your project"),e.start("Initialize Openspec"),await Bun.spawn(["openspec","init","--tools","opencode"]).exited,e.stop("Openspec initialized"),e.start("Write rules");for await(let n of cs)if(n.question){if(await Ke({message:n.question,initialValue:!1}))await Bun.write(`${process.cwd()}/.opencode/rules/${n.file}.md`,n.content)}P.message("Install Obsidian rule"),await Bun.write(`${process.cwd()}/.opencode/rules/obsidian.md`,ta),P.message("Install Testing rule"),await Bun.write(`${process.cwd()}/.opencode/rules/testing.md`,oa),P.message("Install Dev Practices"),await Bun.write(`${process.cwd()}/.opencode/rules/dev-practices.md`,ia),e.stop("Rules written"),P.message("Add AGENTS.md"),await Bun.write(`${process.cwd()}/AGENTS.md`,Xe),e.start("Obsidian skills installation"),await Bun.spawn(["git","clone","https://github.com/kepano/obsidian-skills.git","./.opencode/skills/obsidian-skills"]).exited,e.stop("Obsidian skills installed"),e.start("Write skills");for await(let n of ps)await Bun.write(`${process.cwd()}/.opencode/skills/${n.file}.md`,n.content);e.stop("Skills written"),He("You're all set!")});var la=ra;var{log:da}=console;da(`\uD83D\uDC7B Booo v${W.version}`);await ee(W.version);var ms=new J("booo",`
  Booo means Bun, OpenCode, OpenSpec and Obsidian.
  It setups your project with skills, rules, ...
`,W.version);ms.addSubcommands([la]).action(()=>{da("use a command")}).ready();
