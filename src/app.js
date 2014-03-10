var simpleGit = require('./git');
var env = {
   GIT_SSH: './script.sh'
};

simpleGit(null, env, '/Users/zhipengjiang/.ssh/id_rsa').clone('git@github.com:jesusjzp/gitjs.git', 'tmp',
	function(err) {
	console.log('bug?', err);
});