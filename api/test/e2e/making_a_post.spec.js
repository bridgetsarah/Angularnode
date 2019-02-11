// api/test/e2e/making_a_post.spec.js - p146
import { element, ExpectedConditions } from "protractor";

var chai = require('chai')
chai.use(require('chai-as-promised'))
var expect = chai.expect


 
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
        var post = 'my new post' + Math.random()
        element(by.model('postbody')).sendKeys(post)
        element(by.css('form .btn')).click()
        
        //the user should now see their post as the first post on the page
        
        //chai as promised
        expect(element.all(by.css('ul.list-group li')).first().getText()).
            to.eventually.contain(post)
            })
        })    
        // wipe database after each run of protractor
        afterEach(function (){
            db.connection.db.dropDatabase()
        }) 

        // - FOR POSSIBLE - REMOVE - //  var db = require('../../db')