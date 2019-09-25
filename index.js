/* eslint-disable no-magic-numbers */
const prettierOptions = require('./prettierOptions')

module.exports = {
    parser: 'babel-eslint',
    extends: [
        'eslint:recommended',
        'plugin:jest/recommended',
        'plugin:promise/recommended',
        'prettier',
        'prettier/flowtype',
        'prettier/react',
    ],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            globalReturn: true,
            jsx: true,
        },
    },
    plugins: [
        'react',
        'babel',
        'import',
        'jest',
        'promise',
        'flowtype-errors',
        'flowtype',
        'prettier',
    ],
    settings: {
        'import/internal-module-folders': ['~/'],
        'import/resolver': {
            'babel-module': {},
        },
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },
    overrides: [
        {
            files: ['**/__tests__ /**', '**/__mocks__/**', '*.test.*'],
            rules: {
                'max-depth': 'off',
                'max-nested-callbacks': 'off',
                'no-magic-numbers': 'off',
            },
        },
    ],
    rules: {
        //
        // Override recommended rules
        //
        'no-console': 'error', // disallow use of console in the node environment
        'no-unused-vars': ['error', { args: 'none' }], // disallow declaration of variables that are not used in the code
        'no-empty-function': [
            'error',
            {
                allow: [
                    // Disallow empty functions for arrow functions
                    'functions',
                    // 'arrowFunctions',
                    'generatorFunctions',
                    'methods',
                    'generatorMethods',
                    'getters',
                    'setters',
                    'constructors',
                ],
            },
        ],

        //
        // Possible Errors
        //
        // The following rules point out areas where you might have made mistakes.
        //
        'no-unexpected-multiline': 'error', // Avoid code that looks like two expressions but is actually one
        'valid-jsdoc': 'off', // Ensure JSDoc comments are valid
        'no-template-curly-in-string': 'error', // Disallow template literal placeholder syntax in regular strings

        //
        // Best Practices
        //
        // These are rules designed to prevent you from making mistakes.
        // They either prescribe a better way of doing something or help you avoid footguns.
        //
        'accessor-pairs': 'off', // Enforces getter/setter pairs in objects
        'block-scoped-var': 'error', // treat var statements as if they were block scoped
        complexity: 'warn', // specify the maximum cyclomatic complexity allowed in a program
        'consistent-return': 'error', // require return statements to either always or never specify values
        curly: 'error', // specify curly brace conventions for all control statements
        'default-case': 'error', // require default case in switch statements
        'dot-notation': 'off', // encourages use of dot notation whenever possible
        eqeqeq: ['error', 'allow-null'], // require the use of === and !==
        'guard-for-in': 'error', // make sure for-in loops have an if statement
        'no-alert': 'error', // disallow the use of alert, confirm, and prompt
        'no-caller': 'error', // disallow use of arguments.caller or arguments.callee
        'no-case-declarations': 'error', // disallow lexical declarations in case clauses
        'no-constant-condition': 'error', // Disallow use of constant expressions in conditions
        'no-div-regex': 'error', // disallow division operators explicitly at beginning of regular expression
        'no-else-return': 'error', // disallow else after a return in an if
        'no-empty-pattern': 'error', // disallow use of empty destructuring patterns
        'no-eval': 'error', // disallow use of eval()
        'no-extend-native': 'error', // disallow adding to native types
        'no-extra-bind': 'error', // disallow unnecessary function binding
        'no-floating-decimal': 'error', // disallow the use of leading or trailing decimal points in numeric literals
        'no-global-assign': 'error',
        'no-implicit-coercion': 'error', // disallow the type conversions with shorter notations
        'no-implied-eval': 'error', // disallow use of eval()-like methods
        'no-invalid-this': 'off', // disallow this keywords outside of classes or class-like objects
        'no-iterator': 'error', // disallow usage of __iterator__ property
        'no-labels': 'error', // disallow use of labeled statements
        'no-lone-blocks': 'error', // disallow unnecessary nested blocks
        'no-loop-func': 'error', // disallow creation of functions within loops
        'no-magic-numbers': [
            'error',
            { ignore: [-3, -2, -1, 0, 1, 2, 3], ignoreArrayIndexes: true },
        ], // disallow the use of magic numbers
        'no-multi-str': 'error', // disallow use of multiline strings
        'no-native-reassign': 'error', // disallow reassignments of native objects
        'no-new-func': 'error', // disallow use of new operator for Function object
        'no-new-wrappers': 'error', // disallows creating new instances of String,Number, and Boolean
        'no-new': 'error', // disallow use of new operator when not part of the assignment or comparison
        'no-octal-escape': 'error', // disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
        'no-param-reassign': 'error', // disallow reassignment of function parameters
        'no-proto': 'error', // disallow usage of __proto__ property
        'no-return-assign': 'error', // disallow use of assignment in return statement
        'no-return-await': 'error', // Disallows unnecessary return await
        'no-script-url': 'error', // disallow use of javascript: urls.
        'no-self-compare': 'error', // disallow comparisons where both sides are exactly the same
        'no-sequences': 'error', // disallow use of comma operator
        'no-throw-literal': 'error', // restrict what can be thrown as an exception
        'no-unmodified-loop-condition': 'error', // disallow unmodified loop conditions
        'no-unused-expressions': 'error', // disallow usage of expressions in statement position
        'no-useless-call': 'error', // disallow unnecessary .call() and .apply()
        'no-useless-concat': 'error', // disallow unnecessary concatenation of literals or template literals
        'no-useless-return': 'error', // disallow redundant return statements
        'no-void': 'error', // disallow use of void operator
        'no-warning-comments': [
            'warn',
            {
                terms: ['todo', 'fixme', '@todo', '@hack', 'hack'],
                location: 'start',
            },
        ], // disallow usage of configurable warning terms in comments': 'error', // e.g. TODO or FIXME
        'no-with': 'error', // disallow use of the with statement
        'prefer-promise-reject-errors': 'error', // require using Error objects as Promise rejection reasons
        radix: 'error', // require use of the second argument for parseInt()
        'vars-on-top': 'off', // require declaration of all vars at the top of their containing scope
        yoda: 'off', // require or disallow Yoda conditions
        'array-callback-return': 'error',

        //
        // Strict Mode
        //
        // These rules relate to using strict mode.
        //
        strict: ['error', 'never'], // controls location of Use Strict Directives

        //
        // Variables
        //
        // These rules have to do with variable declarations.
        //
        'init-declarations': 'off', // enforce or disallow variable initializations at definition
        'no-catch-shadow': 'error', // disallow the catch clause parameter name being the same as a variable in the outer scope
        'no-label-var': 'error', // disallow labels that share a name with a variable
        'no-shadow-restricted-names': 'error', // disallow shadowing of names such as arguments
        'no-shadow': [
            // disallow declaration of variables already declared in the outer scope and globals
            'error',
            {
                builtinGlobals: true,
            },
        ],
        // 'no-undef-init': 'error', // disallow use of undefined when initializing variables
        'no-undefined': 'off', // disallow use of undefined variable
        'no-use-before-define': ['error', 'nofunc'], // disallow use of variables before they are defined

        //
        // Stylistic Issues
        //
        // These rules are purely matters of style and are quite subjective.
        //

        camelcase: 'error', // require camel case names
        'consistent-this': 'off', // enforce consistent naming when capturing the current execution context
        'func-name-matching': 'error', // require function names to match the name of the variable or property to which they are assigned
        'func-names': 'error', // require function expressions to have a name
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }], // enforce use of function declarations or expressions
        'id-length': 'off', // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
        'id-match': 'off', // require identifiers to match the provided regular expression
        'linebreak-style': 'error', // disallow mixed 'LF' and 'CRLF' as linebreaks
        'lines-around-comment': 'off', // enforce empty lines around comments
        'max-depth': ['warn', 6], // specify the maximum depth that blocks can be nested
        'max-len': 'off', // specify the maximum length of a line in your program
        'max-nested-callbacks': ['warn', 3], // specify the maximum depth callbacks can be nested
        'max-params': ['error', 3], // limits the number of parameters that can be used in the function declaration.
        'max-statements': 'off', // specify the maximum number of statement allowed in a function
        'max-statements-per-line': ['error', { max: 1 }], // specify the maximum number of statement allowed per line
        'new-cap': 'off', // require a capital letter for constructors
        'newline-after-var': 'error', // require or disallow an empty newline after variable declarations
        'no-array-constructor': 'error', // disallow use of the Array constructor
        'no-bitwise': 'off', // disallow use of bitwise operators
        'no-continue': 'off', // disallow use of the continue statement
        'no-inline-comments': 'off', // disallow comments inline after code
        'no-lonely-if': 'error', // disallow if as the only statement in an else block
        'no-negated-condition': 'off', // disallow negated conditions
        'no-nested-ternary': 'off', // disallow nested ternary expressions
        'no-new-object': 'error', // disallow the use of the Object constructor
        'no-plusplus': 'off', // disallow use of unary operators, ++ and --
        'no-restricted-syntax': 'off', // disallow use of certain syntax in code
        'no-tabs': 'error', // disallow all tabs
        'no-ternary': 'off', // disallow the use of ternary operators
        'no-underscore-dangle': 'off', // disallow dangling underscores in identifiers
        'no-unneeded-ternary': ['error', { defaultAssignment: false }], // disallow the use of ternary operators when a simpler alternative exists
        'one-var': ['error', 'never'], // require or disallow one variable declaration per function
        'operator-assignment': 'error', // require assignment operator shorthand where possible or prohibit it entirely
        quotes: [
            'error',
            'single',
            { avoidEscape: true, allowTemplateLiterals: true },
        ], // specify whether backticks, double or single quotes should be used
        'require-jsdoc': 'off', // Require JSDoc comment
        'sort-vars': 'off', // sort variables within the same declaration block
        'sort-keys': 'off', // sort keys
        'spaced-comment': 'off', // require or disallow a space immediately following the // or /* in a comment

        //
        // Node.js and Commonjs
        //
        // These rules are only relevant to Node.js
        'no-path-concat': 'error',
        'no-new-require': 'error',
        'no-process-env': 'error', // disallow use of process.env

        //
        // ECMAScript 6
        //
        // These rules are only relevant to ES6 environments.
        //
        'arrow-body-style': 'off', // require braces in arrow function body
        'constructor-super': 'error', // verify calls of super() in constructors
        'no-class-assign': 'error', // disallow modifying variables of class declarations
        'no-confusing-arrow': 'error', // disallow arrow functions where a condition is expected
        'no-const-assign': 'error', // disallow modifying variables that are declared using const
        'no-dupe-class-members': 'error', // disallow duplicate name in class members
        'no-this-before-super': 'error', // disallow use of this/super before calling super() in constructors.
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error', // require let or const instead of var
        'object-shorthand': 'error', // require method and property shorthand syntax for object literals
        'prefer-arrow-callback': 'error', // suggest using arrow functions as callbacks
        'prefer-const': 'error', // suggest using const declaration for variables that are never modified after declared
        'prefer-destructuring': [
            'error',
            { object: true, array: false },
            { enforceForRenamedProperties: false },
        ],
        'prefer-reflect': 'off', // suggest using Reflect methods where applicable
        'prefer-rest-params': 'error',
        'prefer-spread': 'error', // suggest using the spread operator instead of .apply().
        'prefer-template': 'error', // suggest using template literals instead of strings concatenation
        'require-yield': 'error', // disallow generator functions that do not have yield
        'symbol-description': 'error',

        //
        // eslint-plugin-react
        //
        // React specific linting rules for ESLint
        //
        'react/display-name': 'off', // Prevent missing displayName in a React component definition
        'react/boolean-prop-naming': 'error',
        'react/forbid-foreign-prop-types': 'error',
        'react/jsx-boolean-value': 'error', // Enforce boolean attributes notation in JSX (fixable)
        'react/jsx-filename-extension': 'error',
        'react/jsx-key': 'error',
        'react/jsx-no-bind': 'off', // Prevent binding of functions within a JSX template definition
        'react/jsx-no-duplicate-props': 'error', // Prevent duplicate props in JSX
        'react/jsx-no-undef': 'error', // Disallow undeclared variables in JSX
        'react/jsx-pascal-case': 'error',
        'react/jsx-sort-props': 'off',
        'react/jsx-uses-react': 'error', // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-vars': 'error', // Prevent variables used in JSX to be incorrectly marked as unused
        'react/no-array-index-key': 'error',
        'react/no-danger': 'error', // Prevent usage of dangerous JSX properties
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error', // Prevent usage of deprecated methods
        'react/no-did-mount-set-state': 'error', // Prevent usage of setState in componentDidMount
        'react/no-did-update-set-state': 'error', // Prevent usage of setState in componentDidUpdate
        'react/no-direct-mutation-state': 'error', // Prevent direct mutation of this.state
        'react/no-find-dom-node': 'warn',
        'react/no-is-mounted': 'error', // Prevent usage of isMounted
        'react/no-multi-comp': 'off', // Prevent multiple component definition per file
        'react/no-redundant-should-component-update': 'error',
        'react/no-string-refs': 'error',
        // 'react/no-typos': 'error', // Turning off due to a weird crash bug
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error', // Prevent usage of unknown DOM property
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': 'error', // Enforce ES5 or ES6 class for React Components
        'react/prop-types': 'error', // Prevent missing props validation in a React component definition
        'react/react-in-jsx-scope': 'error', // Prevent missing React when using JSX
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error', // Prevent extra closing tags for components without children
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',

        //
        // eslint-plugin-babel
        //
        // Babel specific linting rules for ESLint
        //
        'babel/no-invalid-this': 'error', // doesn't fail when inside class properties (class A { a = this.b; })

        //
        // eslint-plugin-import
        //
        // Babel specific linting rules for ESLint
        //
        // Enforce a convention in the order of require() / import statements.
        //      https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                ],
                'newlines-between': 'always',
            },
        ],

        //
        // eslint-plugin-flowtype
        //
        // flowtype specific linting rules for ESLint
        //
        'flowtype/boolean-style': ['error', 'boolean'],
        'flowtype/no-dupe-keys': 'error',
        'flowtype/no-primitive-constructor-types': 'off',
        'flowtype/no-types-missing-file-annotation': 'error',
        'flowtype/no-weak-types': 2,
        'flowtype/require-valid-file-annotation': [
            'warn',
            'never',
            { annotationStyle: 'line' },
        ],
        'flowtype/sort-keys': 'off',

        //
        // eslint-plugin-flowtype-errors
        //
        // flowtype-errors specific linting rules for ESLint
        //

        //
        // eslint-plugin-prettier
        //
        // prettier specific linting rules for ESLint
        //
        'prettier/prettier': ['error', prettierOptions],

        // jest specific rules
        'jest/prefer-expect-assertions': 'error',
    },
}
