const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

module.exports = function (app) {

    //Server.js
    app.use(
        '/Doctor',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    );
    app.use(
        '/Patient',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    );
    app.use(
        '/MedicalHistory/*',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    );
    app.use(
        '/Appointment/*',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    );
    app.use(
        '/Email/createPF',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    );

    app.use(
        '/GenratedReport/*',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    );

    //PaymentServer.js
    app.use(
        '/pay',
        createProxyMiddleware({
            target: 'http://localhost:3004',
            changeOrigin: true,
        })
    );
};