package pages

// Total       int
// Next        int
// Prev        int
// PerPage     int
// CurrentPage int
// List        []types.Post

// Title       string    `json:"title"`
// Content     string    `json:"content"`
// Author      string    `json:"author"`
// PublishedAt time.Time `json:"published_at"`

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

    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded" rel="stylesheet" />

    <link href="/static/theme/theme.css" rel="stylesheet">

    <link href="/static/styles.css" rel="stylesheet">
    <script src="/static/index.js" defer></script>

    <script src="/static/web-components.js" async></script>

    <title>Hero Blog</title>
    <meta name="description" content="Hero Blog">
</head>

<body class="light">
    <header>
        <img src="/static/amazing_logo.png" alt="wonderful logo">
        <h1>Hero Blog</h1>
    </header>
    <main>
        <ol start="{{.FirstItemNum}}">
            <span>Total: {{.Total}}</span>

			{{range .List}}
				<li>
					<a href="/readpost/?post={{.Number}}">
						<h4>{{.Title}}</h4>
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
            		<md-text-button {{if .PrevNotExists}}disabled{{end}}>First</md-text-button>
				{{if .PrevExists}}
					</a>
					<a href="/?page={{.Prev}}">
				{{end}}
					<md-text-button {{if .PrevNotExists}}disabled{{end}}>Previous</md-text-button>
				{{if .PrevExists}}
					</a>
				{{end}}
			
				{{if .NextExists}}
					<a href="/?page={{.Next}}">
				{{end}}
					<md-text-button {{if .NextNotExists}}disabled{{end}}>Next</md-text-button>
					
				{{if .NextExists}}
					</a>
					<a href="/?page={{.LastPage}}">
				{{end}}
					<md-text-button {{if .NextNotExists}}disabled{{end}}>Last</md-text-button>
				{{if .NextExists}}
					</a>
				{{end}}
        </div>
    </main>
</body>

</html>
`
