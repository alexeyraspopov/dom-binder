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

## Usage

	bind(inputElement, 'value', new PathObserver(model, 'user.name'));

## Bindings

Value can be converted in some cases and written like element's property:

| Attr          | Binding        |
|---------------|----------------|
| value         | String(value)  |
| checked       | Boolean(value) |
| selectedIndex | Number(value)  |

Else - binding by attribute.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) Alexey Raspopov
