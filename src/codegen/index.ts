import * as ts from "typescript";

export const transpile = (sourceCode: string): ts.Program => {
  const sourceFile = ts.createSourceFile(
    "source.ts",
    sourceCode,
    ts.ScriptTarget.ES5,
    true,
  );
  const compilerHost: ts.CompilerHost = {
    getSourceFile: (fileName, target) => sourceFile,
    writeFile: (name, text, writeByteOrderMark) => {},
    getDefaultLibFileName: () => {
      return "lib.d.ts";
    },
    useCaseSensitiveFileNames: () => {
      return false;
    },
    getCanonicalFileName: (fileName) => fileName,
    getCurrentDirectory: () => "",
    getDirectories: () => [],
    getNewLine: () => "\n",
    fileExists: (fileName) => fileName === "source.ts",
    readFile: (fileName) => (fileName == "source.ts" ? sourceCode : undefined),
    directoryExists: (dirName) => dirName === "",
  };

  return ts.createProgram(["source.ts"], { noLib: true }, compilerHost);
};

export const codegen = (sourceCode: string): string => {
  const program = transpile(sourceCode);
  const checker = program.getTypeChecker();

  program
    .getSourceFiles()
    .flatMap((s) => s.statements)
    .filter((s) => s.kind === ts.SyntaxKind.TypeAliasDeclaration)
    .map((s) => {});

  return "";
};
