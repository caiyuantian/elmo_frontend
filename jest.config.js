module.exports = {
    "collectCoverage": true,
    "testEnvironment": "jsdom",
    "moduleFileExtensions": [
        "js",
        "ts",
        "tsx"
    ],
    "moduleNameMapper": {
        "\\.(css|scss)$": "identity-obj-proxy"
    },
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "testMatch": [
        "<rootDir>/test/**/?(*.)(spec|test).ts?(x)"
    ]
}