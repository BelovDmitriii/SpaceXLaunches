"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetLaunchesQuery = exports.launchesApi = void 0;
var _react = require("@reduxjs/toolkit/query/react");
var API_URL = 'https://api.spacexdata.com';
var launchesApi = (0, _react.createApi)({
  reducerPath: 'launchesApi',
  baseQuery: (0, _react.fetchBaseQuery)({
    baseUrl: API_URL
  }),
  endpoints: function endpoints(builder) {
    return {
      getLaunches: builder.query({
        query: function query() {
          return {
            url: '/v5/launches'
          };
        }
      })
    };
  }
});
exports.launchesApi = launchesApi;
var useGetLaunchesQuery = launchesApi.useGetLaunchesQuery;
exports.useGetLaunchesQuery = useGetLaunchesQuery;