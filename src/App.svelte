<script>
	import * as defaultVert from "./lib/shaders/default.vert?raw";
	import * as mainFrag from "./lib/shaders/main.frag?raw";

	var gl;
	var keys = {};
	var fps = 30;

	function initGL(canvas) {
		gl = canvas.getContext("experimental-webgl");
		gl.viewportWidth = canvas.width;
		gl.viewportHeight = canvas.height;
	}

	function getShader(gl, id) {
		let str = "";
		let shader;
		if (id == "shader-fs") {
			str = mainFrag.default;
			shader = gl.createShader(gl.FRAGMENT_SHADER);
		} else if (id == "shader-vs") {
			str = defaultVert.default;
			shader = gl.createShader(gl.VERTEX_SHADER);
		}
		// var str = '';
		// var k = shaderScript.firstChild;
		// while (k) {
		//     if (k.nodeType == 3) {
		//         str += k.textContent;
		//     }
		//     k = k.nextSibling;
		// }

		// var shader;
		// if (shaderScript.type == 'x-shader/x-fragment') {
		//     shader = gl.createShader(gl.FRAGMENT_SHADER);

		// } else if (shaderScript.type == 'x-shader/x-vertex') {
		//     shader = gl.createShader(gl.VERTEX_SHADER);

		// } else {
		//     return null;
		// }

		gl.shaderSource(shader, str);
		gl.compileShader(shader);

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			throw new Error(gl.getShaderInfoLog(shader));
			return null;
		}

		return shader;
	}

	var shaderProgram;
	var aVertexPosition;
	var aTimePosition,
		time = 0;

	var aResolutionPosition,
		res = [0, 0];
	var aMousePosition,
		mouse = [0, 0];
	var aPositionTranslate,
		translate = [0, 0];
	var aPositionScalars,
		zoom = [1, 1];
	//todo
	var aMouseScalars;
	var aMouseTranslate;

	function initShaders() {
		var fragmentShader = getShader(gl, "shader-fs");
		var vertexShader = getShader(gl, "shader-vs");

		shaderProgram = gl.createProgram();
		gl.attachShader(shaderProgram, vertexShader);
		gl.attachShader(shaderProgram, fragmentShader);
		gl.linkProgram(shaderProgram);

		if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
			alert("Could not initialise shaders");
		}

		gl.useProgram(shaderProgram);

		var tex = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, tex);

		// 3x1 pixel 1d texture
		var oneDTextureTexels = new Uint8Array([
			255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 0, 100, 255,
		]);

		// // Upload the image into the texture.
		// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, oneDTextureTexels);

		aResolutionPosition = gl.getUniformLocation(shaderProgram, "resolution");
		gl.uniform2f(aResolutionPosition, res[0], res[1]);

		aTimePosition = gl.getUniformLocation(shaderProgram, "time");
		gl.uniform1i(aTimePosition, Date.now());

		aMousePosition = gl.getUniformLocation(shaderProgram, "mouse");
		gl.uniform2f(aMousePosition, mouse[0], mouse[1]);

		aVertexPosition = gl.getAttribLocation(shaderProgram, "aVertexPosition");
		gl.enableVertexAttribArray(aVertexPosition);

		aPositionScalars = gl.getUniformLocation(shaderProgram, "posDilation");
		gl.uniform2f(aPositionScalars, zoom[0], zoom[1]);
		aPositionTranslate = gl.getUniformLocation(shaderProgram, "posTranslation");
		gl.uniform2f(aPositionTranslate, translate[0], translate[1]);
	}

	var vertexPositionBuffer;
	function initBuffers() {
		vertexPositionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);
		var vertices = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
		vertexPositionBuffer.itemSize = 2;
		vertexPositionBuffer.numItems = 4;
	}

	function drawScene() {
		gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

		gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);
		gl.vertexAttribPointer(
			aVertexPosition,
			vertexPositionBuffer.itemSize,
			gl.FLOAT,
			false,
			0,
			0
		);

		var plotPositionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, plotPositionBuffer);

		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0]),
			gl.STATIC_DRAW
		);

		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
		gl.deleteBuffer(plotPositionBuffer);

		gl.uniform1i(aTimePosition, window.performance.now());
	}

	function webGLStart() {
		var canvas = document.getElementById("soft");
		var container = document.getElementById("glContainer");
		window.addEventListener("resize", onWindowResize, false);
		document.addEventListener("mousedown", onDocumentMouseDown, false);
		document.addEventListener("mouseup", onDocumentMouseUp, false);
		document.addEventListener("mousemove", onDocumentMouseMove, false);
		document.addEventListener("keydown", keyDown, false);
		document.addEventListener("keyup", keyUp, false);
		document.addEventListener("wheel", onWheel, false);

		canvas.width = container.clientWidth * 2;
		canvas.height = container.clientHeight * 2;
		canvas.style.width = res[0] = container.clientWidth;
		canvas.style.height = res[1] = container.clientHeight;


		initGL(canvas);
		initShaders();
		initBuffers();

		setInterval(drawScene, 1000 / fps);
		// drawScene();
		// setInterval(function(){ gl.uniform1i(aTimePosition, time); time++; }, 1000/(fps*10));
	}

	function changeIter(iter) {
		fs = document.getElementById("shader-fs");
		fs.innerHTML = fs.innerHTML.replace(new RegExp("ITER [0-9]*"), "ITER " + String(iter));
		initShaders();
		return iter;
	}

	function onWindowResize(event) {
		var canvas = document.getElementById("soft");
		var container = document.getElementById("glContainer");
		canvas.width = container.clientWidth * 2;
		canvas.height = container.clientHeight * 2;
		canvas.style.width = res[0] = container.clientWidth;
		canvas.style.height = res[1] = container.clientHeight;
        
		gl.uniform2f(aResolutionPosition, res[0], res[1]);
	}

	//mice
	var mouseOnClick;
	var mouseDown = false;
	function onDocumentMouseDown(event) {
		mouseOnClick = [event.clientX, event.clientY];
		mouseDown = true;
	}

	function onDocumentMouseUp(event) {
		mouseDown = false;
	}

	function onDocumentMouseMove(event) {
		if (!keys[16]) {
			//shift
			mouse[0] = event.clientX;
			mouse[1] = event.clientY;
			gl.uniform2f(aMousePosition, mouse[0], mouse[1]);
		}
		if (mouseDown) {
			let d = { x: event.clientX - mouseOnClick[0], y: -(event.clientY - mouseOnClick[1]) };
			// abs = Math.sqrt( (d.x*d.x) + (d.y*d.y));
			// norm = {x: d.x/abs, y: d.y/abs};

			translate[0] -= zoom[0] * 0.005 * d.x;
			translate[1] -= zoom[1] * 0.005 * d.y;
			gl.uniform2f(aPositionTranslate, translate[0], translate[1]);
			mouseOnClick = [event.clientX, event.clientY];
		}
	}

	function onWheel(event) {
		event.preventDefault();
		event.returnValue = false;

		if (event.deltaY != 0) {
			zoom[0] += zoom[0] * 0.005 * event.deltaY;
			zoom[1] += zoom[1] * 0.005 * event.deltaY;
			translate[0] -= zoom[0] * 0.005 * event.deltaX;
			translate[1] -= zoom[1] * 0.005 * event.deltaY;

			gl.uniform2f(aPositionScalars, zoom[0], zoom[1]);
			gl.uniform2f(aPositionTranslate, translate[0], translate[1]);
		}
	}
	//keys
	function keyDown(event) {
		//TODO make smooth
		var factor = 2;
		keys[event.keyCode] = true;

		if (event.keyCode == 187) {
			//plus
			zoom[0] /= factor;
			zoom[1] /= factor;
			gl.uniform2f(aPositionScalars, zoom[0], zoom[1]);
		}
		if (event.keyCode == 189) {
			//minus
			zoom[0] *= factor;
			zoom[1] *= factor;
			gl.uniform2f(aPositionScalars, zoom[0], zoom[1]);
		}
		if (event.keyCode == 82) {
			//r
			zoom = [1, 1];
			translate = [0, 0];
			gl.uniform2f(aPositionScalars, zoom[0], zoom[1]);
			gl.uniform2f(aPositionTranslate, translate[0], translate[1]);
		}
	}

	function keyUp(event) {
		keys[event.keyCode] = false;
	}
	//equations
	function Function() {
		this.x = new createEquation("x");
		this.y = new createEquation("y");
		this.iterEq = new createEquation("x_n+1");
	}

	function createEquation(str) {
		lhs = str.split("=")[0];
		rhs = str.split("=")[1];
	}

	//utility
	function lerp(a, b, t) {
		return t * b + (1 - t) * a;
	}
</script>

<body>
	<div id="glContainer" on:load={webGLStart()}>
		<canvas id="soft" />
	</div>
</body>

<style>
	body {
		background-color: #ffffff;
	}

	#glContainer {
		position: absolute;
		top: 0px;
		left: 0px;
		height: 100%;
		width: 100%;
	}

	#soft {
		width: 100%;
		height: 100%;
	}
</style>
