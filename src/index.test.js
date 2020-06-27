import {expect} from 'chai';
// import {JSDOM} from 'jsdom';
// import fs from 'fs';

describe('Setup tests', ()=>{
   it('should pass', ()=>{
       expect(true).to.equal(true);
   })
});

// describe('index.html test', ()=>{
//     it('should say js web kit', ()=>{
//         const index = fs.readFileSync('./src/index.html', 'utf-8');
//         const DOM = new JSDOM(index);
//         const h1 = DOM.window.document.getElementsByTagName('h1')[0];
//         expect(h1.innerHTML.toLowerCase()).to.equal('js web kit');
//         DOM.window.close();
//     })
// })
