import test from 'ava';
import execa from 'execa';

test(t => {
	t.notThrows(() => execa('./cli.js', ['https://sindresorhus.com'], {cwd: __dirname}).unref());
});
