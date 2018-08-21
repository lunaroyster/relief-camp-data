import axios from 'axios';
import Vue from 'vue';

class DataService {
  constructor() {
    this.downloadedVolunteers = null;
    this.downloadedReliefCamps = null;
    this.downloadedResources = null;
    this.eventCallbacks = {
      volunteerDownload: [],
      reliefCampsDownload: [],
      resourcesDownload: [],
    };
  }
  async getVolunteers() {
    if(this.downloadedVolunteers) return this.downloadedVolunteers;
    let response = await axios.get('https://us-central1-relief-camp-data.cloudfunctions.net/getVolunteersSheet', {
      onDownloadProgress: (event)=> {this.fire('volunteerDownload', event)}
    });
    this.downloadedVolunteers = response.data;
    return this.downloadedVolunteers;
  }
  async getReliefCamps() {
    if(this.downloadedReliefCamps) return this.downloadedReliefCamps;
    let response = await axios.get('https://us-central1-relief-camp-data.cloudfunctions.net/getReliefCampsSheet', {
      onDownloadProgress: (event)=> {this.fire('reliefCampsDownload', event)}
    });
    this.downloadedReliefCamps = response.data;
    return this.downloadedReliefCamps;
  }
  async getResources() {
    if(this.downloadedResources) return this.downloadedResources;
    let response = await axios.get('https://us-central1-relief-camp-data.cloudfunctions.net/getResourcesSheet', {
      onDownloadProgress: (event)=> {this.fire('resourcesDownload', event)}
    });
    this.downloadedResources = response.data;
    return this.downloadedResources;
  }
  on(name, cb) {
    this.eventCallbacks[name].push(cb);
  }
  fire(name, event) {
    let callbacks = this.eventCallbacks[name];
    if (callbacks.length==0) return;
    callbacks.forEach(cb=>cb(event));
  }
}

export default new DataService();