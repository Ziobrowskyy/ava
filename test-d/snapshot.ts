import {expectError} from 'tsd';

import test from '..';

test('snapshot', t => {
	t.snapshot({foo: 'bar'});
	t.snapshot(null, 'a snapshot with a message');
	expectError(t.snapshot('hello world', null)); // eslint-disable-line @typescript-eslint/no-confusing-void-expression
});

test('snapshot.skip', t => {
	t.snapshot.skip({foo: 'bar'});
	t.snapshot.skip(null, 'a snapshot with a message');
	expectError(t.snapshot.skip('hello world', null)); // eslint-disable-line @typescript-eslint/no-confusing-void-expression
});
