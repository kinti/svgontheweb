<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>A Practical Guide to SVGs on the web</title>
<link rel="stylesheet" href="/assets/css/style.min.css">
<link rel="shortcut icon" href="/assets/img/favicon.ico">
<script src="//use.typekit.net/erg0slu.js"></script>
<script>try{Typekit.load();}catch(e){}</script>
</head>
<body>
<header class="global-header">
<nav class="locale">
<ul>
<li class="active">En</li>
<li><a hreflang="ch" href="/zh">中国</a></li>
<li><a hreflang="es" href="/es">Es</a></li>
</ul>
</nav>
<div class="section typeset">
<div class="column">
<h2 class="zeta">SVG en la web</h2>
<h1 class="mega">Guía Práctica</h1>
</div>
</div>
</header>
<nav class="global-nav">
<div class="section">
<ul class="column">
<li class="active">Guía</li>
<li><a href="https://svgontheweb.com/changelog">Changelog</a></li>
<li class="about"><a href="https://svgontheweb.com/es/about">Acerca de</a></li>
</ul>
</div>
</nav>
<section>
<div class="section typeset">
<div class="column column--sidebar">
<h6>Contenidos</h6>
<ul>
<li><a href="https://svgontheweb.com/es/#svg"><span class="small-caps">SVG</span></a></li>
<li><a href="https://svgontheweb.com/es/#preparation">Preparación &amp; Optimización</a></li>
<li><a href="https://svgontheweb.com/es/#implementation">Opciones de implementación</a></li>
<li><a href="https://svgontheweb.com/es/#css"><span class="small-caps">Manipulación</span> CSS</a></li>
<li><a href="https://svgontheweb.com/es/#javascript"><span class="small-caps">Manipulación</span> JS</a></li>
<li><a href="https://svgontheweb.com/es/#styling">Anchura fija vs adaptatividad</a></li>
<li><a href="https://svgontheweb.com/es/#animating">Animación</a></li>
<li><a href="https://svgontheweb.com/es/#spriting">Uso como sprites</a></li>
<li><a href="https://svgontheweb.com/es/#mediaqueries">"Media queries"</a></li>
<li><a href="https://svgontheweb.com/es/#fallbacks">Contingencias</a></li>
<li><a href="https://svgontheweb.com/es/#resources">Recursos</a></li>
</ul>
</div>
<div class="column column--main">
<h6>Introducción</h6>
<p>Vivimos en la era de los píxels. Como diseñadores y desarrolladores de la web, los píxels pueden ser tanto nuestros amigos como nuestros enemigos. Queremos que todo sea bonito y nítido para cualquiera que use algunos de los websites en los que trabajamos, pero debemos mantener bajos los tamaños de archivo para no afectar al rendimiento. Y no nos quedan muchas otras opciones cuando se trata de iconos, logos e ilustraciones en la web que no sean <span class="small-caps">SVG</span>. Los Scalable Vector Graphics (Gráficos Vectoriales Escalables) pueden quedar nítidos a cualquier resolución de pantalla, pueden tener tamaños de archivo súperpequeños, y pueden ser fácilmente editados y modificados.</p>
<p>Esta guía pretende ofrecer una visión práctica de cómo usar <span class="small-caps">SVG</span>s en tus websites, dando algunos consejos y trucos por el camino para sacarles el máximo partido.</p>
</div>
</div>
</section>
<section class="group group--1" id="svg">
<div class="section typeset">
<div class="column">
<h2><a class="title" href="https://svgontheweb.com/es/#svg"><span class="small-caps">SVG</span></a></h2>
</div>
<div class="column column--main">
<p>Scalable Vector Graphics es un lenguaje de marcado (markup) basado en <span class="small-caps">XML</span> que puede contener vectores bidimensionales. Los vectores pueden ser formas simples, sucesiones de vectores ("paths"), o cualquier otra cosa que se pueda hacer en el Illustrator. Es un formato de imagen que tiene más en común con una página web que con una imagen <span class="small-caps">JPEG</span>. <span class="small-caps">SVG</span> es mucho más potente que cualquier otro formato de imagen que podamos usar en la web, ya que podemos manipularla mediante código (sea en el editor de texto o con <span class="small-caps">CSS / JS</span>).</p>
</div>
<div class="column column--sidebar">
<ul>
<li>Independiente de la resolución</li>
<li>Implementado en todos los navegadores modernos</li>
<li>Protegido contra cambios futuros (es un estándar del <span class="small-caps">W3C</span>)</li>
<li>Fácil de hacer y editar</li>
<li>Manipulable con <span class="small-caps">CSS y JS</span></li>
<li>Altamente compresible</li>
</ul>
</div>
</div>
</section>
<section class="group group--2" id="preparation">
<div class="section typeset">
<div class="column">
<h2><a class="title" href="https://svgontheweb.com/es/#preparation">Preparación &amp; Optimización</a></h2>
</div>
<div class="column column--main column--left">
<p>Preparar un <span class="small-caps">SVG</span> para usarlo en la web es un proceso simple, no más complicado que exportar un <span class="small-caps">JPEG</span> o un <span class="small-caps">PNG</span>. Trabaja como lo harías normalmente en tu editor de gráficos vectoriales preferido (Illustrator, Sketch, Inkscape [que es libre], etc [o incluso Photoshop si usas capas de formas]) con el gráfico del tamaño con el que esperes que vayas a usarlo. Explicaré algunas cosas que yo hago en el Illustrator, que es el que uso normalmente, pero los mismos principios se aplican a cualquier software. Probablemente querrás convertir los textos a contornos, ya que lo más probable es que no se muestre en la tipografía correcta a no ser que tengas pensado darle estilo con una tipografía web que uses en la página (¡se puede hacer!). No te preocupes por expandir todos los objetos a formas sólidas, sobre todo si tienes trazos, ya que podrías querer manipularlos en la página, y normalmente expandirlos no reduce el tamaño de archivo. Los nombres que pongas en las capas o grupos se incluirán en el <span class="small-caps">SVG</span> como una ID del elemento. Esto puede venir bien para dar estilos, pero aumentará un poco el tamaño final del archivo.</p>
<p>Al exportar, asegúrate de que el diseño está sobre un área de píxels enteros (o sea, no <span class="lining-numerals">23.3px X 86.8px</span>); sino, puede que no quede realmente nítido, y luego recorta el área de trabajo (artboard) alrededor. Puedes hacerlo en Illustrator con <code>Object &gt; Artboards &gt; Fit to Artwork Bounds</code>. Luego pulsa <code>guardar como</code> y elige <span class="small-caps">SVG</span> con los ajustes por defecto. Se puede hacer alguna optimización aquí, pero no vale realmente la pena, porque luego lo optimizaremos en post-proceso, y el tiempo que pasemos jugando aquí con los ajustes será perdido.</p>
<h3 class="delta">Trucos para reducir el archivo</h3>
<p class="caption sidenote">(Ver <a href="https://svgontheweb.com/es/#resources">recursos</a> para enlaces externos a artículos)</p>
<p>Hay bastantes buenos artículos sobre optimización de <span class="small-caps">SVG</span> en la web, que ofrecen mucha información sobre el tema, pero me gustaría compartir unos consejos y trucos que para mí son los más efectivos y útiles. No suponen mucho más trabajo y pueden añadirse fácilmente a tu rutina habitual.</p>
<p>Para mantener los <span class="small-caps">SVG</span>s lo más pequeños posible querremos eliminar efectivamente todo lo que no sea necesario. La herramienta más conocida y (para mí) la mejor para post-procesar <span class="small-caps">SVG</span>s es <a href="https://github.com/svg/svgo" class="small-caps">SVGO</a>. Sirve para eliminar todo el código que no se necesita — nota: recuerda ser cuidadoso al usarlo si tienes pensado manipular con <span class="small-caps">CSS / JS</span>, ya que a veces puede sobre-optimizar los archivos, haciendo más difícil hacer luego con ellos lo que habías pensado. Algo muy práctico de <span class="small-caps">SVGO</span> es que puede añadirse al proceso de trabajo para que sea automático (o se puede usar un <span class="small-caps"><a href="https://github.com/svg/svgo-gui">GUI</a></span> para hacerlo uno mismo, si se prefiere).</p>
<p>Dando un paso más en lo de ‘eliminar todo lo innecesario’, podemos hacer algo más en el editor gráfico. Primero, asegurarnos de que estamos usando el menor número posible de "paths" y formas para conseguir lo que queremos, y también de que hay el menor número posible de puntos en los "paths". Se trata de combinar y simplificar todo lo que se pueda, y luego eliminar el mayor número posible de puntos de los "paths". <a href="http://www.astutegraphics.com/software/vectorscribe/">VectorScribe</a> es un plugin de Illustrator que incluye <code>Smart Remove Brush Tool</code> (Pincel de Eliminación Inteligente), que permite eliminar puntos manteniendo la forma general intacta.</p>
<p class="caption sidenote">Pre-optimización</p>
<p><img src="/2point.png" alt="Pre optimisation"></p>
<p class="caption sidenote">Punto eliminado con Smart Remove Brush Tool</p>
<p><img src="/1point.png" alt="Post optimisation"></p>
<p>Luego tendremos que hacer zoom. Con Illustrator habilitaremos Pixel Preview con <code>View &gt; Pixel Preview</code>, y miraremos dónde tenemos los puntos. Para reducir el tamaño al mínimo, los puntos deben ajustarse a la parrilla de píxels (o sea, sobre valores enteros de píxel). Lleva algún tiempo engancharlos y recolocarlos, pero vale la pena este pequeño esfuerzo añadido, ya que esto también nos asegura la reproducción más nítida posible (recuerda que es posible que antes te hayan quedado algunas zonas a medio píxel).</p>
<p class="caption sidenote">Puntos fuera de píxel</p>
<p><img src="/nosnap.png" alt="Points off pixels"></p>
<p class="caption sidenote">Píxel enganchado</p>
<p><img src="/snap.png" alt="Pixel snapped"></p>
<p>Si hay dos (o más) formas alineadas, podemos eliminar las áreas solapadas. Una cosa que hay que vigilar es que a veces queda una línea blanca entre ellas, aunque los "paths" estén alineados, así que a veces hay que solaparlas un poco para evitarlo. Nota: en <span class="small-caps">SVG</span> el <code>índice z</code> se define por el orden en que aparecen en el código, siendo el de más abajo el que está encima, así que hay que poner las formas de encima más abajo en el código.</p>
<p><img src="/whiteline.png" alt="Post optimisation"></p>
<p>Último pero no menos importante, una cosa que se suele olvidar, recuerda habilitar la compresión gzip para <span class="small-caps">SVG</span>s en tus websites en el archivo <code>.htaccess</code>.</p>
<pre><code>AddType image/svg+xml svg svgz
&lt;IfModule mod_deflate.c&gt;
    &lt;IfModule mod_filter.c&gt;
        AddOutputFilterByType DEFLATE "image/svg+xml" \
                                      "text/css" \
                                      "text/html" \
                                      "text/javascript"
                                      ... etc
    &lt;/IfModule&gt;
