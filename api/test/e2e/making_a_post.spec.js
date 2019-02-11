import { element } from "protractor";

// api/test/e2e/making_a_post.spec.js - p146

 
describe('making a post', function(){
    it('logs in and creaes a new post', function() {
        browser.get('http://localhost:3001')
        // click login
        element(by.css('nav .login')).click()
        // fill out and submit login form
        element(by.model('username')).sendKeys('bridgetsarah')
        element(by.model('password')).sendKeys('pass')
        element(by.css('form .btn')).click()

        //submit a new post on the posts page
        var post = 'my new post'
        element(by.model('postbody')).sendKeys(post)
        element(by.css('form .btn')).click()
        
        //the user should now see their post as the first post on the page
        
        browser.pause()
    })
    
})
 