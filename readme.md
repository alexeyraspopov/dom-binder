# dom-binder

DOM Binder

## Install

```bash
$ component install alexeyraspopov/dom-binder
```

```bash
$ bower install dom-binder
```

## API

	bind(node, attr, observer)

`observer` should provide method `subscribe` which pass a function and call it immediately with latest value.

## Usage

	bind(inputElement, 'value', new PathObserver(model, 'user.name'));

## Bindings

Value can be converted in some cases and written like element's property:

| Attr          | Binding        |
|---------------|----------------|
| value         | String(value)  |
| checked       | Boolean(value) |
| innerHTML     | String(value)  |
| textContent   | String(value)  |
| selectedIndex | Number(value)  |

Else - binding by attribute.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) Alexey Raspopov