&lt;/IfModule&gt;</code></pre>
<hr>
<p>Como ejemplo de lo efectivas que pueden ser estas técnicas, cogí el logo <a href="http://breakingborde.rs/">Breaking Borders</a> original y lo optimicé de la siguiente manera: ajusté el tamaño al máximo necesario, hice limpieza en los "paths", eliminé el mayor número posible de puntos, moví los puntos a valores enteros de píxel, eliminé la mayor área solapada posible, y le pasé el <span class="small-caps">SVGO</span>.</p>
<h4 class="zeta">Original: 1413b</h4>
<img src="/bblogo.svg" alt="Breaking Borders Logo" height="65" width="68" class="bb-logo-example">
<h4 class="zeta">Optimizado: 409b</h4>
<img src="/bblogo-optim.svg" alt="Breaking Borders Logo" height="65" width="68" class="bb-logo-example">
<p><b>Considerándolo todo, queda un <span class="lining-numerals">~71%</span> más pequeño (y un <span class="lining-numerals">~83%</span> si lo comprimimos con gzip)</b></p>
<p><span class="small-caps highlight">ADICIÓN:</span> <a href="https://twitter.com/robsterlini">Rob Sterlini</a> me señaló que, como la ‘b’ se repite, se podría usar un elemento <code>&lt;use&gt;</code> para repetirla, lo cual lo reduciría aun más; y tenía toda la razón.</p>
<h4 class="zeta">Optimizado aun más con &lt;use&gt;: 311b</h4>
<img src="/bblogo-optim2.svg" alt="Breaking Borders Logo" height="65" width="68" class="bb-logo-example">
<p><b><span class="lining-numerals">~78%</span> más pequeño</b></p>
<p>Si hacemos esto con todos los <span class="small-caps">SVG</span>s de un site, realmente se notará.</p>
</div>
</div>
</section>
<section class="group group--3" id="implementation">
<div class="section typeset">
<div class="column">
<h2><a class="title" href="https://svgontheweb.com/es/#implementation">Opciones de implementación</a></h2>
</div>
<div class="column column--main">
<p>A la hora de usar <span class="small-caps">SVG</span>s en la web, hay varias formas de trabajar. Algunas ofrecen beneficios que nos pueden ser útiles dependiendo del resultado que queramos, y otras será mejor evitarlas. Si queremos atenernos a lo básico para lograr los beneficios de independencia de resolución y pequeño tamaño de archivo, podemos referenciar el <span class="small-caps">SVG</span> en un <code>img</code> o como <code>background-image</code> en <span class="small-caps">CSS</span>, igual que haríamos con cualquier otro formato de imagen.</p>
</div>
</div>
<div class="section typeset">
<div class="column column--duo">
<h4 class="epsilon">Img</h4>
<p>Como haríamos con cualquier otra imagen. También se pueden usar <span class="small-caps">SVG</span>s en un elemento <code>&lt;picture&gt;</code>. Nótese que este método limita las funcionalidades de manipulación.</p>
<pre><code>&lt;img src="bblogo.svg" alt="Breaking Borders Logo" height="65" width="68"&gt;</code></pre>
<img src="/bblogo-optim.svg" alt="Breaking Borders Logo" height="65" width="68" class="bb-logo-example">
</div>
<div class="column column--duo">
<h4 class="epsilon">Background-image</h4>
<p>Es mejor no codificarlos con <span class="lining-numerals">base64</span>, ya que se bloqueará la carga del resto de estilos mientras se descarga. Nótese que este método limita las funcionalidades de manipulación.</p>
<pre><code>.logo {
  background-image: url(bblogo.svg);
}</code></pre>
<div class="bb-bg"></div>
</div>
</div>
<div class="section typeset">
<div class="column column--duo">
<h4 class="epsilon">Iframe</h4>
<p>Se pueden cargar <span class="small-caps">SVG</span>s en un <code>&lt;iframe&gt;</code>. Esto permite hacer la mayoría de las cosas, pero no estoy seguro de que sea el mejor método si queremos avanzar ¯\_(ツ)_/¯.</p>
<pre><code>&lt;iframe src="bblogo.svg"&gt;Your browser does not support iframes&lt;/iframe&gt;</code></pre>
<iframe src="/bblogo-optim.svg" class="bb-logo-example">Your browser does not support iframes</iframe>
</div>
<div class="column column--duo">
<h4 class="epsilon">Embed</h4>
<p><code>&lt;embed&gt;</code> está pensado para integrar ‘una aplicación externa’ o ‘contenido interactivo’. Se puede usar para <span class="small-caps">SVG</span>s, pero es preferible no hacerlo.</p>
<pre><code>&lt;embed type="image/svg+xml" src="bblogo.svg" /&gt;</code></pre>
<embed type="image/svg+xml" src="/assets/img/bblogo-optim.svg" class="bb-logo-example">
</div>
</div>
<div class="section typeset">
<div class="column column--duo">
<h4 class="epsilon">Object</h4>
<p><code>&lt;object&gt;</code> es la mejor opción si queremos poder manipular un <span class="small-caps">SVG</span> sin tener que ponerlo inline en el <span class="small-caps">HTML</span>.</p>
<pre><code>&lt;object type="image/svg+xml" data="bblogo.svg"&gt;Your browser does not support SVGs&lt;/object&gt;</code></pre>
<object type="image/svg+xml" data="/bblogo-optim.svg" class="bb-logo-example">Your browser does not support SVGs</object>
</div>
<div class="column column--duo">
<h4 class="epsilon">Inline</h4>
<p>Poner el código <span class="small-caps">SVG</span> inline ahorrará una solicitud <span class="small-caps">HTTP</span>, pero la imagen no quedará en la caché del navegador. Es la forma más fácil para manipular, pero mantener código <span class="small-caps">SVG</span> inline puede ser una lata.</p>
<pre><code>&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 65"&gt;
  &lt;path fill="#1A374D" d="M42 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v21l12 15-7 15.7c14.5 13.9 35 2.8 35-13.7 0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/&gt;
  &lt;path d="M14 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v41c0 8.2 9.2 17 20 17s20-9.2 20-20c0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/&gt;
