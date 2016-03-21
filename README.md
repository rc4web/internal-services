# myRC4 Internal Services Portal
RC4 Internal Student Life Website

## Getting started for Development

0. Install [Ruby/RubyGems](https://rubygems.org/pages/download) (for Jekyll) and [nodejs/npm](https://nodejs.org/en/) (for http-server, *Optional if you already have a local server).

1. Install [Jekyll](https://jekyllrb.com/)
 
  ````
  gem install jekyll
  ````
  
2. Install a static http local server (*Optional if you already have a local web server)

  ````
  npm install http-server -g
  ````

3. Fork the repo and clone *your own fork* onto your machine.

4. Open the root directory of the repo in terminal and build the project.

  ````
  cd ~/internal-services/
  jekyll  b --watch
  ````

5. You should now see a "_site" folder being generated. (This is where the compiled site will sit.) Open the folder in another terminal tab and start your local http server.

  ````
  cd _site
  http-server
  ````

6. You can now view the site as http://localhost:8080 (or whichever port your prefered http server uses).

7. And thats it! Thanks to the '--watch' flag we set in jekyll earlier, every time you make any changes, your code will automatically be recompiled and you can simply refresh your browser to see your changes.

## Understanding the Project Structure
<To be added>

## Contributing Code

1. Once you are satisfied with your code, push/sync with your remote fork.

2. Open a pull request at your github.com forked repo page.
