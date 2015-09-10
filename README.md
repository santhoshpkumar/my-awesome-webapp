# my-awesome-webapp

I created this <a href="http://www.santhoshkumar.org">site</a> to provide a medium to test out the newest
web technologies and give back to the design and developer community via open source apps, articles.

# deployment instructions

$ gcloud auth login
$ gcloud components update app
$ gcloud config set project <your-project-id>
$ gcloud preview app deploy app.yaml --set-default

To list your deployed modules, run:
$ gcloud preview app modules list
