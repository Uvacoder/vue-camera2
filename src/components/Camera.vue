<template>
  <div class="camera">
    <div>
      <b-button-group>
        <b-button :disabled="!isStartEnabled" v-on:click="start">Start</b-button>
        <b-button :disabled="isStartEnabled" v-on:click="stop">Stop</b-button>
        <b-button :disabled="isStartEnabled" v-on:click="snapshot">Snapsot</b-button>
        <b-button :disabled="!isPhoto" v-on:click="download">Downlolad</b-button>
       
      </b-button-group>
    </div>
     <form class="">
          <b-form-select v-model="selectedDevice" :options="options" size="sm" ></b-form-select>
        </form>

    <!-- <div class="action-group">
      <button id="start-stream" :disabled="!isStartEnabled" v-on:click="start">Start</button>
      <button id="stop-stream" :disabled="isStartEnabled" v-on:click="stop">Stop</button>
      <button id="snapshot" :disabled="isStartEnabled" v-on:click="snapshot">Snapshot</button>
      <button id="download" :disabled="!isPhoto" v-on:click="download">Download</button>
      <select :disabled="!isPhoto" class="u-full-width" id="video-select"></select>
    </div>-->
    <div id="container">
      <video playsinline autoplay></video>
      <canvas></canvas>
    </div>
    <form id="upload-form" class="upload-form">
      <input type="text" name="cloud-name" value="picturecloud7" placeholder="Enter cloud name" />
      <input type="text" name="preset" value="bp_test_1" placeholder="Enter upload preset" />
      <button type="submit">Upload</button>
    </form>
    <div id="gallery" />
    <a
      href="https://github.com/rebeccapeltz/vue-camera"
      title="View source for this page on GitHub"
      id="viewSource"
    >
      View
      source on GitHub
    </a>
  </div>
</template>

<script>
// import CameraService from "@/components/CameraService";
// const cameraService = new CameraService();

export default {
  name: "Camera",
  data() {
    return {
      video: null,
      canvas: null,
      fileData: null,
      isStartEnabled: true,
      isPhoto: false,
      stream: null,
      currentStream: null,
      devices: [],
      options: [],
      constraints: {},
      selectedDevice: "0"
    };
  },
  methods: {
    snapshot: function() {
      console.log("snapshot");
      // this.camera.snapshot();
      this.canvas.width = this.video.videoWidth;
      this.canvas.height = this.video.videoHeight;
      this.canvas
        .getContext("2d")
        .drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
      this.fileData = this.canvas.toDataURL("image/jpeg");
      this.isPhoto = true;
    },
    stop: function() {
      console.log("stop");
      this.video.pause();
      if (this.currentStream) {
        this.currentStream.getTracks().forEach(track => {
          track.stop();
        });
        this.video.srcObject = null;
      }

      this.video.removeAttribute("src");
      this.video.load();
      this.canvas
        .getContext("2d")
        .clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.isStartEnabled = true;
      this.isPhoto = false;
    },
    start: function() {
      console.log("start");
      this.stop();
      this.getMedia();
      this.isStartEnabled = false;
    },
    download: function() {
      console.log("downlaod");
      if (this.fileData) {
        console.log("download");
        this.canvas.width = this.video.videoWidth;
        this.canvas.height = this.video.videoHeight;
        this.canvas
          .getContext("2d")
          .drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
        let a = document.createElement("a");
        a.href = this.fileData;
        a.textContent = "photo";
        a.target = "_blank";
        a.download = "photo.jpeg";
        document.querySelector("body").append(a);
        a.click();
      }
    },
    getMedia: async function() {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia(
          this.constraints
        );
        window.stream = this.stream;
        // this.video.srcObject = stream
        this.currentStream = stream;
        this.video.srcObject = stream;
      } catch (err) {
        console.log("getmedia", err);
      }
    },

    setConstraints: function() {
      // set constraints
      this.constraints = {
        video: {
          facingMode: "environment"
        },
        audio: false
      };
    },
    getDevices: async function() {
      if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        console.log("enumerateDevices() not supported.");
        return;
      }
      try {
        let allDevices = await navigator.mediaDevices.enumerateDevices();
        for (let mediaDevice of allDevices) {
          console.log("enumerate", mediaDevice);
          if (mediaDevice.kind === "videoinput") {
            let option = {};
            option.text = mediaDevice.label;
            option.value = mediaDevice.deviceId;
            this.options.push(option);
            this.devices.push(mediaDevice);
          }
        }
        //default if only one
        if (this.options.length < 3)
          this.selectedDevice = this.options[1].value;
      } catch (err) {
        console.log("getDevices", err);
      }
      console.log("devices", this.devices);
    }
  },
  mounted() {
    this.canvas = document.querySelector("canvas");
    this.video = document.querySelector("video");
    this.options.push({ text: "Select Device", value: 0 });
    this.getDevices();
    this.setConstraints();
    this.getMedia();
    this.isStartEnabled = false;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button:disabled {
  background: gray;
}
select option:disabled {
  color: gray;
  font-weight: bold;
}
select {
  margin: .2rem 0;
}
button{
  /* margin-right: .2rem; */
  /* width: 102px; */
  /* width: 25%; */
  font-size: .7rem  ;
}
</style>