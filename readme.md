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

	bind(node, attr, valueObserver)

## Usage

	bind(inputElement, 'value', new PathObserver(model, 'user.name'));

## Bindings

Value binding in some cases (with two-way binding):

| Node type           | Attr          | Binding        |
|---------------------|---------------|----------------|
| Text                | textContent   | String(value)  |
| HTMLInputElement    | value         | String(value)  |
| HTMLInputElement    | checked       | Boolean(value) |
| HTMLTextAreaElement | value         | String(value)  |
| HTMLSelectElement   | value         | Number(value)  |
| HTMLSelectElement   | selectedIndex | Number(value)  |

Else - binding by attribute.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) Alexey Raspopov
