// Run as: stripes serve --devtool eval-source-map stripes.config.js
// Platform at: https://github.com/indexdata/platform-sim/tree/course-reserves-edelweiss

module.exports = {
  okapi:
// { 'url':'http://localhost:9130', 'tenant':'diku' }
// { 'url':'http://tmobile2.dyndns.biz:9130', 'tenant': 'diku' } // Kurt's development server
// { 'url':'https://simmons-test-cr-okapi.hosted-folio.indexdata.com', 'tenant': 'sim' } // sim_admin edelweiss012020
// { 'url':'https://okapi-flo.folio-dev.indexdata.com', 'tenant':'sim_daisy' }
// { 'url':'https://folio-snapshot-okapi.aws.indexdata.com', 'tenant':'diku' }
// { 'url':'https://folio-snapshot-stable-okapi.aws.indexdata.com', 'tenant':'diku' }
   { 'url':'https://folio-testing-okapi.aws.indexdata.com', 'tenant':'diku' }
// { 'url':'https://folio-snapshot-test-okapi.aws.indexdata.com', 'tenant':'diku' }
// { 'url':'https://simmons-okapi.hosted-folio.indexdata.com', 'tenant':'sim' }
// { 'url':'https://okapi-bugfest-goldenrod.folio.ebsco.com', 'tenant':'fs09000000' } // folio folio
  ,

  config: {
    // logCategories: 'core,redux,connect,connect-fetch,substitute,path,mpath,mquery,action,event,perm,interface,xhr'
    // logPrefix: 'stripes'
    // logTimestamp: false
    // showPerms: false
    showHomeLink: true,
    // listInvisiblePerms: true
    // disableAuth: false
    welcomeMessage: 'ui-courses.front.welcome',
    platformName: 'Course Reserves',
    platformDescription: 'Course Reserves platform',
    hasAllPerms: false,
    showDevInfo: false,
  },
  modules: {
    '@folio/courses': {},
    '@folio/developer': {},
    '@folio/users': {},
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
