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
