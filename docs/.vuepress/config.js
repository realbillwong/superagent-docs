module.exports = {
    title: 'Superagent 中文文档',
    description:
        'Superagent 是一个轻量级的 Node.js 请求库，API 非常的简单。Superagent 适用于几乎全部场景。',
    themeConfig: {
        lastUpdated: false,
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
    extendMarkdown(md) {
        lineNumbers: true;
    },
    dest: 'public',
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                ga: '',
            },
        ],
    ],
};
