module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        mocha: true,
    },
    parser: 'babel-eslint',
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            globalReturn: true,
            jsx: true,
        },
    },
    plugins: ['react', 'babel'],
    rules: {

        //
        // Override recommended rules
        //
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }], // enforce trailing commas
        'no-console': 'warn', // disallow use of console in the node environment
        'no-unused-vars': ['error', { 'args': 'none' }], // disallow declaration of variables that are not used in the code
        'no-empty-function': ['error', {'allow': [ // Disallow empty functions for arrow functions
            'functions',
            // 'arrowFunctions',
            'generatorFunctions',
            'methods',
            'generatorMethods',
            'getters',
            'setters',
            'constructors',
        ]}],

        //
        // Possible Errors
        //
        // The following rules point out areas where you might have made mistakes.
        //
        'no-extra-parens': ['warn', 'all'], // disallow unnecessary parentheses
        'no-unexpected-multiline': 'error', // Avoid code that looks like two expressions but is actually one
        'valid-jsdoc': 'off', // Ensure JSDoc comments are valid

        //
        // Best Practices
        //
        // These are rules designed to prevent you from making mistakes.
        // They either prescribe a better way of doing something or help you avoid footguns.
        //
        'accessor-pairs': 'off', // Enforces getter/setter pairs in objects
        'block-scoped-var': 'error', // treat var statements as if they were block scoped
        'complexity': 'off', // specify the maximum cyclomatic complexity allowed in a program
        'consistent-return': 'error', // require return statements to either always or never specify values
        'curly': 'error', // specify curly brace conventions for all control statements
        'default-case': 'error', // require default case in switch statements
        'dot-location': 'off', // enforces consistent newlines before or after dots
        'dot-notation': 'off', // encourages use of dot notation whenever possible
        'eqeqeq': ['error', 'allow-null'], // require the use of === and !==
        'guard-for-in': 'error', // make sure for-in loops have an if statement
        'no-alert': 'off', // disallow the use of alert, confirm, and prompt
        'no-caller': 'off', // disallow use of arguments.caller or arguments.callee
        'no-case-declarations': 'off', // disallow lexical declarations in case clauses
        'no-constant-condition': 'error', // Disallow use of constant expressions in conditions
        'no-div-regex': 'error', // disallow division operators explicitly at beginning of regular expression
        'no-else-return': 'error', // disallow else after a return in an if
        'no-empty-pattern': 'off', // disallow use of empty destructuring patterns
        'no-eval': 'error', // disallow use of eval()
        'no-extend-native': 'error', // disallow adding to native types
        'no-extra-bind': 'error', // disallow unnecessary function binding
        'no-floating-decimal': 'error', // disallow the use of leading or trailing decimal points in numeric literals
        'no-implicit-coercion': 'off', // disallow the type conversions with shorter notations
        'no-implied-eval': 'error', // disallow use of eval()-like methods
        'no-invalid-this': 'off', // disallow this keywords outside of classes or class-like objects
        'no-iterator': 'error', // disallow usage of __iterator__ property
        'no-labels': 'error', // disallow use of labeled statements
        'no-lone-blocks': 'error', // disallow unnecessary nested blocks
        'no-loop-func': 'off', // disallow creation of functions within loops
        'no-magic-numbers': 'off', // disallow the use of magic numbers
        'no-multi-spaces': 'error', // disallow use of multiple spaces
        'no-multi-str': 'error', // disallow use of multiline strings
        'no-native-reassign': 'error', // disallow reassignments of native objects
        'no-new-func': 'error', // disallow use of new operator for Function object
        'no-new-wrappers': 'error', // disallows creating new instances of String,Number, and Boolean
        'no-new': 'error', // disallow use of new operator when not part of the assignment or comparison
        'no-octal-escape': 'error', // disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
        'no-param-reassign': 'error', // disallow reassignment of function parameters
        'no-process-env': 'error', // disallow use of process.env
        'no-proto': 'error', // disallow usage of __proto__ property
        'no-return-assign': 'error', // disallow use of assignment in return statement
        'no-script-url': 'error', // disallow use of javascript: urls.
        'no-self-compare': 'error', // disallow comparisons where both sides are exactly the same
        'no-sequences': 'error', // disallow use of comma operator
        'no-throw-literal': 'error', // restrict what can be thrown as an exception
        'no-unused-expressions': 'error', // disallow usage of expressions in statement position
        'no-useless-call': 'error', // disallow unnecessary .call() and .apply()
        'no-useless-concat': 'error', // disallow unnecessary concatenation of literals or template literals
        'no-void': 'error', // disallow use of void operator
        'no-warning-comments': ['warn', {'terms': ['todo', 'fixme', '@todo', '@hack', 'hack'], 'location': 'start'}], // disallow usage of configurable warning terms in comments': 'error', // e.g. TODO or FIXME
        'no-with': 'error', // disallow use of the with statement
        'radix': 'error', // require use of the second argument for parseInt()
        'vars-on-top': 'off', // require declaration of all vars at the top of their containing scope
        'wrap-iife': 'off', // require immediate function invocation to be wrapped in parentheses
        'yoda': 'off', // require or disallow Yoda conditions

        //
        // Strict Mode
        //
        // These rules relate to using strict mode.
        //
        'strict': 'off', // controls location of Use Strict Directives

        //
        // Variables
        //
        // These rules have to do with variable declarations.
        //
        'init-declarations': 'off', // enforce or disallow variable initializations at definition
        'no-catch-shadow': 'error', // disallow the catch clause parameter name being the same as a variable in the outer scope
        'no-label-var': 'error', // disallow labels that share a name with a variable
        'no-shadow-restricted-names': 'error', // disallow shadowing of names such as arguments
        'no-shadow': 'off', // disallow declaration of variables already declared in the outer scope
        // 'no-undef-init': 'error', // disallow use of undefined when initializing variables
        'no-undefined': 'error', // disallow use of undefined variable
        'no-use-before-define': ['error', 'nofunc'], // disallow use of variables before they are defined

        //
        // Stylistic Issues
        //
        // These rules are purely matters of style and are quite subjective.
        //

        'array-bracket-spacing': ['error', 'never'], // enforce spacing inside array brackets
        'block-spacing': 'error', // disallow or enforce spaces inside of single line blocks
        'brace-style': ['error', '1tbs', { 'allowSingleLine': false }], // enforce one true brace style
        'camelcase': 'off', // require camel case names
        'comma-spacing': 'error', // enforce spacing before and after comma
        'comma-style': 'off', // enforce one true comma style
        'computed-property-spacing': 'error', // require or disallow padding inside computed properties
        'consistent-this': 'off', // enforce consistent naming when capturing the current execution context
        'eol-last': 'error', // enforce newline at the end of file, with no multiple empty lines
        'func-names': 'off', // require function expressions to have a name
        'func-style': 'off', // enforce use of function declarations or expressions
        'id-length': 'off', // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
        'id-match': 'off', // require identifiers to match the provided regular expression
        'indent': 'error', // specify tab or space width for your code
        'jsx-quotes': 'off', // specify whether double or single quotes should be used in JSX attributes
        'key-spacing': 'off', // enforce spacing between keys and values in object literal properties
        'linebreak-style': 'off', // disallow mixed 'LF' and 'CRLF' as linebreaks
        'lines-around-comment': 'off', // enforce empty lines around comments
        'max-depth': 'off', // specify the maximum depth that blocks can be nested
        'max-len': 'off', // specify the maximum length of a line in your program
        'max-nested-callbacks': 'off', // specify the maximum depth callbacks can be nested
        'max-params': 'off', // limits the number of parameters that can be used in the function declaration.
        'max-statements': 'off', // specify the maximum number of statement allowed in a function
        'new-cap': 'off', // require a capital letter for constructors
        'new-parens': 'off', // disallow the omission of parentheses when invoking a constructor with no arguments
        'newline-after-var': 'off', // require or disallow an empty newline after variable declarations
        'no-array-constructor': 'off', // disallow use of the Array constructor
        'no-bitwise': 'off', // disallow use of bitwise operators
        'no-continue': 'off', // disallow use of the continue statement
        'no-inline-comments': 'off', // disallow comments inline after code
        'no-lonely-if': 'off', // disallow if as the only statement in an else block
        'no-multiple-empty-lines': 'off', // disallow multiple empty lines
        'no-negated-condition': 'off', // disallow negated conditions
        'no-nested-ternary': 'off', // disallow nested ternary expressions
        'no-new-object': 'off', // disallow the use of the Object constructor
        'no-plusplus': 'off', // disallow use of unary operators, ++ and --
        'no-restricted-syntax': 'off', // disallow use of certain syntax in code
        'no-spaced-func': 'error', // disallow space between function identifier and application
        'no-ternary': 'off', // disallow the use of ternary operators
        'no-trailing-spaces': 'error', // disallow trailing whitespace at the end of lines
        'no-underscore-dangle': 'off', // disallow dangling underscores in identifiers
        'no-unneeded-ternary': 'off', // disallow the use of ternary operators when a simpler alternative exists
        'object-curly-spacing': ['error', 'always'], // require or disallow padding inside curly braces
        'one-var': 'off', // require or disallow one variable declaration per function
        'operator-assignment': 'off', // require assignment operator shorthand where possible or prohibit it entirely
        'operator-linebreak': 'off', // enforce operators to be placed before or after line breaks
        'padded-blocks': 'off', // enforce padding within blocks
        'quote-props': 'off', // require quotes around object literal property names
        'quotes': ['error', 'single', 'avoid-escape'], // specify whether backticks, double or single quotes should be used
        'require-jsdoc': 'off', // Require JSDoc comment
        'semi-spacing': 'off', // enforce spacing before and after semicolons
        'semi': ['error', 'never'], // require or disallow use of semicolons instead of ASI
        'sort-vars': 'off', // sort variables within the same declaration block
        'keyword-spacing': 'error', // require a space before/after certain keywords
        'space-before-blocks': 'error', // require or disallow a space before blocks
        'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never' }], // require or disallow a space before function opening parenthesis
        'space-in-parens': 'error', // require or disallow spaces inside parentheses
        'space-infix-ops': 'error', // require spaces around operators
        'space-unary-ops': 'off', // require or disallow spaces before/after unary operators
        'spaced-comment': 'off', // require or disallow a space immediately following the // or /* in a comment
        'wrap-regex': 'off', // require regex literals to be wrapped in parentheses

        //
        // ECMAScript 6
        //
        // These rules are only relevant to ES6 environments.
        //
        'arrow-body-style': 'off', // require braces in arrow function body
        'arrow-parens': 'error', // require parens in arrow function arguments
        'arrow-spacing': 'error', // require space before/after arrow function's arrow
        'constructor-super': 'error', // verify calls of super() in constructors
        'generator-star-spacing': 'error', // enforce spacing around the * in generator functions
        'no-class-assign': 'error', // disallow modifying variables of class declarations
        'no-confusing-arrow': 'error', // disallow arrow functions where a condition is expected
        'no-const-assign': 'error', // disallow modifying variables that are declared using const
        'no-dupe-class-members': 'error', // disallow duplicate name in class members
        'no-this-before-super': 'error', // disallow use of this/super before calling super() in constructors.
        'no-var': 'error', // require let or const instead of var
        'object-shorthand': 'off', // require method and property shorthand syntax for object literals
        'prefer-arrow-callback': 'error', // suggest using arrow functions as callbacks
        'prefer-const': 'error', // suggest using const declaration for variables that are never modified after declared
        'prefer-reflect': 'off', // suggest using Reflect methods where applicable
        'prefer-spread': 'error', // suggest using the spread operator instead of .apply().
        'prefer-template': 'error', // suggest using template literals instead of strings concatenation
        'require-yield': 'error', // disallow generator functions that do not have yield

        //
        // eslint-plugin-react
        //
        // React specific linting rules for ESLint
        //
        'react/display-name': 'off', // Prevent missing displayName in a React component definition
        'react/jsx-boolean-value': 'error', // Enforce boolean attributes notation in JSX (fixable)
        'react/jsx-no-duplicate-props': 'error', // Prevent duplicate props in JSX
        'react/jsx-no-undef': 'error', // Disallow undeclared variables in JSX
        'react/jsx-uses-react': 'error', // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-vars': 'error', // Prevent variables used in JSX to be incorrectly marked as unused
        'react/no-danger': 'error', // Prevent usage of dangerous JSX properties
        'react/no-deprecated': 'error', // Prevent usage of deprecated methods
        'react/no-did-mount-set-state': 'error', // Prevent usage of setState in componentDidMount
        'react/no-did-update-set-state': 'error', // Prevent usage of setState in componentDidUpdate
        'react/no-direct-mutation-state': 'error', // Prevent direct mutation of this.state
        'react/no-is-mounted': 'error', // Prevent usage of isMounted
        'react/no-multi-comp': 'off', // Prevent multiple component definition per file
        'react/no-unknown-property': 'error', // Prevent usage of unknown DOM property
        'react/prop-types': 'error', // Prevent missing props validation in a React component definition
        'react/react-in-jsx-scope': 'error', // Prevent missing React when using JSX
        'react/self-closing-comp': 'error', // Prevent extra closing tags for components without children
        'react/prefer-es6-class': 'error', // Enforce ES5 or ES6 class for React Components
        'react/jsx-wrap-multilines': 'error', // Prevent missing parentheses around multilines JSX,
        'react/jsx-no-bind': 'warn', // Prevent binding of functions within a JSX template definition

        //
        // eslint-plugin-babel
        //
        // Babel specific linting rules for ESLint
        //
        'babel/no-invalid-this': 'error', // doesn't fail when inside class properties (class A { a = this.b; })
    },
}
