package pages

const mainTmpl = `
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="utf-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no, interactive-widget=overlays-content" />

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta names="apple-mobile-web-app-status-bar-style" content="black-translucent" />

    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded" rel="stylesheet" />

    <link href="/theme/theme.css" rel="stylesheet">

    <link href="/styles.css" rel="stylesheet">
    <script src="/index.js" defer></script>

    <script src="/web-components.js" async></script>

    <title>Hero Blog</title>
    <meta name="description" content="Hero Blog">
</head>

<body class="light">
    <header>
        <img src="/amazing_logo.png" alt="wonderful logo">
        <h1>Hero Blog</h1>
    </header>
    <main>
        <ol start="4">
            <span>Total: 160</span>
            <li>
                <a href="/readpost/?post=0">
                    <h4>Fighting Corruption</h4>
                    <div>4 I discover that a powerful businessman is using his... </div>
                    <span>2006-01-02 18:04:05 +0300 MSK</span>
                </a>
            </li>
            <li>
                <a href="/readpost/?post=1">
                    <h4>Searching for Truth</h4>
                    <div>5 I encounter a mysterious case of people disappearing in... </div>
                    <span>2006-01-02 18:04:05 +0300 MSK</span>
                </a>
            </li>
            <li>
                <a href="/readpost/?post=1">
                    <h4>Searching for Truth</h4>
                    <div>5 I encounter a mysterious case of people disappearing in... </div>
                    <span>2006-01-02 18:04:05 +0300 MSK</span>
                </a>
            </li>
        </ol>
        <div class="pagination">
            <md-text-button role="presentation" disabled>First</md-text-button>
            <md-text-button role="presentation" disabled>Previous</md-text-button>
            <a href="/?page=3">
                <md-text-button role="presentation">Next</md-text-button>
            </a>
            <a href="/?page=6">
                <md-text-button role="presentation">Last</md-text-button>
            </a>
        </div>
    </main>
</body>

</html>
`
