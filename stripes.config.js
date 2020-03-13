// Run as: stripes serve --devtool eval-source-map stripes.config.js
// Platform at: https://github.com/indexdata/platform-sim/tree/course-reserves-edelweiss

module.exports = {
  okapi:
// { 'url':'http://localhost:9130', 'tenant':'diku' }
// { 'url':'http://tmobile2.dyndns.biz:9130', 'tenant': 'diku' } // Kurt's development server
   { 'url':'https://simmons-test-cr-okapi.hosted-folio.indexdata.com', 'tenant': 'sim' } // sim_admin edelweiss012020
// { 'url':'https://okapi-flo.folio-dev.indexdata.com', 'tenant':'sim_daisy' }
// { 'url':'https://folio-snapshot-okapi.aws.indexdata.com', 'tenant':'diku' }
// { 'url':'http://shared-index.reshare-dev.indexdata.com:9130', 'tenant':'diku' }
  ,

  config: {
    // autoLogin: { username: 'diku_admin', password: 'admin' }
    // logCategories: 'core,redux,connect,connect-fetch,substitute,path,mpath,mquery,action,event,perm,interface,xhr'
    // logPrefix: 'stripes'
    // logTimestamp: false
    // showPerms: false
    showHomeLink: true,
    // listInvisiblePerms: false
    // disableAuth: false
    welcomeMessage: 'ui-rs.front.welcome',
    platformName: 'ReShare',
    platformDescription: 'ReShare platform',
    hasAllPerms: false,
    sharedIndexUI: 'http://shared-index.reshare-dev.indexdata.com',
    sharedIndexWS: 'http://shared-index.reshare-dev.indexdata.com:9130',
    showDevInfo: true,
    // listInvisiblePerms: true,
    // showPerms: true,
    welcomeMessage: 'ui-courses.front.welcome',
    platformName: 'Mike CR',
  },
  modules: {
    '@folio/courses': {},
    '@folio/inventory': {},
    '@folio/developer': {},
    "@folio/tenant-settings": {},
    "@folio/plugin-find-user": {},
  },
  branding: {
    logo: {
      src: './CR-Logo-Circle-300x300.png',
      alt: 'Opentown Libraries',
    },
    favicon: {
      src: './CR-Logo-Circle-300x300.png',
    },
  },
};
