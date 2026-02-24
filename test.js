const { execSync } = require('child_process');
const fs = require('fs');

const cases = [
    "@variant hover (@media (hover: hover) { &:hover });",
    "@custom-variant hover (@media (hover: hover)) { &:hover { @slot } }",
    "@theme { --variant-hover: @media (hover: hover) and (pointer: fine) { &:hover }; }"
];

for (let i = 0; i < cases.length; i++) {
    fs.writeFileSync('test.css', `@import "tailwindcss";\n${cases[i]}`);
    try {
        execSync('cmd.exe /c npx @tailwindcss/cli -i test.css -o out.css', { stdio: 'pipe' });
        console.log(`Case ${i} SUCCESS. CSS: ${cases[i]}`);
    } catch (e) {
        console.log(`Case ${i} FAILED. Error: ${e.message}`);
    }
}
