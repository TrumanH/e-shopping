
describe('stripe payment report', () => {
    test('download the report csv file content through lambda function', ()=>{
      const url = "https://files.stripe.com/v1/files/file_1NBEYxJe2io634wrdmw2Ml9d/contents";
      fetch('./netlify/functions/get-report-file-content', {
        method: 'GET',
        headers: {'Content_Type': 'application/json'},
        body: JSON.stringify({url: url}),
      }).then(resp=>console.log(resp.body));
    });

    test('row fetch download report file', () => {
      const key = ''; // manually fill secret key, should not exit in codebase
      const heads = {'Authorization': 'Bearer ' + key}
      const url = 'https://files.stripe.com/v1/files/file_1NBEYxJe2io634wrdmw2Ml9d/contents'
      fetch(url, {method:'GET', headers: heads})
      .then(resp => resp.text())  // csv should use text() method insread
      .then(data => console.log(data)); 
    });
});

export {};