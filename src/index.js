const changeCase = require('change-case');

module.exports = function ({ types: t }) {
  return {
    visitor: {
      ImportDeclaration(path, _ref = { opts: {} }) {
        const specifiers = path.node.specifiers;
        const source = path.node.source;
        const libraryName = _ref.opts.libraryName || '';
        if (!libraryName) {
          return;
        }
        if (libraryName === source.value && !t.isImportDefaultSpecifier(specifiers[0])) {
          const declarations = specifiers.map((sp, i) => {
            return t.ImportDeclaration(
              [t.importDefaultSpecifier(sp.local)],
              t.StringLiteral(`${source.value}/lib/${changeCase.paramCase(sp.local.name)}`)
            )
          });
          path.replaceWithMultiple(declarations);
        }
      }
    }
  }
};