&lt;/svg&gt;</code></pre>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 65" class="bb-logo-example"><path fill="#1A374D" d="M42 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v21l12 15-7 15.7c14.5 13.9 35 2.8 35-13.7 0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"></path><path d="M14 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v41c0 8.2 9.2 17 20 17s20-9.2 20-20c0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"></path></svg>
</div>
</div>
<div class="section typeset">
<div class="column">
<hr>
</div>
<div class="column column--main">
<h3 class="zeta">Para concluir</h3>
<p>Si quieres sacar el máximo partido a tus <span class="small-caps">SVG</span>s, usa <code>&lt;object&gt;</code>. Alternativamente puedes meterlo inline para ahorrar solicitudes <span class="small-caps">HTTP</span>, pero no se almacenará en caché. Si sólo quieres usar <span class="small-caps">SVG</span>s como lo harías con cualquier otra imagen, usa <code>&lt;img&gt;</code> o <code>background-image</code>. También es posible usar <code>&lt;iframe&gt;</code> y <code>&lt;embed&gt;</code>, pero no creo que sean las mejores opciones a seguir (y acorde con los propósitos de este site, no trataré más sobre ellas).</p>
</div>
<div class="column">
<table id="implementation-support">
<thead>
<tr>
<th></th>
<th>Object</th>
<th>Inline</th>
<th>Img</th>
<th>Background-image</th>
</tr>
</thead>
<tbody>
<tr>
<th class="feature"><span class="small-caps">Manipulación</span> CSS</th>
<td>Sí</td>
<td>Sí</td>
<td>Algunas inline</td>
<td>Algunas inline</td>
</tr>
<tr>
<th class="feature"><span class="small-caps">Manipulación</span> JS</th>
<td>Sí</td>
<td>Sí</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<th class="feature"><span class="small-caps">Animación</span> SVG</th>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
<td>Sí</td>
</tr>
<tr>
<th class="feature">Animación <span class="small-caps">SVG</span> Interactiva</th>
<td>Sí</td>
<td>Sí</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>
</div>
<div class="column column--main">
<p>Nota: ‘Algunas inline’ significa que algunas funcionan, pero sólo si el <code>&lt;style&gt;</code> <span class="small-caps">CSS</span> está empotrado dentro del código del <span class="small-caps">SVG</span>. Más información en la sección siguiente.</p>
</div>
</div>
</section>
<section class="group group--4" id="css">
<div class="section typeset">
<div class="column">
<h2><a class="title" href="https://svgontheweb.com/es/#css"><span class="small-caps">Manipulación</span> CSS</a></h2>
</div>
<div class="column column--main">
<p>Una de las grandes cosas de usar <span class="small-caps">SVG</span> es que podemos cambiar los estilos de los elementos internos usando nuestro querido viejo <span class="small-caps">CSS</span>. Por ejemplo, tenemos un icono naranja, y queremos que sea azul en algunas páginas; podemos hacerlo sin tener que hacer un nuevo icono azul. Ideal.</p>
<p>Hay dos formas de cambiar estilos: inline en el <span class="small-caps">SVG</span>, y externamente (o sea, sin nuestra hoja de estilo). Para poner los estilos inline, hay que incluirlos dentro de una etiqueta <code>&lt;style&gt;</code> y también dentro de <code>&lt;![CDATA[ ... ]]&gt;</code>. Es mejor hacerlo así, porque a veces los parsers de <span class="small-caps">XML</span> pueden tener conflictos con ciertos caracteres (por ejemplo: <code>&gt;</code>). Y aunque ahora no tengamos ningún caracter extravagante por ahí, la mejor práctica es usar <code>CDATA</code>, porque se podría añadir alguno más tarde y descomponerlo todo.</p>
<p>Los estilos inline funcionarán en la mayoría de implementaciones. <code>&lt;img&gt;</code> y <code>background-image</code> no soportan animaciones <span class="small-caps">CSS3</span> aunque estén inline (ver más en la sección <a href="https://svgontheweb.com/es/#animating">animaciones</a>). <code>background-image</code> no soporta media queries inline (ver más en sección <a href="https://svgontheweb.com/es/#mediaqueries">media queries</a> ).</p>
</div>
</div>
<div class="section typeset">
<div class="column column--sidebar">
<h4 class="epsilon">Estilos inline</h4>
<object type="image/svg+xml" data="/bblogo-css.html" class="bb-logo-example">Your browser does not support SVGs</object>
</div>
<div class="column column--main">
<pre><code>&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 65"&gt;
  &lt;style type="text/css"&gt;
    &lt;![CDATA[
    .firstb { fill: yellow; }
    .secondb { fill: red; }
    ]]&gt;
  &lt;/style&gt;
  &lt;path class="secondb" d="M42 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v21l12 15-7 15.7c14.5 13.9 35 2.8 35-13.7 0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/&gt;
  &lt;path class="firstb" d="M14 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v41c0 8.2 9.2 17 20 17s20-9.2 20-20c0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/&gt;
