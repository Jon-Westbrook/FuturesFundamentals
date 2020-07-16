# CME Futures Fundamentals
Ben Brown -- bbrown@vsapartners.com

## Quick start

```
nvm use
yarn
yarn dev
```

## Summary

+ gulp + metalsmith static site 
+ docker for heroku dev builds


## Files

```
build/                    # gitignored local build
jekyll_REFERENCE/         # reference for previous build system
src/
.[config-file-name]
bitbucket-pipelines.yml
Dockerfile                # only used for dev heroku builds
gulpfile.js               # build configuration
OLD_gulpfile.js           # reference to non-jekyll portion of old build system
package.json
README.md
server.js                 # only used for dev heroku builds
webpack.config.js         # js bundling config
yarn.lock
```

### src/

All files and directories are copied to build/ as-is unless otherwise noted.

```
_assets/             # directory name converted to assets/ in build/
_data/               # not copied, provides global data to hbs templates
  site.js              # exports global data, import other files
_helpers/            # not copied, hbs helpers
_js/                 # not copied, bundled via metalsmith and webpack
_layouts/            # not copied, used for globals
_partials/           # not copied, reusable components and modules
_scss/               # not copied, compiled via metalsmith
pages/               # file names converted from [name].html.hbs to [name]/index.html
.htaccess            # production server .htaccess
apple-touch-icon-*
favicon.ico
google[hash].html    # site ownership verficiation? google analytics?
```


## Branches

**dev**

**master**
  + always production-ready

**archive_production**
  + archive of last production codebase before new build system (cerca 07/2020)


## Deployments

**dev**
  + deploys are triggered on each push to dev
  + [test-futures-fundamentals.herokuapp.com](test-futures-fundamentals.herokuapp.com)

**master**
  + no auto-deploys
  + deploys are run manually through bitbucket
  + in bitbucket:
    1. click the hash for the commit you want to push (e.g. a83edf9)
    2. click 'run pipeline'
    3. select 'custom: production'
