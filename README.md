# bulma-toast

[![npm version](https://badge.fury.io/js/bulma-toast.svg)](https://badge.fury.io/js/bulma-toast)

Bulma's pure JavaScript extension to display toasts. Basically a Bulma's [notification](https://bulma.io/documentation/elements/notification) implemented as a toast plugin.

[Demo](https://rafaelfran.co/bulma-toast/)

![Screenshot](https://raw.githubusercontent.com/rfoel/bulma-toast/master/screenshot.png)

## Options

The plugin comes with 5 options to be used as a JavaScript object:

- `message`: The actual message to be displayed.
- `type`: Essentially a Bulma's css class. It can be `is-primary`, `is-link`, `is-info`, `is-success`, `is-warning`, `is-danger`, or any other custom class. Default is a whitesmoke background with dark text as shown [here](https://bulma.io/documentation/elements/notification).
- `duration`: Duration of the notification in milliseconds. Default is `2000` milliseconds.
- `position`: Position where the notification will be shown. The default is `top-right`, so if you want it to be on the top-left just add `top-left` to this option. The available options are: `top-left`, `top-center`, `top-right`, `center`, `bottom-left`, `bottom-center`, and `bottom-right`.
- `dismissible`: Whether the notification will have a close button or not. Default is `false`.
- `pauseOnHover`: Pauses delay when hovering the notification. Default is `false`.
- `closeOnClick`: Dismisses the notification when clicked. Default is `true`.

## Install

#### [npm](https://www.npmjs.com/package/bulma-toast)

```
npm install --save bulma-toast
```

## Quick Start

1.  Link to bulma-toast.min.js `<script src="bulma-toast.min.js"></script>`

2.  use bulma-toast to display a toast
    ```js
    bulmaToast.toast({ message: 'Hello There' })
    bulmaToast.toast({ message: 'General Kenobi', type: 'is-danger' })
    ```

## ES Modules

```js
// Import the toast function
import { toast } from 'bulma-toast'
// Or use
// import { toast as superToast } from 'bulma-toast'
// to rename your import

toast({
  message: 'Hello There',
  type: 'is-success',
  dismissible: true,
})
```

## The Defaults

A simple default object to prevent errors. Your options will be merged with these and the defaults will be used if the fields are not provided.

```js
{
  message: 'Your message here',
  duration: 2000,
  position: 'top-right',
}
```

## Contributing

Can you make this plugin better? Clean the mess I made? Feel free to do so!

1.  Fork it ( https://github.com/rfoel/bulma-toast/fork )
2.  Create your feature branch (`git checkout -b my-new-feature`)
3.  Commit your changes (`git commit -am 'Add some feature'`)
4.  Push to the branch (`git push origin my-new-feature`)
5.  Create a new Pull Request
