# Array.prototype.toSorted Polyfill Chrome Extension

## Overview

This repository contains a Chrome extension designed to polyfill the `Array.prototype.toSorted` method for older versions of Chrome. The extension addresses an issue that arose on the chatgpt.com page when OpenAI's developers added the `toSorted` method, causing an error message "Oops, an error occurred!" to appear on older versions of Chrome. The problem was discussed in the OpenAI community, as detailed on the [community page](https://community.openai.com/t/oops-an-error-occurred/896544/136).

The `toSorted` method's code was contributed by a user named [GenericGeneral](https://community.openai.com/u/genericgeneral/summary), and this extension packages that function for seamless use. Below is the core function that was implemented:

```javascript
if (!Array.prototype.toSorted) {
  Array.prototype.toSorted = function(compareFn) {
    compareFn = compareFn || ((a, b) => String(a).localeCompare(b));
    const arrayCopy = [...this];
    return arrayCopy.sort(compareFn);
  };
}
```

## Installation
Clone this repository or download the zip file.
Open Chrome and navigate to chrome://extensions/.
Enable "Developer mode" by toggling the switch in the top-right corner.
Click "Load unpacked" and select the directory containing the extension files.
Usage
Once the extension is loaded, it will automatically inject the toSorted method polyfill whenever you visit a page on chatgpt.com, ensuring compatibility with older versions of Chrome.

## Contributing
If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License
This project is licensed under the [MIT License](https://opensource.org/license/mit) - see the LICENSE file for details.
