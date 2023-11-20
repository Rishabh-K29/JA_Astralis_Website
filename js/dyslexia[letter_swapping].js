import * as random from 'random';
import * as string from 'string';
import * as time from 'time';

function swap(input1) {
  var i, j, s;
  s = input1.slice(1, -1);
  [i, j] = random.sample(range(s.length), 2);

  if (i > j) {
    [i, j] = [j, i];
  }

  return input1[0] + s.slice(0, i) + s[j] + s.slice(i + 1, j) + s[i] + s.slice(j + 1) + input1.slice(-1)[0];
}

for (var i = 0, _pj_a = 10; i < _pj_a; i += 1) {
  console.log(swap("adhd is a prominent issue"));
  time.sleep(5);
}

console.log("program complete");
