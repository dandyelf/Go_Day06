package pages

const NewPostTmplt = `
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

    <title>Hero Blog | Add new post</title>
    <meta name="description" content="Hero Blog | Add new post">
</head>

<body class="light">
    <header>
        <img src="/static/images/amazing_logo.png" width="60" height="60" alt="wonderful logo">
        <div>Hero Blog</div>
    </header>
    <main class="new-post">
		<form method="post" action="/pushpost">
            <span>Add new post</span>
			<md-outlined-text-field label="Title" name="title" required></md-outlined-text-field>
			<md-outlined-text-field label="Content" name="content" type="textarea" required></md-outlined-text-field>
			<md-filled-button type="submit" trailing-icon>
                Submit
                <md-icon slot="icon">check</md-icon>
            </md-filled-button>
		</form>
    </main>
</body>

</html>
`
