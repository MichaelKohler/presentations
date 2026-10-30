<style>
body {
  font-family: "Open Sans";
  margin: 6em 2em 2em 2em;
}
h1, h2, h3, h4 {
  font-weight: 600;
}
h1 {
  position: fixed;
  background: -webkit-linear-gradient(top, white 65%, rgba(255,255,255,0));
  background: -moz-linear-gradient(top, white 65%, rgba(255,255,255,0));
  background: -ms-linear-gradient(top, white 65%, rgba(255,255,255,0));
  background: -o-linear-gradient(top, white 65%, rgba(255,255,255,0));
  width: 100%;
  height: 80px;
  padding: 10px 10px 10px 1em;
  left: 0;
  top: 0;
  margin: 0;
}
h1 img {
  height: 30px;
  vertical-align: middle;
  margin-bottom: 8px;
}
a { color: navy; }
pre {
  background: #eee;
  margin-left: 2em;
  padding: 5px;
  border-left: 3px solid #ccc;
}
</style>

<h1><img src="images/io2012_logo.png"> HTML5 Slide Template</h1>

## Configuring the slides

Much of the deck is customized by changing the settings in [`slide_config.js`](slide_config.js).
Some of the customizations include the title, Analytics tracking ID, speaker
information (name, social urls, blog), web fonts to load, themes, and other
general behavior.

## Running the slides

The slides can be run locally from `file://` making development easy :)

### Running from a web server

If at some point you should need a web server, use [`serve.sh`](serve.sh). It will
launch a simple one and point your default browser to [`http://localhost:8000/template.html`](http://localhost:8000/template.html):

    $ cd io-2012-slides
    $ ./serve.sh

You can also specify a custom port:

    $ ./serve.sh 8080

### Presenter mode

The slides contain a presenter mode feature (beta) to view + control the slides
from a popup window.

To enable presenter mode, add `presentme=true` to the URL: [http://localhost:8000/template.html?presentme=true](http://localhost:8000/template.html?presentme=true)

To disable presenter mode, hit [http://localhost:8000/template.html?presentme=false](http://localhost:8000/template.html?presentme=false)

Presenter mode is sticky, so refreshing the page will persist your settings.

---

That's all she wrote!
