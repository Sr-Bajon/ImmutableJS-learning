var xconsole = {
  log: function() {
    return true
  }
};

/******************************************************************************
███████ ██████   ██████  ███    ███      ██ ███████
██      ██   ██ ██    ██ ████  ████      ██ ██
█████   ██████  ██    ██ ██ ████ ██      ██ ███████
██      ██   ██ ██    ██ ██  ██  ██ ██   ██      ██
██      ██   ██  ██████  ██      ██  █████  ███████
******************************************************************************/
let toImmutableMap = Immutable.fromJS({
  clave: 'valor'
});
xconsole.log(Immutable.Map.isMap(toImmutableMap)); // true

let toImmutableList = Immutable.fromJS(['uno', 'dos', 'tres']);
xconsole.log(Immutable.Map.isMap(toImmutableList)); // false
xconsole.log(Immutable.List.isList(toImmutableList)); // true

/******************************************************************************
██ ███████        ██        ███████  ██████  ██    ██  █████  ██      ███████
██ ██             ██        ██      ██    ██ ██    ██ ██   ██ ██      ██
██ ███████     ████████     █████   ██    ██ ██    ██ ███████ ██      ███████
██      ██     ██  ██       ██      ██ ▄▄ ██ ██    ██ ██   ██ ██           ██
██ ███████     ██████       ███████  ██████   ██████  ██   ██ ███████ ███████
                                        ▀▀
******************************************************************************/
var map1 = Immutable.Map({
  a: 1,
  b: 1,
  c: 1
});
var map2 = Immutable.Map({
  a: 1,
  b: 1,
  c: 1
});
xconsole.log(map1 !== map2); // dos instancias diferentes
xconsole.log(Immutable.is(map1, map2)); // tienen valores equivalentes
xconsole.log(map1.equals(map2)); // uso alternativo de equals.

/******************************************************************************
████████  ██████       ██ ███████
   ██    ██    ██      ██ ██
   ██    ██    ██      ██ ███████
   ██    ██    ██ ██   ██      ██
   ██     ██████   █████  ███████
******************************************************************************/
// acepta un array de arrays de dos valores
let toJsMap = Immutable.Map([
  ['clave', 'valor'],
  ['clave2', 'valor2']
]);
xconsole.log(toJsMap.toJS());

let toJsMap2 = Immutable.Map({
  clave: 'valor',
  clave2: 'valor2'
});
xconsole.log(toJsMap2.toJS());


/******************************************************************************
███    ███  █████  ██████
████  ████ ██   ██ ██   ██
██ ████ ██ ███████ ██████
██  ██  ██ ██   ██ ██
██      ██ ██   ██ ██
******************************************************************************/
let map3 = Immutable.Map({key: 'value', key2:'value2'});
let map4 = Immutable.Map([['key', 'value']]);

xconsole.log(map3.size); // 2
xconsole.log(map4.size); // 1


/******************************************************************************
███    ███  █████  ██████       ██████ ██   ██  █████  ███    ██  ██████  ███████ ███████
████  ████ ██   ██ ██   ██     ██      ██   ██ ██   ██ ████   ██ ██       ██      ██
██ ████ ██ ███████ ██████      ██      ███████ ███████ ██ ██  ██ ██   ███ █████   ███████
██  ██  ██ ██   ██ ██          ██      ██   ██ ██   ██ ██  ██ ██ ██    ██ ██           ██
██      ██ ██   ██ ██           ██████ ██   ██ ██   ██ ██   ████  ██████  ███████ ███████
******************************************************************************/
const mapChange1 =  Immutable.Map({key: 'value', key2:'value2'});
const newMapChange1 = mapChange1.set('key','un valor nuevo');

xconsole.log(
  mapChange1.get('key'), // value
  '\n',
  newMapChange1.get('key') // un valor nuevo
);

const newMapChange2 = mapChange1.delete('key');

const newMapChange3 = mapChange1.clear();  // {}

const newMapChange4 = Immutable.Map({
  key: 'value',
  subObject: { subKey: 'subValue' }
});
const newMapChange4Updated = newMapChange4.update(map => {
  return Immutable.Map(map.get('subObject'));
});
xconsole.log(newMapChange4Updated.toJS());

newMapChange4.update('key', value => {
  return value + value;
});
newMapChange4.update('key', 'value', value => {
  return value + value;
});  // { key: 'value', noKey: 'no valueno value' }


var x = Immutable.Map({a: 10, b: 20, c: 30});
var y = Immutable.Map({b: 40, a: 50, d: 60});
x.merge(y) // { a: 50, b: 40, c: 30, d: 60 }
y.merge(x) // { b: 20, a: 10, d: 60, c: 30 }


var xmergeWith = Immutable.Map({a: 10, b: 20, c: 30});
var ymergeWith = Immutable.Map({b: 40, a: 50, d: 60});
xmergeWith.mergeWith((prev, next) => prev / next, ymergeWith) // { a: 0.2, b: 0.5, c: 30, d: 60 }
ymergeWith.mergeWith((prev, next) => prev / next, xmergeWith) // { b: 2, a: 5, d: 60, c: 30 }
