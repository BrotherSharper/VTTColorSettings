var fs = require("fs");
const rootFiles = fs.readdirSync("/");

const manifestJson = JSON.parse(fs.readFileSync("module.json", "utf8"));

const changelog = manifestJson.url.replace("/tree/master", "") + "/blob/master/CHANGELOG.md";
const compCore = manifestJson.compatibleCoreVersion;
const id = manifestJson.name;
const manifest = manifestJson.manifest.replace("/master/", `/${manifestJson.version}/`);
const minCore = manifestJson.minimumCoreVersion;
const version = manifestJson.version;

console.log(
  JSON.stringify({
    moduleId: id,
    moduleVersion: version,
    moduleManifest: manifest,
    moduleChangelog: changelog,
    moduleMinCore: minCore,
    moduleCompCore: compCore,
  })
);
