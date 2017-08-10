const host = process.env.API_HOST || '127.0.0.1';
const port = process.env.API_PORT || 8080;

exports.default = {
  swagger() {
    return {
      // Should be changed to hit www.yourserver.com.  If this is null, defaults to ip:port from
      // internal values or from hostOverride and portOverride.
      baseUrl: `${host}:${port}`,
      // Specify routes that don't need to be displayed
      ignoreRoutes: ['/swagger'],
      // Specify how routes are grouped
      routeTags: {
        basics: ['showDocumentation', 'status'],
      },
      // Generate documentation for simple actions specified by action-name
      documentSimpleRoutes: true,
      // Generate documentation for actions specified under config/routes.js
      documentConfigRoutes: true,
      // Set true if you want to organize actions by version
      groupByVersionTag: true,
      // For simple routes, groups all actions under a single category
      groupBySimpleActionTag: true,
      // In some cases where actionhero network topology needs to point elsewhere.  If null, uses
      // api.config.swagger.baseUrl
      hostOverride: null,
      // Same as above, if null uses the internal value set in config/server/web.js
      portOverride: null,
    };
  },
};
