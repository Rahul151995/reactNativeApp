# reactNativeApp
To setup the environment and create the boilerplate of react native projects.



## MAC User
  
  - install Xcode and Android Studio


## Setup Environment in machine

  - npm install -g react-native-cli 

  - To check the version : react-native -v

  - react-native init projectName 


## Project Structure Overview

  - android folder : It consist compiled code of android
  - Ios folder : It consist compiled code of ios.
  - package.json file :  

             -  It has dependencies  i.e required for production & development.
             -  It has devdependencies i.e required for development only.


## TypeScript Setup
    
    install the following:-

 - react-native-typescript-transformer
 - tsllint
 - tslint-config-prettier
 - tslint-react-recommended
 - typescript

   ```
    npm i react-native-typescript-transformer tslint tslint-config-prettier  tslint-react-recommended typescript
   ``` 

## Add the file for the type script.

  ### Add tsconfig.json
   
  ```
  tsconfig.json

  {
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "sourceMap": true,
    "jsx": "react",
    "lib": [
      "es2018",
      "dom"
    ],
    "allowSyntheticDefaultImports": true
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "./src/**/*"
  ]
}
  ```


### Add tslint.json

  ```

   tslint.json

 {
  "extends": [
    "tslint:recommended",
    "tslint-config-prettier",
    "tslint-plugin-prettier"
  ],
  "rules": {
    "prettier": true,
    "ordered-imports": [
      false
    ],
    "quotemark": [
      true,
      "single",
      "jsx-single",
      "avoid-escape"
    ],
    "semicolon": [
      false,
      "never"
    ],
    "member-access": [
      false
    ],
    "member-ordering": [
      false
    ],
    "trailing-comma": [
      true,
      {
        "singleline": "never",
        "multiline": "always"
      }
    ],
    "no-empty": false,
    "no-submodule-imports": false,
    "no-implicit-dependencies": false,
    "no-constant-condition": false,
    "triple-equals": [
      true,
      "allow-undefined-check"
    ],
    "ter-indent": [
      false,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "no-duplicate-imports": true,
    "jsx-alignment": false,
    "jsx-no-bind": true,
    "jsx-no-lambda": true,
    "interface-name": false,
    "object-literal-sort-keys": false,
    "max-classes-per-file": false
  }
}
  ```


## To run the react-native app in android.

   ```
   react-native run-android
   ```

## To Link assets or third party library.

  ```
    react-native.config.js

    <!-- When link third party library begin -->
       
       module.exports = { 
            
            'react-native-code-push':{
              platforms:{
                android: null,
                ios:null
              }
            }
       }

    <!-- When link third party library end -->


     <!-- When link assets begin -->
       
       module.exports = {
            assets: ['./src/assets/fonts/'],
      };

    <!-- When link assets end -->



    <!-- To Link the file automatically run the below command -->

     react-native link

  ```



  ## To make responsive UI in react-native

    ```
    npm i react-native-responsive-screen
    ```
