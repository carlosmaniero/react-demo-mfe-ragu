
      var component = require('/home/runner/work/react-demo-mfe-ragu/react-demo-mfe-ragu/hello-mfe');
      var resolver = require('/home/runner/work/react-demo-mfe-ragu/react-demo-mfe-ragu/node_modules/ragu-react-server-adapter/resolvers/hydrate-resolver');

      module.exports.default = (resolver.default || resolver)(component.default || component);
    