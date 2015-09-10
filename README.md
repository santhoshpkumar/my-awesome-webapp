# my-awesome-webapp

I created this <a href="http://www.santhoshkumar.org">site</a> to provide a medium to test out the newest
web technologies and give back to the design and developer community via open source apps, articles.

# deployment instructions

$ gcloud auth login
$ gcloud components update app
$ gcloud config set project <your-project-id>
$ gcloud preview app deploy app.yaml --set-default

To set the default version for a single module, run:
$ gcloud preview app modules set-default default --version=1

To list your deployed modules, run:
$ gcloud preview app modules list

To stop a module, run:
$ gcloud preview app modules stop default --version=1

To start serving a single module, run:
$ gcloud preview app modules start default --version=1

To delete a single module, run:
$ gcloud preview app modules delete default --version=1
