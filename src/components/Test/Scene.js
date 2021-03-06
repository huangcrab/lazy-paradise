import React, { Component } from "react";
import * as THREE from "three";

import { spikyGeometry, spikyGeometryOnGo } from "../threeHelper/Effect";

import stone from "../../assets/stone.jpg";
import "./scene.css";

export default class Scene extends Component {
  constructor(props) {
    super(props);

    this.list = [];
    this.listCount = 20;
  }
  componentDidMount() {
    window.onresize = this.onWindowResize;

    const lightIn = new THREE.PointLight("#000", 32);
    const lightOut = new THREE.PointLight("#000", 32);

    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(1000, 1000, 1000);
    spotLight.castShadow = true;

    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 4;
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setClearColor("#000", 0);
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    //ADD OBJECT
    const geometry = spikyGeometry(new THREE.SphereGeometry(1.5, 32, 32));
    const geometry1 = new THREE.SphereGeometry(1, 32, 32);

    const core = new THREE.MeshStandardMaterial({
      emissive: 0xe42626,
      emissiveIntensity: 1,
      color: 0xe42626,
      metalness: 0.0,
      transparent: true,
      opacity: 2,
      roughness: 1,
      alphaMap: new THREE.TextureLoader().load(stone)
    });

    const material = new THREE.MeshStandardMaterial({
      color: 0x02e5f9,
      //emissive: 0x02e5f9,
      //emissiveIntensity: 1,
      transparent: false,
      side: THREE.DoubleSide,
      alphaTest: 0.4
    });
    //core.Map =
    material.alphaMap = new THREE.TextureLoader().load(stone);

    this.innerSphere = new THREE.Mesh(geometry1, core);
    this.sphere = new THREE.Mesh(geometry, material);
    lightIn.add(this.innerSphere);
    lightOut.add(this.sphere);
    this.scene.add(lightOut);
    this.scene.add(lightIn);
    this.scene.add(spotLight);

    this.start();
  }
  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
    window.onresize = this.mount.onresize;
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    this.sphere.rotation.x += 0.001;
    this.sphere.rotation.y += 0.001;

    const { list, listCount } = this;
    spikyGeometryOnGo(this.innerSphere.geometry, list, listCount);
    //spikyGeometryOnGo(this.sphere.geometry, list, listCount);

    this.innerSphere.geometry.verticesNeedUpdate = true;
    this.sphere.geometry.verticesNeedUpdate = true;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };
  onWindowResize = () => {
    const { clientWidth, clientHeight } = this.mount;
    this.camera.aspect = clientWidth / clientHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(clientWidth, clientHeight);
  };

  render() {
    return (
      <React.Fragment>
        <div ref={mount => (this.mount = mount)} className="scene" />
      </React.Fragment>
    );
  }
}
