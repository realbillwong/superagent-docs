module.exports = {
    title: 'Superagent中文文档 - 一个简单的轻量级同构Ajax请求库',
    description:
        'SuperAgent 是著名大神 TJ Holowaychuk 对市面上现有 HTTP 请求库 API 感到不爽之后，创造出来的一个轻量级的渐进式 Ajax 请求库，旨在实现灵活性，API 可读性和低学习曲线。同时 SuperAgent 也可以在 Node.js 中一起使用！Client 端和 Nodejs 端 API 接口完全相同，另外还支持许多高级 HTTP 客户端功能。',
    head: [
        ['meta', { name: 'baidu-site-verification', content: 'gI0hKVU4ll' }],
        ['meta', { name: '360-site-verification', content: '82a1ab701bbbcc264b31590ae2b738a1' }],
        [
            'meta',
            {
                name: 'google-site-verification',
                content: 'c_XV7ye4-MEvaD9uIwg1iYvDMjyMAdknbmA3vHIAV0g',
            },
        ],
        ['meta', { name: 'sogou_site_verification', content: 'p2eJdXqgfc' }],
        [
            'meta',
            { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' },
        ],
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    themeConfig: {
        repo: 'realbillwong/superagent-docs',
        editLinks: true,
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        adsConfig: [],
        nav: [{ text: 'English', link: 'https://visionmedia.github.io/superagent/' }],
        sidebar: {
            '/': [
                {
                    title: '介绍',
                    path: '/',
                },
                {
                    title: '基础',
                    collapsable: false,
                    children: [
                        'basics/',
                        'basics/promise',
                        'basics/compression',
                        'basics/browser-and-node-version',
                        'basics/testing-on-localhost',
                    ],
                },
                {
                    title: 'Request',
                    collapsable: false,
                    children: [
                        'request/setting-header-fields',
                        'request/setting-content-type',
                        'request/setting-accept',
                        'request/get',
                        'request/head',
                        'request/post',
                        'request/multipart',
                        'request/serializing-request-body',
                        'request/retry',
                        'request/query-strings',
                        'request/abort',
                        'request/redirects',
                        'request/timeouts',
                    ],
                },
                {
                    title: 'Response',
                    collapsable: false,
                    children: [
                        'response/properties',
                        'response/parsing',
                        'response/buffering',
                        'response/error-handling',
                    ],
                },
                {
                    title: '高级用法',
                    collapsable: false,
                    children: [
                        'advanced/cors',
                        'advanced/agents',
                        'advanced/pipe',
                        'advanced/authentication',
                        'advanced/progress-tracking',
                        'advanced/tls-options',
                    ],
                },
            ],
        },
    },
    dest: 'public',
    plugins: [
        ['@vuepress/back-to-top', true],
        [
            '@vuepress/google-analytics',
            {
                ga: 'UA-142176129-2',
            },
        ],
        ['@vuepress/last-updated'],
        [
            'sitemap',
            {
                hostname: 'https://superagent.org.cn/',
            },
        ],
    ],
};
