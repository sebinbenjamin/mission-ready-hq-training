mission-ready-hq-training

## Heroku Deployment steps
1. Create an account with https://www.heroku.com/
2. Download and install the Heroku CLI https://devcenter.heroku.com/articles/heroku-cli#download-and-install
3. Run `heroku login` to authenticate the CLI tool
4. Go to the React project folder and type `heroku create missionx-demo-app-name --buildpack mars/create-react-app`
5. Check to see if the remote is added `git remote -v`. If not, run `heroku git:remote -a missionx-demo-app-name` to add a remote for heroku.
6. Run `git push heroku` to deploy changes to Heroku whenever required.