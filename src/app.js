var simpleGit = require('./git');
var env = {
   GIT_SSH: './script.sh'
};

simpleGit(null, env, '~/.ssh/id_rsa').clone('git@github.com:jesusjzp/gitjs.git', 'tmp',
	function(err) {
	});

simpleGit('tmp', env, '~/.ssh/id_rsa').fetch('https://github.com/sutoiku/git-js.git', 'master',
	function(err) {
	});

simpleGit('tmp', env, '~/.ssh/id_rsa').pull('git@github.com:jesusjzp/gitjs.git', 'master',
	function(err) {
	});