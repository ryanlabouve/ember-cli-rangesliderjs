module.exports = {
  normalizeEntityName() {},
  afterInstall() {
    return this.addBowerPackageToProject('rangeslider.js');
  }
}
