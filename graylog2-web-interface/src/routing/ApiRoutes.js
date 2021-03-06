import Qs from 'qs';

const ApiRoutes = {
  AlarmCallbacksApiController: {
    available: () => { return { url: '/alerts/callbacks/types' }; },
    create: (streamId) => { return { url: `/streams/${streamId}/alarmcallbacks` }; },
    delete: (streamId, alarmCallbackId) => { return { url: `/streams/${streamId}/alarmcallbacks/${alarmCallbackId}` }; },
    listAll: () => { return { url: '/alerts/callbacks' }; },
    list: (streamId) => { return { url: `/streams/${streamId}/alarmcallbacks` }; },
    testAlert: (alarmCallbackId) => { return { url: `/alerts/callbacks/${alarmCallbackId}/test` }; },
    update: (streamId, alarmCallbackId) => { return { url: `/streams/${streamId}/alarmcallbacks/${alarmCallbackId}` }; },
  },
  AlarmCallbackHistoryApiController: {
    list: (streamId, alertId) => { return { url: `/streams/${streamId}/alerts/${alertId}/history` }; },
  },
  AlertsApiController: {
    get: (alertId) => { return { url: `/streams/alerts/${alertId}` }; },
    list: (streamId, since) => { return { url: `/streams/${streamId}/alerts?since=${since}` }; },
    listPaginated: (streamId, skip, limit) => { return { url: `/streams/${streamId}/alerts/paginated?skip=${skip}&limit=${limit}` }; },
    listAllPaginated: (skip, limit, state) => { return { url: `/streams/alerts/paginated?skip=${skip}&limit=${limit}&state=${state}` }; },
    listAllStreams: (since) => { return { url: `/streams/alerts?since=${since}` }; },
  },
  AlertConditionsApiController: {
    available: () => { return { url: '/alerts/conditions/types' }; },
    list: () => { return { url: '/alerts/conditions' }; },
  },
  BundlesApiController: {
    apply: (bundleId) => { return { url: `/system/bundles/${bundleId}/apply` }; },
    create: () => { return { url: '/system/bundles' }; },
    delete: (bundleId) => { return { url: `/system/bundles/${bundleId}` }; },
    export: () => { return { url: '/system/bundles/export' }; },
    list: () => { return { url: '/system/bundles' }; },
  },
  CodecTypesController: {
    list: () => { return { url: '/system/codecs/types/all' }; },
  },
  CountsApiController: {
    total: () => { return { url: '/count/total' }; },
    indexSetTotal: (indexSetId) => { return { url: `/count/${indexSetId}/total` }; },
  },
  ClusterApiResource: {
    list: () => { return { url: '/system/cluster/nodes' }; },
    node: () => { return { url: '/system/cluster/node' }; },
  },
  DashboardsApiController: {
    create: () => { return { url: '/dashboards' }; },
    index: () => { return { url: '/dashboards' }; },
    get: (id) => { return { url: `/dashboards/${id}` }; },
    delete: (id) => { return { url: `/dashboards/${id}` }; },
    update: (id) => { return { url: `/dashboards/${id}` }; },
    addWidget: (id) => { return { url: `/dashboards/${id}/widgets` }; },
    removeWidget: (dashboardId, widgetId) => { return { url: `/dashboards/${dashboardId}/widgets/${widgetId}` }; },
    widget: (dashboardId, widgetId) => { return { url: `/dashboards/${dashboardId}/widgets/${widgetId}` }; },
    updateWidget: (dashboardId, widgetId) => { return { url: `/dashboards/${dashboardId}/widgets/${widgetId}` }; },
    widgetValue: (dashboardId, widgetId) => { return { url: `/dashboards/${dashboardId}/widgets/${widgetId}/value` }; },
    updatePositions: (dashboardId) => { return { url: `/dashboards/${dashboardId}/positions` }; },
  },
  DecoratorsResource: {
    available: () => { return { url: '/search/decorators/available' }; },
    create: () => { return { url: '/search/decorators' }; },
    get: () => { return { url: '/search/decorators' }; },
    remove: (decoratorId) => { return { url: `/search/decorators/${decoratorId}` }; },
    update: (decoratorId) => { return { url: `/search/decorators/${decoratorId}` }; },
  },
  DeflectorApiController: {
    cycle: (indexSetId) => { return { url: `/cluster/deflector/${indexSetId}/cycle` }; },
    list: (indexSetId) => { return { url: `/system/deflector/${indexSetId}` }; },
  },
  IndexerClusterApiController: {
    health: () => { return { url: '/system/indexer/cluster/health' }; },
    name: () => { return { url: '/system/indexer/cluster/name' }; },
  },
  IndexerFailuresApiController: {
    count: (since) => { return { url: `/system/indexer/failures/count?since=${since}` }; },
    list: (limit, offset) => { return { url: `/system/indexer/failures?limit=${limit}&offset=${offset}` }; },
  },
  IndexerOverviewApiResource: {
    list: (indexSetId) => { return { url: `/system/indexer/overview/${indexSetId}` }; },
  },
  IndexRangesApiController: {
    list: () => { return { url: '/system/indices/ranges' }; },
    rebuild: (indexSetId) => { return { url: `/system/indices/ranges/index_set/${indexSetId}/rebuild` }; },
    rebuildSingle: (index) => { return { url: `/system/indices/ranges/${index}/rebuild` }; },
  },
  IndexSetsApiController: {
    list: (stats) => { return { url: `/system/indices/index_sets?stats=${stats}` }; },
    listPaginated: (skip, limit, stats) => { return { url: `/system/indices/index_sets?skip=${skip}&limit=${limit}&stats=${stats}` }; },
    get: (indexSetId) => { return { url: `/system/indices/index_sets/${indexSetId}` }; },
    create: () => { return { url: '/system/indices/index_sets' }; },
    delete: (indexSetId, deleteIndices) => { return { url: `/system/indices/index_sets/${indexSetId}?delete_indices=${deleteIndices}` }; },
    setDefault: (indexSetId) => { return { url: `/system/indices/index_sets/${indexSetId}/default` }; },
  },
  IndicesApiController: {
    close: (indexName) => { return { url: `/system/indexer/indices/${indexName}/close` }; },
    delete: (indexName) => { return { url: `/system/indexer/indices/${indexName}` }; },
    list: (indexSetId) => { return { url: `/system/indexer/indices/${indexSetId}/list` }; },
    listAll: () => { return { url: '/system/indexer/indices' }; },
    listClosed: (indexSetId) => { return { url: `/system/indexer/indices/${indexSetId}/closed` }; },
    multiple: () => { return { url: '/system/indexer/indices/multiple' }; },
    reopen: (indexName) => { return { url: `/system/indexer/indices/${indexName}/reopen` }; },
  },
  InputsApiController: {
    list: () => { return { url: '/system/inputs' }; },
    get: (id) => { return { url: `/system/inputs/${id}` }; },
    globalRecentMessage: (inputId) => { return { url: `/${inputId}` }; },
  },
  InputStatesController: {
    start: (inputId) => { return { url: `/system/inputstates/${inputId}` }; },
    stop: (inputId) => { return { url: `/system/inputstates/${inputId}` }; },
  },
  ClusterInputStatesController: {
    list: () => { return { url: '/cluster/inputstates' }; },
    start: (inputId) => { return { url: `/cluster/inputstates/${inputId}` }; },
    stop: (inputId) => { return { url: `/cluster/inputstates/${inputId}` }; },
  },
  ClusterLoggersResource: {
    loggers: () => { return { url: '/cluster/system/loggers' }; },
    subsystems: () => { return { url: '/cluster/system/loggers/subsystems' }; },
    setSubsystemLoggerLevel: (nodeId, subsystem, loglevel) => { return { url: `/cluster/system/loggers/${nodeId}/subsystems/${subsystem}/level/${loglevel}` }; },
  },
  MessageFieldsApiController: {
    list: () => { return { url: '/system/fields' }; },
  },
  MetricsApiController: {
    multiple: () => { return { url: '/system/metrics/multiple' }; },
    byNamespace: (namespace) => { return { url: `/system/metrics/namespace/${namespace}` }; },
  },
  ClusterMetricsApiController: {
    multiple: (nodeId) => { return { url: `/cluster/${nodeId}/metrics/multiple` }; },
    multipleAllNodes: () => { return { url: '/cluster/metrics/multiple' }; },
    byNamespace: (nodeId, namespace) => { return { url: `/cluster/${nodeId}/metrics/namespace/${namespace}` }; },
  },
  NotificationsApiController: {
    delete: (type) => { return { url: `/system/notifications/${type}` }; },
    list: () => { return { url: '/system/notifications' }; },
  },
  OutputsApiController: {
    index: () => { return { url: '/system/outputs' }; },
    create: () => { return { url: '/system/outputs' }; },
    delete: (outputId) => { return { url: `/system/outputs/${outputId}` }; },
    update: (outputId) => { return { url: `/system/outputs/${outputId}` }; },
    availableType: (type) => { return { url: `/system/outputs/available/${type}` }; },
    availableTypes: () => { return { url: '/system/outputs/available' }; },
  },
  RolesApiController: {
    listRoles: () => { return { url: '/roles' }; },
    createRole: () => { return { url: '/roles' }; },
    updateRole: (rolename) => { return { url: `/roles/${rolename}` }; },
    deleteRole: (rolename) => { return { url: `/roles/${rolename}` }; },
    loadMembers: (rolename) => { return { url: `/roles/${rolename}/members` }; },
  },
  SavedSearchesApiController: {
    create: () => { return { url: '/search/saved' }; },
    delete: (savedSearchId) => { return { url: `/search/saved/${savedSearchId}` }; },
    update: (savedSearchId) => { return { url: `/search/saved/${savedSearchId}` }; },
  },
  SessionsApiController: {
    validate: () => { return { url: '/system/sessions' }; },
  },
  StreamAlertsApiController: {
    create: (streamId) => { return { url: `/streams/${streamId}/alerts/conditions` }; },
    delete: (streamId, alertConditionId) => { return { url: `/streams/${streamId}/alerts/conditions/${alertConditionId}` }; },
    get: (streamId, conditionId) => { return { url: `/streams/${streamId}/alerts/conditions/${conditionId}` }; },
    list: (streamId) => { return { url: `/streams/${streamId}/alerts/conditions` }; },
    update: (streamId, alertConditionId) => { return { url: `/streams/${streamId}/alerts/conditions/${alertConditionId}` }; },
    sendDummyAlert: (streamId) => { return { url: `/streams/${streamId}/alerts/sendDummyAlert` }; },
  },
  StreamsApiController: {
    get: (streamId) => { return { url: `/streams/${streamId}` }; },
    create: () => { return { url: '/streams' }; },
    update: (streamId) => { return { url: `/streams/${streamId}` }; },
    cloneStream: (streamId) => { return { url: `/streams/${streamId}/clone` }; },
    delete: (streamId) => { return { url: `/streams/${streamId}` }; },
    pause: (streamId) => { return { url: `/streams/${streamId}/pause` }; },
    resume: (streamId) => { return { url: `/streams/${streamId}/resume` }; },
    testMatch: (streamId) => { return { url: `/streams/${streamId}/testMatch` }; },
  },
  StreamOutputsApiController: {
    add: (streamId) => { return { url: `/streams/${streamId}/outputs` }; },
    index: (streamId) => { return { url: `/streams/${streamId}/outputs` }; },
    delete: (streamId, outputId) => { return { url: `/streams/${streamId}/outputs/${outputId}` }; },
  },
  StreamRulesApiController: {
    delete: (streamId, streamRuleId) => { return { url: `/streams/${streamId}/rules/${streamRuleId}` }; },
    update: (streamId, streamRuleId) => { return { url: `/streams/${streamId}/rules/${streamRuleId}` }; },
    create: (streamId) => { return { url: `/streams/${streamId}/rules` }; },
  },
  SystemApiController: {
    info: () => { return { url: '/system' }; },
    jvm: () => { return { url: '/system/jvm' }; },
    fields: () => { return { url: '/system/fields' }; },
  },
  SystemJobsApiController: {
    list: () => { return { url: '/cluster/jobs' }; },
    getJob: (jobId) => { return { url: `/cluster/jobs/${jobId}` }; },
    cancelJob: (jobId) => { return { url: `/cluster/jobs/${jobId}` }; },
  },
  SystemMessagesApiController: {
    all: (page) => { return { url: `/system/messages?page=${page}` }; },
  },
  ToolsApiController: {
    grokTest: () => { return { url: '/tools/grok_tester' }; },
    jsonTest: () => { return { url: '/tools/json_tester' }; },
    naturalDateTest: (text) => { return { url: `/tools/natural_date_tester?string=${text}` }; },
    regexTest: () => { return { url: '/tools/regex_tester' }; },
    regexReplaceTest: () => { return { url: '/tools/regex_replace_tester' }; },
    splitAndIndexTest: () => { return { url: '/tools/split_and_index_tester' }; },
    substringTest: () => { return { url: '/tools/substring_tester' }; },
    containsStringTest: () => { return { url: '/tools/contains_string_tester' }; },
    lookupTableTest: () => { return { url: '/tools/lookup_table_tester' }; },
  },
  UniversalSearchApiController: {
    _streamFilter(streamId) {
      return (streamId ? { filter: `streams:${streamId}` } : {});
    },
    _buildBaseQueryString(query, timerange, streamId) {
      const queryString = {};

      const streamFilter = this._streamFilter(streamId);

      queryString.query = query;
      Object.keys(timerange).forEach((key) => { queryString[key] = timerange[key]; });
      Object.keys(streamFilter).forEach((key) => { queryString[key] = streamFilter[key]; });

      return queryString;
    },
    _buildUrl(url, queryString) {
      return `${url}?${Qs.stringify(queryString)}`;
    },
    search(type, query, timerange, streamId, limit, offset, sortField, sortOrder, decorate) {
      const url = `/search/universal/${type}`;
      const queryString = this._buildBaseQueryString(query, timerange, streamId);

      if (limit) {
        queryString.limit = limit;
      }
      if (offset) {
        queryString.offset = offset;
      }
      if (sortField && sortOrder) {
        queryString.sort = `${sortField}:${sortOrder}`;
      }

      if (decorate !== undefined) {
        queryString.decorate = decorate;
      }

      return { url: this._buildUrl(url, queryString) };
    },
    export(type, query, timerange, streamId, limit, offset, fields) {
      const url = `/search/universal/${type}/export`;
      const queryString = this._buildBaseQueryString(query, timerange, streamId);

      if (limit) {
        queryString.limit = limit;
      }
      if (offset) {
        queryString.offset = offset;
      }

      if (fields) {
        queryString.fields = fields.join(',');
      }

      return { url: this._buildUrl(url, queryString) };
    },
    histogram(type, query, resolution, timerange, streamId) {
      const url = `/search/universal/${type}/histogram`;
      const queryString = this._buildBaseQueryString(query, timerange, streamId);
      queryString.interval = resolution;

      return { url: this._buildUrl(url, queryString) };
    },
    fieldHistogram(type, query, field, resolution, timerange, streamId, includeCardinality) {
      const url = `/search/universal/${type}/fieldhistogram`;
      const queryString = this._buildBaseQueryString(query, timerange, streamId);
      queryString.interval = resolution;
      queryString.field = field;
      queryString.cardinality = includeCardinality;
      return { url: this._buildUrl(url, queryString) };
    },
    fieldStats(type, query, field, timerange, streamId) {
      const url = `/search/universal/${type}/stats`;
      const queryString = this._buildBaseQueryString(query, timerange, streamId);
      queryString.field = field;
      return { url: this._buildUrl(url, queryString) };
    },
    fieldTerms(type, query, field, timerange, streamId) {
      const url = `/search/universal/${type}/terms`;
      const queryString = this._buildBaseQueryString(query, timerange, streamId);
      queryString.field = field;
      return { url: this._buildUrl(url, queryString) };
    },
  },
  UsageStatsApiController: {
    pluginEnabled: () => { return { url: '/plugins/org.graylog.plugins.usagestatistics/config' }; },
    setOptOutState: () => { return { url: '/plugins/org.graylog.plugins.usagestatistics/opt-out' }; },
  },
  UsersApiController: {
    changePassword: (username) => { return { url: `/users/${username}/password` }; },
    create: () => { return { url: '/users' }; },
    list: () => { return { url: '/users' }; },
    load: (username) => { return { url: `/users/${username}` }; },
    delete: (username) => { return { url: `/users/${username}` }; },
    update: (username) => { return { url: `/users/${username}` }; },
  },
  DashboardsController: {
    show: (id) => { return { url: `/dashboards/${id}` }; },
  },
  ExtractorsController: {
    create: (inputId) => { return { url: `/system/inputs/${inputId}/extractors` }; },
    delete: (inputId, extractorId) => { return { url: `/system/inputs/${inputId}/extractors/${extractorId}` }; },
    order: (inputId) => { return { url: `/system/inputs/${inputId}/extractors/order` }; },
    update: (inputId, extractorId) => { return { url: `/system/inputs/${inputId}/extractors/${extractorId}` }; },
  },
  MessagesController: {
    analyze: (index, string) => { return { url: `/messages/${index}/analyze?string=${string}` }; },
    parse: () => { return { url: '/messages/parse' }; },
    single: (index, messageId) => { return { url: `/messages/${index}/${messageId}` }; },
  },
  ping: () => { return { url: '/' }; },
};

export default ApiRoutes;
