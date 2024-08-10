package pages

const AuthTmpl = `
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

	<link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Rounded" rel="stylesheet">

    <link href="/static/css/theme/theme.css" rel="stylesheet">
    <link href="/static/css/styles.css" rel="stylesheet">
    <script src="/static/js/web-components.js" async></script>

    <title>Authorization</title>
    <meta name="description" content="Authorization">
</head>

<body class="light">
    <main class="auth">
        <form method="post" action="/addpost">
            <span>Authorization</span>
            <md-outlined-text-field type="text" label="Login" name="user" required></md-outlined-text-field>
            <md-outlined-text-field type="password" label="Password" name="password" required></md-outlined-text-field>
            <md-filled-button type="submit">
                Sign In
                <md-icon slot="icon">login</md-icon>
            </md-filled-button>
        </form>
    </main>
</body>

</html>
`
