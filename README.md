# chrome-addon
This is a Google Chrome addon which will add extension to Scratch to interact with the CSE Scratch competition


# Development
1. Checkout the code and cd into it.
2. First run `npm install` and `bower install` to install dependencies. You might also need to run `npm install -g yo grunt-cli`.
3. In Google Chrome [extension menu]( "chrome://extensions/" ) enabling the develper mode.
4. Click `Load unpacked extension` in the extention menu.
5. Open the `app` folder within the checked out code from the extention.
6. Run `grunt debug`


# Deployment
Run `grunt build`