&lt;/svg&gt;</code></pre>
</div>
</div>
<div class="section typeset">
<div class="column column--main">
<p>Si se quieren usar estilos externos, con los que habitualmente es más fácil trabajar y son más fáciles de mantener, no se puede usar <code>&lt;img&gt;</code> ni <code>background-image</code>. Si se usa <code>&lt;object&gt;</code>, necesitamos referenciar la hoja de estilo internamente desde el archivo <span class="small-caps">SVG</span> (ver el código más abajo). Recuerda: si lo haces así, el <span class="small-caps">SVG</span> no podrá saber cuál es su clase heredada (o sea, el <code>&lt;object&gt;</code>), así que no intentes hacerlo así para definir estilos. Los <span class="small-caps">SVG</span>s inline no necesitan incluir esto y por lo tanto es algo más fácil trabajar con ellos en este sentido.</p>
</div>
</div>
<div class="section typeset">
<div class="column column--sidebar">
<h4 class="epsilon">Estilos externos</h4>
<object type="image/svg+xml" data="/bblogo-nocss.html" class="bb-logo-example">Your browser does not support SVGs</object>
</div>
<div class="column column--main">
<pre><code>// Add to very start of SVG file before &lt;svg&gt;
&lt;?xml-stylesheet type="text/css" href="style.css"?&gt;</code></pre>
<pre><code>// In style.css
.firstb { fill: yellow; }
.secondb { fill: red; }</code></pre>
</div>
</div>
</section>
<section class="group group--5" id="javascript">
<div class="section typeset">
<div class="column">
<h2><a class="title" href="https://svgontheweb.com/es/#javascript"><span class="small-caps">Manipulación</span> JS</a></h2>
</div>
<div class="column column--main">
<p>Mis conocimientos de JavaScript son bastante precarios, así que sólo apuntaré algunas pistas básicas sobre cómo usar <span class="small-caps">JS</span> para cambiar cosas en un <span class="small-caps">SVG</span>. Si quieres empotrar los scripts dentro del archivo <span class="small-caps">SVG</span>, recuerda incluirlos entre <code>&lt;![CDATA[ ... ]]&gt;</code>, también para evitar errores de parsing. Los scripts no se ejecutarán si se usa <code>&lt;img&gt;</code> o <code>background-image</code> como medida de seguridad (esto es, para prevenir la ejecución de código potencialmente malicioso en la página).</p>
<p>Al trabajar con <span class="small-caps">JS</span> externo (o sea, no empotrado en el archivo <span class="small-caps">SVG</span>), si tenemos el <span class="small-caps">SVG</span> inline, podemos apuntar a él como haríamos con cualquier otro elemento <span class="small-caps">DOM</span>. Si se usa un  <code>&lt;object&gt;</code> podemos apuntar a él con <code>contentDocument</code>. Se puede ser mucho más creativo, pero aquí dejo un ejemplo:</p>
</div>
</div>
<div class="section typeset">
<div class="column column--sidebar">
<h4 class="epsilon">Scripts externos</h4>
<object type="image/svg+xml" data="/bblogo-js.html" id="logoObject" class="bb-logo-example">Your browser does not support SVGs</object>
</div>
<div class="column column--main">
<pre><code>window.onload=function() {
  var object = document.getElementById("logoObject");
  var svgDocument = object.contentDocument;
  var svgb1 = svgDocument.getElementsByClassName("firstb");
  var svgb2 = svgDocument.getElementsByClassName("secondb");
  svgb1[0].setAttribute("fill", "yellow");
  svgb2[0].setAttribute("fill", "red");
};</code></pre>
</div>
</div>
</section>
<section class="group group--6" id="styling">
<div class="section typeset">
<div class="column">
<h2><a class="title" href="https://svgontheweb.com/es/#styling">Anchura fija vs adaptatividad</a></h2>
</div>
<div class="column column--main">
<p>Cuando se usan imágenes en la web en diseños adaptativos, hay dos opciones para darles estilo: se pueden mantener con tamaño fijo y ajustar para los puntos de cambio (breakpoints) si es necesario; o dejar que se redimensionen con la página dependiendo de su container correspondiente.</p>
<p>Si son de tamaño fijo, con lo único que hay que tener cuidado es que si usamos el <span class="small-caps">SVG</span> como <code>background-image</code> hay que asegurarse de incluir un <code>background-size</code>, porque los navegadores se pueden confundir y pueden o cortar la imagen o encogerla, especialmente si la imagen se muestra con un tamaño distinto del original.</p>
<p>Cuando implementamos un <span class="small-caps">SVG</span> que se puede redimensionar, hay que recordar un par de cosas (y otra vez, sobre todo en la implementación <code>background-image</code>) como se esboza a continuación:</p>
</div>
</div>
<div class="section typeset">
<div class="column column--quad">
<h4 class="epsilon">Object</h4>
<p>El comportamiento esperado con <code>width: 100%;</code></p>
<object type="image/svg+xml" data="/bblogo-optim.svg" class="bb-logo-resp">Your browser does not support SVGs</object>
</div>
<div class="column column--quad">
<h4 class="epsilon">Inline</h4>
<p>Necesitó previamente un valor de <code>max-height</code> para funcionar, de trabajos recientes, como se esperaba. Nótese que Safari no los redibuja tan rápido (si son complejos) al redimensionar la ventana.</p>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 65" class="bb-logo-resp"><path fill="#1A374D" d="M42 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v21l12 15-7 15.7c14.5 13.9 35 2.8 35-13.7 0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"></path><path d="M14 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v41c0 8.2 9.2 17 20 17s20-9.2 20-20c0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"></path></svg>
</div>
<div class="column column--quad">
<h4 class="epsilon">Img</h4>
<p>El comportamiento esperado con <code>width: 100%;</code></p>
<img src="/bblogo-optim.svg" alt="Breaking Borders Logo" height="65" width="68" class="bb-logo-resp">
</div>
<div class="column column--quad">
<h4 class="epsilon">Background-image</h4>
<p>Necesita <code>padding-bottom: #%;</code> para mantener las proporciones de imagen, si no no se mostrará.</p>
<div class="bb-bg-resp"></div>
</div>
</div>
</section>
<section class="group group--7" id="animating">
<div class="section typeset">
<div class="column">
<h2><a class="title" href="https://svgontheweb.com/es/#animating">Animación</a></h2>
</div>
<div class="column column--main">
<p>Cuando se trata de animar <span class="small-caps">SVG</span>s, hay una pocas opciones que podemos usar: animación <span class="small-caps">SVG</span> (basada en la especificación <span class="small-caps">SMIL</span>), animaciones <span class="small-caps">CSS3</span>, o animaciones <span class="small-caps">JS</span>. La animación <span class="small-caps">SVG</span> y las animaciones <span class="small-caps">CSS3</span> permitirán hacer la mayoría de las cosas que queramos, siendo la animación <span class="small-caps">SVG</span> ligeramente más potente al tener control sobre algunas cosas más. JavaScript permite hacer animaciones bastante complejas de forma relativamente fácil, especialmente con bibliotecas como <a href="http://snapsvg.io/">Snap.svg</a>. Esto supera un poco mis conocimientos de JavaScript, así que os dejaré que miréis las demos para que veáis por vosotros mismos si es la opción adecuada. La animación <span class="small-caps">SVG</span> es súper potente, pero no profundizaré demasiado en ella, ya que, para ser honestos, nunca la he usado realmente. Puedo imaginar que será útil para ilustraciones que nos gustaría que incluyesen alguna bonita animación, pero, desde un punto de vista práctico, no todos los proyectos disponen de tiempo o de presupuesto para invertir en esto. Pero si lo haces, realmente es muy fácil empezar a jugar con esto, y hay algunos <a href="https://svgontheweb.com/es/#resources">tutoriales estupendos</a> online. Básicamente, se añade un elemento hijo de <code>&lt;animate&gt;</code> a cualquier "path" o forma de los <span class="small-caps">SVG</span>s, que controlarán la animación. Y lo mejor es que funciona con cualquier método de implementación. Internet Explorer no soporta animación <span class="small-caps">SVG</span>; pero se puede usar un polyfill, como <a href="https://leunen.me/fakesmile/">FakeSmile</a> si necesitas que funcione en <span class="small-caps">IE</span> también.</p>
<p>Aquí hay una pequeña demostración para que lo veáis. Nota: he aclarado el azul para que sea más fácil ver la animación.</p>
<pre><code>&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 65"&gt;
  &lt;path fill="#4e86b1" d="M42 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v21l12 15-7 15.7c14.5 13.9 35 2.8 35-13.7 0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"&gt;
    &lt;animate dur="2s" values="#000000; #4e86b1; #000000" keyTimes="0; 0.5; 1" attributeName="fill" repeatCount="indefinite"/&gt;
  &lt;/path&gt;
  &lt;path d="M14 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v41c0 8.2 9.2 17 20 17s20-9.2 20-20c0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"&gt;
    &lt;animate dur="2s" values="#4e86b1; #000000; #4e86b1" keyTimes="0; 0.5; 1" attributeName="fill" repeatCount="indefinite"/&gt;
    &lt;/path&gt;
