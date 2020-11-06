
const os = require ( 'os' );
const platform = os.platform ();
const arch = os.arch ();

if ( platform === 'darwin' && arch === 'x64' ) {

  module.exports = require ( './binaries/darwin-x64.node' );

} else if ( platform === 'win32' && arch === 'x64' ) {

  module.exports = require ( './binaries/win32-x64.node' );

} else if ( platform === 'linux' && arch === 'x64' ) {

  module.exports = require ( './binaries/linux-x64.node' );

} else {

  throw new Error ( '[NSFW] Unsupported platform or architecture' );

}
