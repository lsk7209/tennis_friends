import fs from "node:fs";
import Module, { createRequire } from "node:module";
import path from "node:path";
import ts from "typescript";
const ROOT = process.cwd();
const require = createRequire(import.meta.url);
function registerSourceTranspiler() {
  const originalResolve = Module._resolveFilename;
  const originalJs = Module._extensions[".js"];

  Module._resolveFilename = function resolveFilename(request, parent, isMain, options) {
    if (request.startsWith("@/")) {
      return originalResolve.call(
        this,
        path.join(ROOT, "src", request.slice(2)),
        parent,
        isMain,
        options,
      );
    }

    return originalResolve.call(this, request, parent, isMain, options);
  };

  function transpile(filename) {
    const source = fs.readFileSync(filename, "utf8");
    return ts.transpileModule(source, {
      compilerOptions: {
        allowJs: true,
        esModuleInterop: true,
        jsx: ts.JsxEmit.ReactJSX,
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
      },
      fileName: filename,
    }).outputText;
  }

  Module._extensions[".ts"] = (module, filename) => {
    module._compile(transpile(filename), filename);
  };

  Module._extensions[".js"] = (module, filename) => {
    if (filename.startsWith(path.join(ROOT, "src"))) {
      module._compile(transpile(filename), filename);
      return;
    }

    originalJs(module, filename);
  };
}


registerSourceTranspiler();
export function loadProjectSource(file) { return require(path.join(ROOT, file)); }