&lt;/svg&gt;</code></pre>
</div>
</div>
<div class="section typeset">
<div class="column">
<h4><span class="small-caps">Animación</span> SVG</h4>
</div>
<div class="column column--quad">
<h4 class="epsilon">Object</h4>
<object type="image/svg+xml" data="/bblogo-anim2.svg" class="bb-logo-example">Your browser does not support SVGs</object>
</div>
<div class="column column--quad">
<h4 class="epsilon">Inline</h4>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 65" class="bb-logo-example"><path fill="#4e86b1" d="M42 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v21l12 15-7 15.7c14.5 13.9 35 2.8 35-13.7 0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"><animate dur="2s" values="#000000; #4e86b1; #000000" keyTimes="0; 0.5; 1" attributeName="fill" repeatCount="indefinite"></animate></path><path d="M14 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v41c0 8.2 9.2 17 20 17s20-9.2 20-20c0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"><animate dur="2s" values="#4e86b1; #000000; #4e86b1" keyTimes="0; 0.5; 1" attributeName="fill" repeatCount="indefinite"></animate></path></svg>
</div>
<div class="column column--quad">
<h4 class="epsilon">Img</h4>
<img src="/bblogo-anim2.svg" alt="Breaking Borders Logo" height="65" width="68" class="bb-logo-example">
</div>
<div class="column column--quad">
<h4 class="epsilon">Background-image</h4>
<div class="bb-bg-anim"></div>
</div>
</div>
<div class="section typeset">
<div class="column column--main">
<p>A menudo, cuando queremos animar un icono o una ilustración en la web, tendrá que ver con una interacción, por ejemplo, al pasar por encima, etc. Esto entraría en las categorías Manipulación <span class="small-caps">CSS</span> y Animación <span class="small-caps">SVG</span> Interactiva en la <a href="https://svgontheweb.com/es/#implementation-support">tabla de competencias</a> de arriba, y por tanto no funciona con animación <span class="small-caps">SVG</span> ni con  animaciones <span class="small-caps">CSS3</span> si se usa <code>&lt;img&gt;</code> o <code>background-image</code>. Para conseguir animaciones interactivas con animación <span class="small-caps">SVG</span> podemos añadir <code>begin="mouseover"</code> y <code>begin="mouseout"</code>, y con animaciones <span class="small-caps">CSS3</span> como se haría en cualquier otro sitio: añadir clases a los elementos del <span class="small-caps">SVG</span> y darles estilo en <code>hover</code>. Una cosa a tener en cuenta es que si queremos dar estilo a las animaciones desde la hoja de estilo externa, funcionará como esperamos si tenemos el <span class="small-caps">SVG</span> inline, pero si usamos <code>&lt;object&gt;</code>, necesitaremos referenciar la hoja de estilo externa desde dentro del <span class="small-caps">SVG</span> también.</p>
</div>
</div>
<div class="section typeset">
<div class="column column--sidebar">
<h4 class="epsilon">Animación <span class="small-caps">SVG</span> interactiva</h4>
<p>Sólo funciona con <code>&lt;object&gt;</code> o inline.</p>
<object type="image/svg+xml" data="/bblogo-anim.html" class="bb-logo-example">Your browser does not support SVGs</object>
</div>
<div class="column column--main">
<pre><code>&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 65"&gt;
  &lt;path fill="#4e86b1" d="M42 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v21l12 15-7 15.7c14.5 13.9 35 2.8 35-13.7 0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"&gt;
    &lt;animate fill="freeze" dur="0.1s" to="#000000" from="#4e86b1" attributeName="fill" begin="mouseover"/&gt;
    &lt;animate fill="freeze" dur="0.1s" to="#4e86b1" from="#000000" attributeName="fill" begin="mouseout"/&gt;
  &lt;/path&gt;
  &lt;path d="M14 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v41c0 8.2 9.2 17 20 17s20-9.2 20-20c0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"&gt;
    &lt;animate fill="freeze" dur="0.1s" to="#4e86b1" from="#000000" attributeName="fill" begin="mouseover"/&gt;
    &lt;animate fill="freeze" dur="0.1s" to="#000000" from="#4e86b1" attributeName="fill" begin="mouseout"/&gt;
  &lt;/path&gt;
  &lt;/svg&gt;</code></pre>
