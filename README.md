# Issue Reproduction for `ts-jest`.

Minimal reproduction of [issue #1648](https://github.com/kulshekhar/ts-jest/issues/1648).

# Setup

```
npm install
```

# Reproduction

When typechecking with `npm run typecheck` there are no errors, but when testing with
`npm run test` you'll come across TS compilation errors, which indicate that the
"resolveJsonModule" and "esModuleInterop" compilerOptions as defined in
`src/tsconfig.example.json` are not being observed.
