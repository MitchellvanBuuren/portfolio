<template>
  <div ref="canvas"></div>
</template>

<script>
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'


export default {
  components: {},
  name: 'Cube',

  data() {

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(60, 60, 60);

    const renderer = new THREE.WebGLRenderer( { alpha: true } );
    renderer.setClearColor( 0x000000, 0 ); // the default

    const clock = new THREE.Clock()

    const vertices = [
      // front
      {pos: [-1, -1, 1], norm: [0, 0, 1], uv: [0, 1], color: [255, 0, 0],}, // 0
      {pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 1], color: [255, 0, 0],}, // 1
      {pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 0], color: [255, 0, 0],}, // 2
      {pos: [1, 1, 1], norm: [0, 0, 1], uv: [1, 0], color: [255, 0, 0],}, // 3
      // right
      {pos: [1, -1, 1], norm: [1, 0, 0], uv: [0, 1], color: [0, 255, 0],}, // 4
      {pos: [1, -1, -1], norm: [1, 0, 0], uv: [1, 1], color: [0, 255, 0],}, // 5
      {pos: [1, 1, 1], norm: [1, 0, 0], uv: [0, 0], color: [0, 255, 0],}, // 6
      {pos: [1, 1, -1], norm: [1, 0, 0], uv: [1, 0], color: [0, 255, 0],}, // 7
      // back
      {pos: [1, -1, -1], norm: [0, 0, -1], uv: [0, 1], color: [0, 0, 255],}, // 8
      {pos: [-1, -1, -1], norm: [0, 0, -1], uv: [1, 1], color: [0, 0, 255],}, // 9
      {pos: [1, 1, -1], norm: [0, 0, -1], uv: [0, 0], color: [0, 0, 255],}, // 10
      {pos: [-1, 1, -1], norm: [0, 0, -1], uv: [1, 0], color: [0, 0, 255],}, // 11
      // left
      {pos: [-1, -1, -1], norm: [-1, 0, 0], uv: [0, 1], color: [255, 255, 255],}, // 12
      {pos: [-1, -1, 1], norm: [-1, 0, 0], uv: [1, 1], color: [255, 255, 255],}, // 13
      {pos: [-1, 1, -1], norm: [-1, 0, 0], uv: [0, 0], color: [255, 255, 255],}, // 14
      {pos: [-1, 1, 1], norm: [-1, 0, 0], uv: [1, 0], color: [255, 255, 255],}, // 15
      // top
      {pos: [1, 1, -1], norm: [0, 1, 0], uv: [0, 1], color: [255, 255, 0],}, // 16
      {pos: [-1, 1, -1], norm: [0, 1, 0], uv: [1, 1], color: [255, 255, 0],}, // 17
      {pos: [1, 1, 1], norm: [0, 1, 0], uv: [0, 0], color: [255, 255, 0],}, // 18
      {pos: [-1, 1, 1], norm: [0, 1, 0], uv: [1, 0], color: [255, 255, 0],}, // 19
      // bottom
      {pos: [1, -1, 1], norm: [0, -1, 0], uv: [0, 1], color: [0, 0, 0],}, // 20
      {pos: [-1, -1, 1], norm: [0, -1, 0], uv: [1, 1], color: [0, 0, 0],}, // 21
      {pos: [1, -1, -1], norm: [0, -1, 0], uv: [0, 0], color: [0, 0, 0],}, // 22
      {pos: [-1, -1, -1], norm: [0, -1, 0], uv: [1, 0], color: [0, 0, 0],}, // 23
    ];

    const positions = [];
    const normals = [];
    const uvs = [];
    const colors = [];
    for (const vertex of vertices) {
      positions.push(...vertex.pos);
      normals.push(...vertex.norm);
      uvs.push(...vertex.uv);
      colors.push(...vertex.color);
    }

    const geometry = new THREE.BufferGeometry();
    const positionNumComponents = 3;
    const normalNumComponents = 3;
    const uvNumComponents = 2;
    const colorNumComponents = 3;
    geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));
    geometry.setAttribute(
        'normal',
        new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents));
    geometry.setAttribute(
        'uv',
        new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents));
    geometry.setAttribute(
        'color',
        new THREE.BufferAttribute(new Float32Array(colors), colorNumComponents));

    geometry.setIndex([
      0, 1, 2, 2, 1, 3,
      4, 5, 6, 6, 5, 7,
      8, 9, 10, 10, 9, 11,
      12, 13, 14, 14, 13, 15,
      16, 17, 18, 18, 17, 19,
      20, 21, 22, 22, 21, 23,
    ]);

    const cubePositions = [
      [0, 0, 0], [2.1, 0, 0], [4.2, 0, 0],
      [0, 2.1, 0], [2.1, 2.1, 0], [4.2, 2.1, 0],
      [0, 4.2, 0], [2.1, 4.2, 0], [4.2, 4.2, 0],

      [0, 0, 2.1], [2.1, 0, 2.1], [4.2, 0, 2.1],
      [0, 2.1, 2.1], [2.1, 2.1, 2.1], [4.2, 2.1, 2.1],
      [0, 4.2, 2.1], [2.1, 4.2, 2.1], [4.2, 4.2, 2.1],

      [0, 0, 4.2], [2.1, 0, 4.2], [4.2, 0, 4.2],
      [0, 2.1, 4.2], [2.1, 2.1, 4.2], [4.2, 2.1, 4.2],
      [0, 4.2, 4.2], [2.1, 4.2, 4.2], [4.2, 4.2, 4.2],
    ]

    const material = new THREE.MeshBasicMaterial({vertexColors: THREE.VertexColors});

    const cubes = [];
    for (let i = 0; i < 27; i++) {
      cubes[i] = new THREE.Mesh(geometry, material);
      cubes[i].position.set(cubePositions[i][0], cubePositions[i][1], cubePositions[i][2])
    }

    const pointLight = new THREE.PointLight();
    pointLight.position.set(20, 20, 20);

    const controls = new OrbitControls(camera, renderer.domElement);

    const pointLightHelper = new THREE.PointLightHelper(pointLight);

    const gridHelper = new THREE.GridHelper(200, 50);


    return {
      scene: scene,
      camera: camera,
      geometry: geometry,
      pointLight: pointLight,
      pointLightHelper: pointLightHelper,
      gridHelper: gridHelper,
      cubes: cubes,
      controls: controls,
      renderer: renderer,
      clock: clock,
      counter: 0,
      reserve: false,
      increment: 0.2,
      range: 5,
    }
  },
  created() {
    this.scene.add(this.camera);
    for (const cube of this.cubes) {
      this.scene.add(cube);
    }
    this.scene.add(this.pointLight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);


  },
  mounted() {
    this.$refs.canvas.appendChild(this.renderer.domElement);
    this.animate();
  },
  methods: {
    animate() {

      this.loop()

      this.controls.update();
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.render(this.scene, this.camera);


      requestAnimationFrame(this.animate)
    },
    loop() {
      if (this.counter >= this.range || this.counter <= -1 * this.range) {
        this.reserve = !this.reserve;
      }

      let currentIncrement = this.increment;
      if (this.reserve) {
        currentIncrement = this.increment * -1;
      }
      this.counter += currentIncrement;

      for (const cube of this.cubes) {
        cube.translateY(currentIncrement);
      }
    },

  },
  computed: {}
}
</script>

