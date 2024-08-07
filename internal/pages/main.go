package pages

const MainTmpl = `
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

    <title>Hero Blog</title>
    <meta name="description" content="Hero Blog">
</head>

<body class="light main">
    <header>
        <img src="/static/images/amazing_logo.png" width="100" height="100" alt="wonderful logo">
        <h1>Hero Blog</h1>
    </header>
    <main class="posts">
        <ol start="{{.FirstItemNum}}">
            <span>Total: {{.Total}}</span>

			{{range .List}}
				<li>
					<a href="/readpost/?post={{.Number}}">
						<h4>{{.Title}} <md-icon slot="icon">arrow_forward</md-icon></h4>
						<div>{{.Content}}</div>
						<span>{{.PublishedAt}}</span>
					</a>
				</li>
			{{else}}
				<div><strong>no rows</strong></div>
			{{end}}
        </ol>
        <div class="pagination">
				{{if .PrevExists}}
					<a href="/?page=1">
				{{end}}
            		<md-text-button {{if .PrevNotExists}}disabled{{end}}>
						First
						<md-icon slot="icon">first_page</md-icon>
					</md-text-button>
				{{if .PrevExists}}
					</a>
					<a href="/?page={{.Prev}}">
				{{end}}
					<md-text-button {{if .PrevNotExists}}disabled{{end}}>
						Previous
						<md-icon slot="icon">chevron_backward</md-icon>
					</md-text-button>
				{{if .PrevExists}}
					</a>
				{{end}}
			
				{{if .NextExists}}
					<a href="/?page={{.Next}}">
				{{end}}
					<md-text-button {{if .NextNotExists}}disabled{{end}} trailing-icon>
						Next
						<md-icon slot="icon">chevron_forward</md-icon>
					</md-text-button>					
				{{if .NextExists}}
					</a>
					<a href="/?page={{.LastPage}}">
				{{end}}
					<md-text-button {{if .NextNotExists}}disabled{{end}} trailing-icon>
						Last
						<md-icon slot="icon">last_page</md-icon>
					</md-text-button>
				{{if .NextExists}}
					</a>
				{{end}}
        </div>
    </main>
</body>

</html>
`