</div>
</div>
<div class="section typeset">
<div class="column column--sidebar">
<h4 class="epsilon"><span class="small-caps">Animación</span> CSS3</h4>
<p>Sólo funciona con <code>&lt;object&gt;</code> o inline. También funciona con <span class="small-caps">CSS</span> externo, como se explicó <a href="https://svgontheweb.com/es/#css">arriba</a>.</p>
<object type="image/svg+xml" data="/bblogo-animcss.html" class="bb-logo-example">Your browser does not support SVGs</object>
</div>
<div class="column column--main">
<pre><code>&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 65"&gt;
  &lt;style type="text/css"&gt;
    &lt;![CDATA[
    .firstb { fill: #000; transition: fill 0.1s; }
    .firstb:hover { fill: #4e86b1; }
    .secondb { fill: #4e86b1; transition: fill 0.1s; }
    .secondb:hover { fill: #000; }
    ]]&gt;
  &lt;/style&gt;
  &lt;path class="secondb" d="M42 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v21l12 15-7 15.7c14.5 13.9 35 2.8 35-13.7 0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/&gt;
  &lt;path class="firstb" d="M14 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v41c0 8.2 9.2 17 20 17s20-9.2 20-20c0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/&gt;
&lt;/svg&gt;</code></pre>
</div>
</div>
</section>
<section class="group group--8" id="spriting">
<div class="section typeset">
<div class="column">
<h2><a class="title" href="https://svgontheweb.com/es/#spriting">Uso como sprites</a></h2>
</div>
<div class="column column--main">
<p>Se pueden crear y usar sprites <span class="small-caps">SVG</span> igual que hacemos habitualmente con <span class="small-caps">PNG</span>s y <code>background-image</code> para tener beneficios de resolución, o podemos dar un paso más y usar la potencia extra que tenemos con <span class="small-caps">SVG</span>. De nuevo, no profundizaré mucho, ya que la cosa se complica, y personalmente, nunca me he visto en la necesidad de implementarlo. El beneficio es que obtenemos toda la potencia del <span class="small-caps">SVG</span> con menos solicitudes <span class="small-caps">HTTP</span>.</p>
<p>Hay dos posibles aproximaciones. En la primera, definimos todos los iconos dentro de los elementos <code>&lt;symbol&gt;</code> del <span class="small-caps">SVG</span>, pero los ocultamos. Luego referenciamos cada uno cuando se necesiten con un elemento <code>&lt;use&gt;</code> que referencie el <code>&lt;symbol&gt;</code> con <code>xlink:href="#id"</code>. La segunda aproximación usa el atributo <code>viewbox</code> del <span class="small-caps">SVG</span>  para recortar el área "artboard" (el área del <span class="small-caps">SVG</span> que se muestra) alrededor de una cierta zona. Ambos son usos bastante avanzados de <span class="small-caps">SVG</span>, así que sólo deberíamos preocuparnos de ellos si los vamos a usar.</p>
<p>Si quieres aprender a usar estas técnicas, echa por favor una ojeada a los enlaces de <a href="https://svgontheweb.com/es/#resources">recursos</a>, especialmente el <a href="http://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/">artículo</a> de <a href="https://twitter.com/SaraSoueidan">Sara Soueidan’s</a> en 24ways .</p>
<p>Si se quiere usar un sprite <span class="small-caps">SVG</span> como se haría con un sprite <span class="small-caps">PNG</span> con <span class="small-caps">CSS</span>, debemos indicar que es necesario añadir los atributos <code>width</code> y <code>height</code> junto al atributo <code>viewBox</code> en el código del <span class="small-caps">SVG</span>. Durante el proceso de optimización se suelen eliminar, porque normalmente no se necesitan. En este caso, sin embargo, <span class="small-caps">IE9 y 10</span> los necesitan para poder recortar correctamente parte de la imagen del sprite. La razón es que estos navegadores cogen el ancho y alto especificados en el <span class="small-caps">CSS</span> para el tamaño de imagen, pero estos son en realidad los tamaños de la parte de la imagen que se necesita (no de toda la imagen). Confuso, ya lo sé, pero es algo con lo que me encontré recientemente.</p>
</div>
</div>
</section>
<section class="group group--9" id="mediaqueries">
<div class="section typeset">
<div class="column">
<h2><a class="title" href="https://svgontheweb.com/es/#mediaqueries">Media queries</a></h2>
</div>
<div class="column column--main">
<p>Una cosa realmente chula de <span class="small-caps">SVG</span>s es que si se usan media queries en los estilos empotrados en el archivo, en lugar de trabajar desde el tamaño de viewport, trabajarán desde el tamaño de viewport del <span class="small-caps">SVG</span>. Esto significa básicamente que se traen de fábrica su propia implementación de trabajo de los elementos de las queries. Qué bueno. Esto nos permite controlar cómo se verá el <span class="small-caps">SVG</span> sea cual sea el tamaño.</p>
<p>Imagina que eres una gran marca y quieres que tu logo se use correctamente independientemente del tamaño en que se muestre. Bueno, pues desde luego que se puede hacer. Sólo hay que empotrar algunas media queries y se puede cambiar su formateo basándose en el tamaño en que se está mostrando. Esto funciona con todas las implementaciones menos <code>background-image</code>, y en todos los navegadores (nota: <span class="small-caps">IE9–11</span> parece ignorar algunos puntos de cambio (breakpoints)). Puedes jugar con el deslizador de abajo para ver un ejemplo de cómo funciona:</p>
<form oninput="getElementById(&#39;responsive-logo&#39;).setAttribute(&#39;width&#39;,value=slider.value);" style="min-height: 200px;">
<input id="slider" type="range" min="30" max="335" value="335">
<br>
<img id="responsive-logo" class="slider-image" src="/bblogo-resp.svg" width="335" alt="svg">
</form>
</div>
</div>
</section>
<section class="group group--10" id="fallbacks">
<div class="section typeset">
<div class="column">
<h2><a class="title" href="https://svgontheweb.com/es/#fallbacks">Contingencias</a></h2>
</div>
<div class="column column--main">
<p>Unas palabras sobre contingencias. <span class="small-caps">SVG</span> está soportado en todos los navegadores modernos. Si aun tienes que dar soporte a <span class="small-caps">IE8</span>, entonces tendrás que implementar contingencias, más probablemente en forma de <span class="small-caps">PNG</span>s. No me extenderé mucho en esto, porque probablemente ya no deberías estar dando soporte a <span class="small-caps">IE8</span> ¯\_(ツ)_/¯. De todas formas, si quieres disponer de contingencias, básicamente las cosas se complican mucho y muy rápido, como suele ocurrir con <span class="small-caps">SVG</span>. Recomendaría leer este artículo exhaustivo de <a href="https://twitter.com/AmeliasBrain">Amelia Bellamy-Royds</a> en <a href="https://css-tricks.com/a-complete-guide-to-svg-fallbacks/">CSS-Tricks</a>.</p>
</div>
</div>
</section>
<section class="group group--11" id="resources">
<div class="section typeset">
<div class="column">
<h2><a class="title" href="https://svgontheweb.com/es/#resources">Recursos</a></h2>
</div>
<div class="column column--duo">
<h3 class="zeta">General</h3>
<ul>
<li><a href="http://www.webdesignerdepot.com/2015/01/the-ultimate-guide-to-svg/">Ultimate guide to <span class="small-caps">SVG</span></a></li>
<li><a href="http://www.sitepoint.com/add-svg-to-web-page/">How to Add <span class="small-caps">SVG</span>s to Your Web Page</a></li>
<li><a href="http://www.w3.org/Graphics/SVG/About.html"><span class="small-caps">W3C</span> About <span class="small-caps">SVG</span></a></li>
<li><a href="http://www.smashingmagazine.com/2014/03/05/rethinking-responsive-svg/">Rethinking Responsive <span class="small-caps">SVG</span></a></li>
<li><a href="http://tympanus.net/Tutorials/ResponsiveSVGs/index6.html">Making <span class="small-caps">SVG</span>s Responsive</a></li>
<li><a href="https://css-tricks.com/using-svg/">Using <span class="small-caps">SVG</span></a></li>
<li><a href="http://blogs.adobe.com/webplatform/2013/01/08/svg-styling/"><span class="small-caps">SVG</span> Styling</a></li>
</ul>
</div>
<div class="column column--duo">
<h3 class="zeta">Optimizando</h3>
<ul>
<li><a href="http://calendar.perfplanet.com/2014/tips-for-optimising-svg-delivery-for-the-web/">Tips For Optimising <span class="small-caps">SVG</span> Delivery For The Web</a></li>
<li><a href="http://jaydenseric.com/blog/how-to-optimize-svg">How To Optimize <span class="small-caps">SVG</span></a></li>
<li><a href="https://css-tricks.com/understanding-and-manually-improving-svg-optimization/">Understanding and Manually Improving <span class="small-caps">SVG</span> Optimization</a></li>
<li><a href="https://www.youtube.com/watch?v=1AdX8odLC8M"><span class="small-caps">SVG</span> Optimization Video</a></li>
<li><a href="https://jakearchibald.github.io/svgomg/"><span class="small-caps">SVGOMG</span> — <span class="small-caps">SVGO GUI</span> in browser</a></li>
</ul>
</div>
</div>
<div class="section typeset">
<div class="column column--duo">
<h3 class="zeta">Animando</h3>
<ul>
<li><a href="https://css-tricks.com/guide-svg-animations-smil/">A Guide to <span class="small-caps">SVG</span> Animations</a></li>
<li><a href="http://www.smashingmagazine.com/2014/11/03/styling-and-animating-svgs-with-css/">Styling And Animating <span class="small-caps">SVG</span>s With <span class="small-caps">CSS</span></a></li>
<li><a href="http://product.voxmedia.com/2013/11/25/5426880/polygon-feature-design-svg-animations-for-fun-and-profit"><span class="small-caps">SVG</span> animations for fun and profit</a></li>
<li><a href="http://snapsvg.io/">Snap.svg</a></li>
<li><a href="http://svgjs.com/"><span class="small-caps">SVG</span>.js</a></li>
</ul>
</div>
<div class="column column--duo">
<h3 class="zeta">Spriting</h3>
<ul>
<li><a href="http://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/">An Overview of <span class="small-caps">SVG</span> Sprite Creation Techniques</a></li>
<li><a href="http://sarasoueidan.com/blog/structuring-grouping-referencing-in-svg/">Structuring, Grouping, and Referencing in <span class="small-caps">SVG</span></a></li>
<li><a href="http://taye.me/blog/svg/a-guide-to-svg-use-elements/">A guide to <span class="small-caps">SVG</span> &lt;use&gt; elements</a></li>
<li><a href="https://github.com/filamentgroup/grunticon">Grunticon</a></li>
<li><a href="https://github.com/lukewhitehouse/svg-icon-workflow"><span class="small-caps">SVG</span> icon workflow</a></li>
<li><a href="http://tomhazledine.com/inline-svg-icons/">Inline <span class="small-caps">SVG</span> icons</a></li>
</ul>
</div>
</div>
</section>
<footer class="global-footer">
<p>An <a href="https://github.com/designbyjake/svgontheweb">open source</a> side project from <a href="https://twitter.com/designbyjake">Jake Giltsoff</a></p>
</footer>
<script>
  window.onload=function() {
    var object = document.getElementById("logoObject");
    var svgDocument = object.contentDocument;
    var svgb1 = svgDocument.getElementsByClassName("firstb");
    var svgb2 = svgDocument.getElementsByClassName("secondb");
    svgb1[0].setAttribute("fill", "yellow");
    svgb2[0].setAttribute("fill", "red");
  };

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-23355677-22', 'auto');
  ga('send', 'pageview');
  </script>

</body></html>
