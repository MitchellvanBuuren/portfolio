<template>
  <div>
    <div ref="canvas" id="viewport">
      <v-progress-circular
          indeterminate
          color="secondary"
      ></v-progress-circular>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import {OBJLoader} from '@/js/objectLoader';
import {MTLLoader} from '@/js/mtlLoader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

export default {
  components: {},
  name: 'Voxel',

  data() {

    const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
    )

    const target = new THREE.Vector3(-0.5, 1.2, 0)

    const scene = new THREE.Scene()

    const container = document.getElementById('viewport')

    const scW = 500
    const scH = 500
    const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true})
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(scW, scH)
    renderer.outputEncoding = THREE.sRGBEncoding

    const scale = scH * 0.005 + 4.8
    const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000,
    )
    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)


    const pointLight1 = new THREE.DirectionalLight(0xFFFFFF, 1)
    pointLight1.position.set(20, 100, 10)
    pointLight1.target.position.set(target)
    pointLight1.castShadow = true
    scene.add(pointLight1)


    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true
    controls.target = target
    scene.add(controls)

    const mtlLoader = new MTLLoader()
    mtlLoader.load('/assets/objects/voxel-me.mtl', function (materials) {
      materials.preload()

      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load('/assets/objects/voxel-me.obj', function (object) {
        scene.add(object)
      })
    });

    let frame = 0
    let req = null

    return {
      scene: scene,
      camera: camera,
      renderer: renderer,
      controls: controls,
      frame: frame,
      req: req,
      initialCameraPosition: initialCameraPosition,
      target: target,
      container: container,
    }
  },
  created() {
  },
  mounted() {

    this.$refs.canvas.replaceWith(this.renderer.domElement)
    this.animate()
  },
  methods: {
    animate() {
      this.req = requestAnimationFrame(this.animate)

      this.frame = this.frame <= 100 ? this.frame + 1 : this.frame

      if (this.frame <= 100) {
        const p = this.initialCameraPosition
        const rotSpeed = -this.easeOut(this.frame / 120) * Math.PI * 20
        this.camera.position.y = 10
        this.camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
        this.camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
        this.camera.lookAt(this.target)
      } else {
        this.controls.update()
      }

      const aspectRatio = 1;
      let boundary = window.innerWidth * 0.5
      if (boundary > window.innerHeight * 0.5) {
        boundary = window.innerHeight * 0.5
      }
      this.renderer.setSize(boundary * aspectRatio, boundary / aspectRatio)

      this.renderer.render(this.scene, this.camera)
    },
    easeOut(x) {
      return Math.sqrt(1 - Math.pow(x - 1, 4))
    },
  },
  computed: {}
}
</script>

<style>

</style>



