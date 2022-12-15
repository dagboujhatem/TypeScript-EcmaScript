# TypeScript project 2:

## About this project:

In this project, you can learn how to use typescript in your computer in order to create a modern Web application.

In this project we have created an application that allows to modify the global `window` interface of javascript in order to add other properities and/or methods. Moreover, we will learn how to add the declaration files in order to type the javascript libraries that are not typed.

## Steps to create this project:

1. Create a new TypeScript project.
2. Add `declaration` & `declarationDir` options in your `tsconfig.json` file.
3. Create a folder named `types` in `src` folder.
4. Add `"include": ["src/**/*"]` options in your `tsconfig.json` file.
5. Create a new file, with the name `filename.d.ts`, in folder named `types`.
6. Add the `declarations` in your file. [Here](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html) you read more about how we can add the declarations.